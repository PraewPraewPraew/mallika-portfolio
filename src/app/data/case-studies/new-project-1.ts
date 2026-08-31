// 🆕 โครงเปล่า "new-project-1" — ชื่อไฟล์/ตัวแปรนี้เปลี่ยนได้เองถ้าต้องการ แค่
// ต้องตามไปแก้ import ใน index.ts ให้ตรงด้วย — id ที่ใช้จริง (key ใน index.ts
// และ id ใน data/projects.ts) ต้องตรงกัน ถ้าจะเปลี่ยน id ให้ขอ Claude Code ช่วย
//
// กรอกข้อความ/URL แทนที่ "" หรือ [] ได้เลยด้วยตัวเอง — field ที่มี label
// "OPTIONAL" กำกับไว้ ลบทั้งก้อนทิ้งได้เลยถ้าไม่ต้องการ section นั้น มันจะหายไป
// จากหน้าเว็บเองอัตโนมัติ ไม่ต้องแก้ที่อื่นเพิ่ม

import type { DataDrivenCaseStudy } from "./types";

export const newProject1: DataDrivenCaseStudy = {
  title: "", // หัวข้อใหญ่ในหน้า Hero ของ case study + ชื่อที่โชว์ตอนเป็น "Next Project" ของโปรเจกต์ก่อนหน้า
  subtitle: "", // บรรทัดรองใต้หัวข้อใหญ่ใน Hero (1 ประโยคสั้นๆ)
  category: "", // ข้อความเล็กเหนือหัวข้อใหญ่ใน Hero (เช่น "Web Application") — อันนี้เป็นคนละอันกับ category ใน projects.ts นะ ใส่ข้อความอะไรก็ได้ไม่ผูกกับ filter
  tags: [], // แถบคำ (Tag) ในช่อง "Project Info" ใต้ Hero — ใส่กี่คำก็ได้ เช่น ["SaaS", "Dashboard"]
  year: "", // ช่อง "Year" ใน grid ข้อมูลโปรเจกต์ (Client/Role/Duration/Year)
  client: "", // ช่อง "Client"
  role: "", // ช่อง "Role"
  duration: "", // ช่อง "Duration"
  hero: "", // รูปพื้นหลังเต็มจอของ Hero — วาง URL รูปได้เลย (เช่นจาก unsplash.com) ถ้าจะใช้รูปอัปโหลดเองต้องให้ Claude Code ช่วย import
  // OPTIONAL — ลบทั้ง key "screenshots" นี้ทิ้งได้ถ้าไม่มีรูป section "Screenshots" จะหายไปเอง
  // ใส่ได้กี่รูปก็ได้ (ไม่จำกัดจำนวน) รูปแบบแต่ละรายการ: { src: "URL รูป", caption: "คำบรรยายใต้รูป (จะไม่ใส่ caption ก็ได้ ลบ key นี้ทิ้ง)" }
  screenshots: [],
  overview: "", // ย่อหน้าเดียวใน section "Overview" — section นี้โชว์เสมอ ไม่ใช่ optional (ลบไม่ได้)
  // OPTIONAL — ลบทั้ง key "problem" นี้ทิ้งได้ถ้าไม่ต้องการ section "Problem"
  problem: {
    title: "", // หัวข้อของ section
    description: "", // ย่อหน้านำ
    challenges: [], // list ที่มีเลข badge สีเขียวมะนาวหน้าแต่ละข้ออัตโนมัติ (1,2,3...) — ใส่เป็น string เดี่ยวๆ ทีละข้อ ใส่ได้กี่ข้อก็ได้
  },
  // OPTIONAL — ลบทั้ง key "research" นี้ทิ้งได้ถ้าไม่ต้องการ section "Research"
  research: {
    title: "",
    description: "",
    insights: [], // การ์ดข้อความ จัดเป็น 2 คอลัมน์บนจอใหญ่ — ใส่เป็น string เดี่ยวๆ ทีละข้อ ใส่ได้กี่ข้อก็ได้ (แนะนำเลขคู่จะได้จัด 2 คอลัมน์พอดี)
  },
  // OPTIONAL — ลบทั้ง key "solution" นี้ทิ้งได้ถ้าไม่ต้องการ section "Solution"
  solution: {
    title: "",
    description: "",
    // ใส่ได้กี่รายการก็ได้ รูปแบบแต่ละรายการ: { title: "หัวข้อ feature", description: "คำอธิบาย" }
    features: [],
  },
  // OPTIONAL — ลบทั้ง key "impact" นี้ทิ้งได้ถ้าไม่ต้องการ section "Impact"
  impact: {
    title: "",
    // จัด grid 4 ช่องพอดีถ้าใส่ 4 รายการ แต่ใส่มาก/น้อยกว่าได้ รูปแบบแต่ละรายการ: { value: "ตัวเลขใหญ่ เช่น 85%", label: "คำอธิบายเล็กใต้ตัวเลข" }
    metrics: [],
  },
  nextProject: "", // id ของโปรเจกต์ถัดไปที่จะโชว์เป็นปุ่ม "Next Project" ท้ายหน้า — ต้องตรงกับ key อื่นใน index.ts เช่น "smart-living" (ถ้าเว้นว่างไว้หรือใส่ id ที่ published: false ปุ่มนี้จะไม่โชว์เองอัตโนมัติ)
};
