// ข้อมูล case study ของ Smart Living — แก้ข้อความ/ตัวเลข/URL ในไฟล์นี้ได้เอง
// อย่างปลอดภัย
//
// ⚠️ ส่วน import รูปภาพด้านล่าง (บรรทัดที่ import จาก "figma:asset/...") ต้องให้
// Claude Code เป็นคนแก้/เพิ่ม เพราะเกี่ยวข้องกับการวางไฟล์รูปจริงใน src/assets
// และตั้งชื่อไฟล์ให้ระบบ resolve ถูกต้อง

import type { DataDrivenCaseStudy } from "./types";

import smartLivingImg1 from "figma:asset/smart-living-1.png"; // ⚠️ ต้องให้ Claude Code แก้ถ้าเปลี่ยนรูป
import smartLivingImg2 from "figma:asset/smart-living-2.png"; // ⚠️ ต้องให้ Claude Code แก้ถ้าเปลี่ยนรูป
import smartLivingImg3 from "figma:asset/smart-living-3.png"; // ⚠️ ต้องให้ Claude Code แก้ถ้าเปลี่ยนรูป
import smartLivingImg4 from "figma:asset/smart-living-4.png"; // ⚠️ ต้องให้ Claude Code แก้ถ้าเปลี่ยนรูป
import smartLivingCaseHero from "figma:asset/smart-living-case-hero.png"; // ⚠️ ต้องให้ Claude Code แก้ถ้าเปลี่ยนรูป

export const smartLiving: DataDrivenCaseStudy = {
  title: "Smart Living - Admin Portal", // หัวข้อใหญ่ใน Hero + ชื่อ preview ตอนเป็น "Next Project" ของโปรเจกต์ก่อนหน้า
  subtitle: "Solar Roof Device Management & Monitoring Platform", // บรรทัดรองใต้ title ใน Hero
  category: "Web Application", // label ตัวพิมพ์เล็กเหนือ title ใน Hero
  tags: ["SaaS", "Dashboard", "Data Visual"], // แถบ Tag ใน section "Project Info"
  year: "2024", // ช่อง "Year" ใน grid Project Info
  client: "Smart Living (SCG)", // ช่อง "Client" ใน grid Project Info
  role: "UX/UI Designer", // ช่อง "Role" ใน grid Project Info
  duration: "1 Year", // ช่อง "Duration" ใน grid Project Info
  hero: smartLivingCaseHero, // รูปพื้นหลังเต็มจอของ Hero
  // Gallery รูป + caption ใน section "Screenshots" — ลบทั้ง field นี้ทิ้งได้ถ้าไม่มีรูป (section จะหายไปเอง)
  screenshots: [
    { src: smartLivingImg1, caption: "Solar Roof device list with color-coded status indicators and mini dashboard for at-a-glance monitoring" },
    { src: smartLivingImg2, caption: "Daily performance monitoring with graphs, issue breakdowns, and full report generation" },
    { src: smartLivingImg3, caption: "Solar Roof statistics overview with energy production data and system health metrics" },
    { src: smartLivingImg4, caption: "Admin group management with hierarchical permission controls and role-based access settings" },
  ],
  overview: // ย่อหน้าเดียวใน section "Overview" (section นี้แสดงเสมอ ไม่ใช่ optional)
    "Admin Portal website for managing and monitoring the device installed with the Solar Roof service of the Smart Living project. The platform serves admin and technician teams to efficiently monitor device status, track performance data, and provide consultation support for residents using the service.",
  // section "Problem" — ลบทั้ง field นี้ทิ้งได้ถ้าไม่ต้องการ section นี้ (จะถูกซ่อนอัตโนมัติ)
  problem: {
    title: "Project Goal & Challenge", // หัวข้อ section
    description: // ย่อหน้านำของ section
      "The client needed an Admin Portal for admin and technician teams to efficiently monitor and maintain Solar Roof devices, while also enabling effective consultation and support for residents using the service.",
    challenges: [ // list มีเลข badge สี accent อัตโนมัติ (1,2,3...)
      "The backend system involved complex technical logic requiring close collaboration with developers to balance usability and technical constraints",
      "Data-heavy content needed to be presented clearly without overwhelming users",
      "Standard components from the existing framework (MUI, React) were adopted to reduce the learning curve and speed up development",
      "Needed to bridge the communication gap between technical admin data and resident-facing information",
    ],
  },
  // section "Research" — ลบทั้ง field นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
  research: {
    title: "Responsibilities",
    description:
      "Handled end-to-end design from requirements gathering with the BA team, user behavior analysis, to designing a simple UX journey and a clear UI that minimizes confusion from data-heavy content.",
    insights: [ // การ์ด 2 คอลัมน์ (fade-in ตอน scroll)
      "Collaborated with BA team to gather and clarify requirements",
      "Analyzed user behavior patterns for admin and technician workflows",
      "Designed simplified UX journeys for complex monitoring tasks",
      "Created clear UI patterns that minimize cognitive load from data-heavy screens",
    ],
  },
  // section "Solution" — ลบทั้ง field นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
  solution: {
    title: "Solution Design",
    description:
      "Designed a comprehensive admin portal with prioritized status visualization, data-driven performance monitoring, consistent visual language, and flexible permission management.",
    features: [ // รายการ feature เรียงต่อกัน แต่ละอันมีหัวข้อย่อยของตัวเอง
      {
        title: "Status Prioritization with Color Coding",
        description: "Device statuses are categorized by severity and visualized through color coding, supported by a Mini Dashboard and Search & Filter functionality for fast, at-a-glance monitoring.",
      },
      {
        title: "Data Visualization for Performance Monitoring",
        description: "Daily Performance data is presented through graphs and issue breakdowns, with a Full Report feature to support both routine tracking and in-depth analysis.",
      },
      {
        title: "Consistent Visual Language with Resident App",
        description: "Non-technical language and a unified color system aligned with the resident-facing app reduce communication gaps between admins and residents.",
      },
      {
        title: "Flexible Permission Management",
        description: "A hierarchical permission system controlled by a Super Admin enables granular access control, improving security, reducing misuse risk, and scaling with team growth.",
      },
    ],
  },
  // section "Impact" — ลบทั้ง field นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
  impact: {
    title: "Results & Impact",
    metrics: [ // grid 4 ช่อง ตัวเลขใหญ่ + label เล็ก
      { value: "1,500+", label: "Solar Roof devices managed" },
      { value: "60%", label: "Faster issue resolution" },
      { value: "4", label: "Severity levels tracked" },
      { value: "150+", label: "Admin users onboarded" },
    ],
  },
  nextProject: "nova-banking", // id ของโปรเจกต์ถัดไป ต้องตรงกับ key อื่นใน object นี้ — ใช้ทำปุ่ม "Next Project" ท้ายหน้า
};
