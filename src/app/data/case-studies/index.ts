// ============================================================================
// รวมข้อมูล case study ทุกโปรเจกต์แบบ "data-driven" (layoutType: "data-driven")
// ให้ template (case-study.tsx) import ไปใช้ — 1 ไฟล์ = 1 โปรเจกต์ อยู่ในโฟลเดอร์
// นี้ ไฟล์นี้แค่รวมร่างเข้าด้วยกัน ไม่มีเนื้อหาโปรเจกต์อยู่ตรงนี้เอง
//
// วิธีเพิ่มโปรเจกต์ใหม่ (ทำเองได้ ไม่ต้องพึ่ง Claude Code สำหรับ 3 ขั้นตอนนี้):
//   1. Copy ไฟล์ _template.ts ในโฟลเดอร์นี้ไปตั้งชื่อใหม่ (เช่น my-project.ts)
//      แล้วกรอกเนื้อหาตาม comment ในไฟล์นั้น
//   2. เพิ่มบรรทัด import ด้านล่างนี้ (ก๊อปแบบเดียวกับบรรทัดอื่นแล้วแก้ชื่อ):
//        import { myProject } from "./my-project";
//   3. เพิ่มเข้า object `caseStudies` ด้านล่าง โดย key (ในเครื่องหมายคำพูด) ต้อง
//      ตรงกับ id ที่ตั้งไว้ใน src/app/data/projects.ts เป๊ะ:
//        "my-project-id": myProject,
//   4. อย่าลืมเพิ่ม entry คู่กันใน src/app/data/projects.ts ด้วย (ดู NEXT-STEPS.md)
//
// ⚠️ _template.ts ห้าม import เข้ามาตรงนี้ — มันเป็นแค่แม่แบบไว้ copy ไม่ใช่
// โปรเจกต์จริง
// ============================================================================

import { smartLiving } from "./smart-living";
import { novaBanking } from "./nova-banking";
import { luminaDesign } from "./lumina-design";
import { flowFitness } from "./flow-fitness";
import { newProject1 } from "./new-project-1";

import type { DataDrivenCaseStudy } from "./types";

export type { DataDrivenCaseStudy } from "./types";

export const caseStudies: Record<string, DataDrivenCaseStudy> = {
  "smart-living": smartLiving,
  "nova-banking": novaBanking,
  "lumina-design": luminaDesign,
  "flow-fitness": flowFitness,
  "new-project-1": newProject1,
};
