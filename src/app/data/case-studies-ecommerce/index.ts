// ============================================================================
// รวมข้อมูล case study ทุกโปรเจกต์แบบ "ecommerce" (layoutType: "ecommerce") ให้
// template (case-study-ecommerce.tsx) import ไปใช้ — 1 ไฟล์ = 1 โปรเจกต์ อยู่ใน
// โฟลเดอร์นี้ ไฟล์นี้แค่รวมร่างเข้าด้วยกัน ไม่มีเนื้อหาโปรเจกต์อยู่ตรงนี้เอง
//
// วิธีเพิ่มโปรเจกต์ใหม่ (ทำเองได้ ไม่ต้องพึ่ง Claude Code สำหรับ 3 ขั้นตอนนี้):
//   1. Copy ไฟล์ _template.ts ในโฟลเดอร์นี้ไปตั้งชื่อใหม่ (เช่น my-project.ts)
//      แล้วกรอกเนื้อหาตาม comment ในไฟล์นั้น
//   2. เพิ่มบรรทัด import ด้านล่างนี้ (ก๊อปแบบเดียวกับบรรทัดอื่นแล้วแก้ชื่อ):
//        import { myProject } from "./my-project";
//   3. เพิ่มเข้า object `ecommerceCaseStudies` ด้านล่าง โดย key (ในเครื่องหมาย
//      คำพูด) ต้องตรงกับ id ที่ตั้งไว้ใน src/app/data/projects.ts เป๊ะ:
//        "my-project-id": myProject,
//   4. อย่าลืมเพิ่ม entry คู่กันใน src/app/data/projects.ts ด้วย (layoutType:
//      "ecommerce") — ดู NEXT-STEPS.md
//
// ⚠️ _template.ts ห้าม import เข้ามาตรงนี้ — มันเป็นแค่แม่แบบไว้ copy ไม่ใช่
// โปรเจกต์จริง
// ============================================================================

import { freshcartEcommerce } from "./freshcart-ecommerce";
import { newProject2 } from "./new-project-2";

import type { EcommerceCaseStudy } from "./types";

export type { EcommerceCaseStudy } from "./types";

export const ecommerceCaseStudies: Record<string, EcommerceCaseStudy> = {
  "freshcart-ecommerce": freshcartEcommerce,
  "new-project-2": newProject2,
};
