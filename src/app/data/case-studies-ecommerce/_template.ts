// ==========================================================================
// ⚠️ ไฟล์นี้เป็น "แม่แบบ" (template) เท่านั้น — ห้ามลงทะเบียนไฟล์นี้ใน index.ts
// ห้ามลบไฟล์นี้ทิ้ง ใช้เป็นต้นแบบตอนจะเพิ่มโปรเจกต์ใหม่เท่านั้น
//
// วิธีใช้:
// 1. Copy ไฟล์นี้ไปตั้งชื่อใหม่ในโฟลเดอร์เดียวกัน (เช่น my-new-project.ts)
// 2. เปลี่ยนชื่อตัวแปรที่ export จาก `template` เป็นชื่ออื่น (เช่น `myNewProject`)
// 3. กรอกเนื้อหาแทนที่ "" ตาม comment ในไฟล์
// 4. ไปเปิด index.ts ในโฟลเดอร์นี้ เพิ่ม import + เพิ่มเข้า object ecommerceCaseStudies
// 5. เพิ่ม entry คู่กันใน src/app/data/projects.ts (layoutType: "ecommerce")
// ==========================================================================

import type { EcommerceCaseStudy } from "./types";

export const template: EcommerceCaseStudy = {
  hero: {
    label: "", // ข้อความเล็กเหนือหัวข้อใหญ่สุด (ของเดิมใช้ "Case Study") — บังคับ
    headline: "", // หัวข้อใหญ่สุด (H1) ของหน้า ยาวได้ (เป็นประโยคอธิบายโปรเจกต์) — บังคับ
    intro: [], // ย่อหน้าเปิดเรื่อง ใส่เป็น string ทีละย่อหน้า แสดงต่อกันตามลำดับ ใส่ได้กี่ย่อหน้าก็ได้ — บังคับ (อย่างน้อย 1 ย่อหน้า)
    tags: [], // แถบ Tag ใต้ย่อหน้าเปิดเรื่อง เช่น ["E-Commerce", "Web"] — บังคับ
    image: { src: "", alt: "" }, // รูป hero ใหญ่ใต้เนื้อหาเปิดเรื่อง — บังคับ (src ใส่ URL รูป, alt ใส่คำอธิบายรูปสั้นๆ)
  },

  // ------------------------------------------------------------------------
  // ทุก section ด้านล่างนี้เป็น OPTIONAL — ลบทั้งก้อนทิ้งได้ถ้าไม่ต้องการ
  // section นั้น เลขลำดับ "01-05" ของ section ที่เหลือจะขยับให้เองอัตโนมัติ
  // ------------------------------------------------------------------------

  // Section "01 — The Challenge"
  challenge: {
    label: "", // ต่อท้ายเลขลำดับที่คำนวณอัตโนมัติ กลายเป็น "01 — [label]"
    title: "", // หัวข้อรองของ section
    paragraphs: [], // ย่อหน้าเนื้อหา ใส่ทีละย่อหน้า ใส่ได้กี่ย่อหน้าก็ได้
    image: { src: "", alt: "", caption: "" }, // รูปประกอบ + ข้อความเล็กใต้รูป (จะไม่ใส่ caption ก็ได้ ลบ key "caption" ทิ้ง)
  },

  // Section "02 — My Approach"
  approach: {
    label: "",
    title: "",
    paragraphs: [],
    backgroundImage: { src: "", alt: "" }, // รูปจางๆ ด้านหลังตาราง (ความจางกำหนดในโค้ด ไม่ใช่ data)
    decisionTable: {
      columns: [], // หัวตาราง 3 คอลัมน์ เช่น ["Business Requirement", "UX Assumption", "Design Decision"]
      rows: [], // แถวของตาราง ใส่ได้กี่แถวก็ได้ รูปแบบแต่ละแถว: { business: "...", ux: "...", design: "..." }
    },
  },

  // Section "03 — Solution"
  solution: {
    label: "",
    title: "",
    paragraphs: [],
    // การ์ด feature เรียงต่อกัน ใส่ได้กี่ใบก็ได้ เลข "01/02/03" หน้าแต่ละใบคำนวณ
    // อัตโนมัติจากตำแหน่งในลิสต์นี้ ไม่ต้องระบุเอง รูปแบบแต่ละใบ:
    // { title: "...", description: "...", image: { src: "...", alt: "..." } }
    // — หรือถ้ายังไม่มีรูปสำหรับใบไหน ใช้ { title: "...", description: "...", placeholderLabel: "ข้อความในกล่องแทนรูป" } แทน
    features: [],
  },

  // Section "04 — Collaboration Highlight"
  collaboration: {
    label: "",
    title: "",
    paragraphs: [],
    beforeAfter: {
      title: "", // หัวข้อการ์ด before/after
      description: "", // คำอธิบายเล็กใต้หัวข้อ
      image: { src: "", alt: "" },
    },
  },

  // Section "05 — Reflection"
  reflection: {
    label: "",
    title: "",
    paragraphs: [],
    quote: {
      backgroundImage: { src: "", alt: "" },
      text: "", // ข้อความ quote ตัวใหญ่ (ใส่เครื่องหมายคำพูดเองถ้าต้องการ เช่น "\"...\"")
      attribution: "", // บรรทัดเล็กใต้ quote เช่น "— Key takeaway"
    },
  },

  nextProjectId: "", // id ของโปรเจกต์ถัดไปที่จะโชว์เป็นปุ่ม "Next Project" ท้ายหน้า — ต้องตรงกับ id ใน projects.ts เช่น "smart-living" — ลบทิ้งได้ถ้าไม่มี (หรือใส่ id ที่ published: false ปุ่มจะไม่โชว์เองอัตโนมัติ)
};
