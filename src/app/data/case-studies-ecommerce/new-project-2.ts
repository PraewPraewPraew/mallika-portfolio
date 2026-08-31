// 🆕 โครงเปล่า "new-project-2" — ชื่อไฟล์/ตัวแปรนี้เปลี่ยนได้เองถ้าต้องการ แค่
// ต้องตามไปแก้ import ใน index.ts ให้ตรงด้วย — id ที่ใช้จริง (key ใน index.ts
// และ id ใน data/projects.ts) ต้องตรงกัน ถ้าจะเปลี่ยน id ให้ขอ Claude Code ช่วย
//
// กรอกข้อความ/URL แทนที่ "" หรือ [] ได้เลยด้วยตัวเอง — field ที่มี label
// "OPTIONAL" กำกับไว้ ลบทั้งก้อนทิ้งได้เลยถ้าไม่ต้องการ section นั้น มันจะหายไป
// จากหน้าเว็บเองอัตโนมัติ พร้อมกับเลขลำดับ "01-05" ของ section ที่เหลือจะขยับ
// ให้เองอัตโนมัติด้วย ไม่ต้องแก้เลขเอง

import type { EcommerceCaseStudy } from "./types";

export const newProject2: EcommerceCaseStudy = {
  hero: {
    label: "", // ข้อความเล็กเหนือหัวข้อใหญ่สุด (ของเดิมใช้ "Case Study")
    headline: "", // หัวข้อใหญ่สุด (H1) ของหน้า ยาวได้ (เป็นประโยคอธิบายโปรเจกต์)
    intro: [], // ย่อหน้าเปิดเรื่อง ใส่เป็น string ทีละย่อหน้า แสดงต่อกันตามลำดับ ใส่ได้กี่ย่อหน้าก็ได้
    tags: [], // แถบ Tag ใต้ย่อหน้าเปิดเรื่อง เช่น ["E-Commerce", "Web"]
    image: { src: "", alt: "" }, // รูป hero ใหญ่ใต้เนื้อหาเปิดเรื่อง — src ใส่ URL รูป, alt ใส่คำอธิบายรูปสั้นๆ (สำหรับ accessibility)
  },
  // Section "01 — The Challenge" (OPTIONAL) — ลบทั้ง key "challenge" นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
  challenge: {
    label: "", // ต่อท้ายเลขลำดับที่คำนวณอัตโนมัติ กลายเป็น "01 — [label]"
    title: "", // หัวข้อรองของ section
    paragraphs: [], // ย่อหน้าเนื้อหา ใส่ทีละย่อหน้า ใส่ได้กี่ย่อหน้าก็ได้
    image: { src: "", alt: "", caption: "" }, // รูปประกอบ + ข้อความเล็กใต้รูป (จะไม่ใส่ caption ก็ได้ ลบ key "caption" ทิ้ง)
  },
  // Section "02 — My Approach" (OPTIONAL) — ลบทั้ง key "approach" นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
  approach: {
    label: "",
    title: "",
    paragraphs: [],
    backgroundImage: { src: "", alt: "" }, // รูปจางๆ ด้านหลังตาราง (ความจางกำหนดในโค้ด ไม่ใช่ data)
    decisionTable: {
      columns: [], // หัวตาราง 3 คอลัมน์ เช่น ["Business Requirement", "UX Assumption", "Design Decision"]
      // แถวของตาราง ใส่ได้กี่แถวก็ได้ รูปแบบแต่ละแถว: { business: "...", ux: "...", design: "..." }
      rows: [],
    },
  },
  // Section "03 — Solution" (OPTIONAL) — ลบทั้ง key "solution" นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
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
  // Section "04 — Collaboration Highlight" (OPTIONAL) — ลบทั้ง key "collaboration" นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
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
  // Section "05 — Reflection" (OPTIONAL) — ลบทั้ง key "reflection" นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
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
  nextProjectId: "", // id ของโปรเจกต์ถัดไปที่จะโชว์เป็นปุ่ม "Next Project" ท้ายหน้า — ต้องตรงกับ id ใน projects.ts เช่น "smart-living" (ถ้าเว้นว่างไว้หรือใส่ id ที่ published: false ปุ่มนี้จะไม่โชว์เองอัตโนมัติ)
};
