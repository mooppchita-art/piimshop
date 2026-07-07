# P&I Shop — เว็บไซต์ร้านค้า (GitHub Pages)

เว็บไซต์ Landing Page สไตล์ Cozy สำหรับ P&I Shop สร้างด้วย HTML + CSS + JavaScript ล้วน ไม่ต้อง Build ไม่ต้อง npm เปิด `index.html` ได้ทันที

## โครงสร้างไฟล์

```
piimshop/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── hero.jpg          ← ยังไม่มี ต้องใส่รูปเอง (ดูหัวข้อด้านล่าง)
    └── icons/
        └── favicon.svg
```

## ขั้นตอนอัปโหลดขึ้น GitHub Pages (สำหรับผู้เริ่มต้น)

1. **สร้าง Repository ใหม่บน GitHub**
   - เข้า https://github.com/new
   - ตั้งชื่อ เช่น `piimshop`
   - เลือก Public แล้วกด Create repository

2. **อัปโหลดไฟล์ทั้งหมด**
   - เปิด Repository ที่สร้าง กด `Add file` → `Upload files`
   - ลากไฟล์/โฟลเดอร์ทั้งหมด (`index.html`, `style.css`, `script.js`, `README.md`, โฟลเดอร์ `assets`) เข้าไป
   - กด `Commit changes`

3. **เปิดใช้งาน GitHub Pages**
   - ไปที่ `Settings` → `Pages` (เมนูด้านซ้าย)
   - หัวข้อ Source เลือก Branch: `main` และโฟลเดอร์ `/ (root)`
   - กด `Save`

4. **รอสักครู่ (ประมาณ 1-2 นาที)**
   - รีเฟรชหน้า Settings → Pages จะมีลิงก์เว็บไซต์ขึ้นมา เช่น
     `https://ชื่อผู้ใช้.github.io/piimshop/`

## รูป Hero Image

ใส่รูปของ ไอซ์ &amp; ปั้ม พร้อมน้องหมาไว้ที่ `assets/hero.jpg` เรียบร้อยแล้ว หากต้องการเปลี่ยนรูปในอนาคต แค่นำไฟล์ใหม่มาแทนที่ `assets/hero.jpg` (ใช้ชื่อไฟล์เดิม) แล้วอัปโหลดใหม่ ไม่ต้องแก้โค้ดใด ๆ

## แก้ไขลิงก์ร้านค้า

ลิงก์ Shopee และ TikTok อยู่ในไฟล์ `index.html` หลายจุด (ปุ่ม Hero, เมนู, CTA, Footer) — ค้นหาคำว่า `shp.ee` และ `tiktok.com` เพื่อแก้ไขทีเดียวทุกจุดถ้าลิงก์เปลี่ยน

## หมายเหตุ

- ฟอนต์ที่ใช้: Kanit (หัวข้อ) และ Sarabun (เนื้อหา) โหลดจาก Google Fonts รองรับภาษาไทยเต็มรูปแบบ
- มี Animation: Loading Screen, Floating Ember (แสงอบอุ่นลอย), Scroll Reveal, Scroll to Top, Hover บนปุ่ม/การ์ด
- ไม่มี Library ภายนอกอื่นใด นอกจาก Google Fonts เว็บโหลดเร็ว
