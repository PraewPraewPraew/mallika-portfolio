// Type สำหรับ case study แบบ "data-driven" (layoutType: "data-driven" ใน
// data/projects.ts) — ไฟล์นี้เป็น type อย่างเดียว ไม่มีข้อมูลจริง
//
// field ที่ไม่มี "?" ต่อท้ายชื่อ = บังคับต้องกรอก ถ้าลืมกรอกหรือพิมพ์ชื่อ field
// ผิด VS Code จะขีดเส้นแดงเตือนทันทีที่ไฟล์ของโปรเจกต์นั้น
// field ที่มี "?" ต่อท้ายชื่อ = ไม่บังคับ ลบทั้ง field ทิ้งได้ (section ที่คุมจะ
// หายจากหน้าเว็บเองอัตโนมัติ — ดู resolveSections ใน src/lib/utils.ts)

export interface Screenshot {
  src: string;
  caption?: string;
}

export interface ProblemSection {
  title: string;
  description: string;
  challenges: string[];
}

export interface ResearchSection {
  title: string;
  description: string;
  insights: string[];
}

export interface SolutionFeature {
  title: string;
  description: string;
}

export interface SolutionSection {
  title: string;
  description: string;
  features: SolutionFeature[];
}

export interface ImpactMetric {
  value: string;
  label: string;
}

export interface ImpactSection {
  title: string;
  metrics: ImpactMetric[];
}

export interface DataDrivenCaseStudy {
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  duration: string;
  hero: string;
  /** OPTIONAL — string ธรรมดา หรือ {src, caption} ก็ได้ ผสมกันในลิสต์เดียวได้ */
  screenshots?: (string | Screenshot)[];
  overview: string;
  /** OPTIONAL */
  problem?: ProblemSection;
  /** OPTIONAL */
  research?: ResearchSection;
  /** OPTIONAL */
  solution?: SolutionSection;
  /** OPTIONAL */
  impact?: ImpactSection;
  /** OPTIONAL — id ของโปรเจกต์ถัดไป (key อื่นใน index.ts ของโฟลเดอร์นี้) */
  nextProject?: string;
}
