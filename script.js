/* =========================================================
   P&I Shop — script.js
   Handles: loading screen, ambient ember animation,
   hero entrance animation, scroll-reveal, scroll-to-top.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initLoadingScreen();
  initAmbientEmbers();
  initHeroEntrance();
  initScrollReveal();
  initScrollTop();
});

/* ---------------------------------------------------------
   Loading screen: fade out once the page has painted.
--------------------------------------------------------- */
function initLoadingScreen() {
  const loader = document.getElementById("loading-screen");
  if (!loader) return;

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 500);
  });
}

/* ---------------------------------------------------------
   Ambient embers: soft warm-light particles drifting upward
   behind the page, evoking string lights in a cozy shop.
   Respects prefers-reduced-motion.
--------------------------------------------------------- */
function initAmbientEmbers() {
  const layer = document.getElementById("ambient-glow");
  if (!layer) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return;

  const emberCount = window.innerWidth < 640 ? 10 : 18;

  for (let i = 0; i < emberCount; i++) {
    const ember = document.createElement("div");
    ember.className = "ember";

    const size = 6 + Math.random() * 16;
    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 12;
    const delay = Math.random() * 14;
    const driftX = (Math.random() - 0.5) * 120;

    ember.style.width = `${size}px`;
    ember.style.height = `${size}px`;
    ember.style.left = `${left}%`;
    ember.style.setProperty("--drift-x", `${driftX}px`);
    ember.style.animationDuration = `${duration}s`;
    ember.style.animationDelay = `${delay}s`;

    layer.appendChild(ember);
  }
}

/* ---------------------------------------------------------
   Hero entrance: staggered fade/slide-up on page load.
--------------------------------------------------------- */
function initHeroEntrance() {
  const items = document.querySelectorAll("[data-hero-anim]");
  items.forEach((el, index) => {
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 250 + index * 130);
  });
}

/* ---------------------------------------------------------
   Scroll reveal: fade/slide-up elements as they enter view.
--------------------------------------------------------- */
function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------
   Scroll-to-top button.
--------------------------------------------------------- */
function initScrollTop() {
  const button = document.getElementById("scroll-top");
  if (!button) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 480) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
