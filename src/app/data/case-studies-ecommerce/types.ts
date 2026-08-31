// Type สำหรับ case study แบบ "ecommerce" (layoutType: "ecommerce" ใน
// data/projects.ts) — ไฟล์นี้เป็น type อย่างเดียว ไม่มีข้อมูลจริง
//
// field ที่ไม่มี "?" ต่อท้ายชื่อ = บังคับต้องกรอก ถ้าลืมกรอกหรือพิมพ์ชื่อ field
// ผิด VS Code จะขีดเส้นแดงเตือนทันทีที่ไฟล์ของโปรเจกต์นั้น
// field ที่มี "?" ต่อท้ายชื่อ = ไม่บังคับ ลบทั้ง field ทิ้งได้ (section ที่คุมจะ
// หายจากหน้าเว็บเองอัตโนมัติ พร้อมเลข "01-05" ขยับให้เอง — ดู resolveSections
// ใน src/lib/utils.ts)

export interface EcommerceImage {
  src: string;
  alt: string;
}

export interface ChallengeImage extends EcommerceImage {
  caption?: string;
}

export interface EcommerceHero {
  label: string;
  headline: string;
  intro: string[];
  tags: string[];
  image: EcommerceImage;
}

export interface ChallengeSection {
  label: string;
  title: string;
  paragraphs: string[];
  image: ChallengeImage;
}

export interface DecisionRow {
  business: string;
  ux: string;
  design: string;
}

export interface DecisionTable {
  columns: string[];
  rows: DecisionRow[];
}

export interface ApproachSection {
  label: string;
  title: string;
  paragraphs: string[];
  backgroundImage: EcommerceImage;
  decisionTable: DecisionTable;
}

export interface EcommerceFeature {
  title: string;
  description: string;
  /** ใส่ image หรือ placeholderLabel อย่างใดอย่างหนึ่ง (ไม่มีรูปก็ได้ ใช้กล่องข้อความแทน) */
  image?: EcommerceImage;
  placeholderLabel?: string;
}

export interface EcommerceSolutionSection {
  label: string;
  title: string;
  paragraphs: string[];
  features: EcommerceFeature[];
}

export interface BeforeAfter {
  title: string;
  description: string;
  image: EcommerceImage;
}

export interface CollaborationSection {
  label: string;
  title: string;
  paragraphs: string[];
  beforeAfter: BeforeAfter;
}

export interface Quote {
  backgroundImage: EcommerceImage;
  text: string;
  attribution: string;
}

export interface ReflectionSection {
  label: string;
  title: string;
  paragraphs: string[];
  quote: Quote;
}

export interface EcommerceCaseStudy {
  hero: EcommerceHero;
  /** OPTIONAL — Section "01" */
  challenge?: ChallengeSection;
  /** OPTIONAL — Section "02" */
  approach?: ApproachSection;
  /** OPTIONAL — Section "03" */
  solution?: EcommerceSolutionSection;
  /** OPTIONAL — Section "04" */
  collaboration?: CollaborationSection;
  /** OPTIONAL — Section "05" */
  reflection?: ReflectionSection;
  /** OPTIONAL — id ของโปรเจกต์ถัดไป */
  nextProjectId?: string;
}
