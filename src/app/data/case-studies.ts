// ============================================================================
// ข้อมูล Case Study สำหรับ layout แบบ "data-driven" (render ผ่าน case-study.tsx)
// ไฟล์นี้มีแต่ข้อความ/ข้อมูลล้วนๆ ไม่มี component หรือ logic ใดๆ
// แก้ไขข้อความ/ตัวเลข/URL ในไฟล์นี้ได้เองอย่างปลอดภัย
//
// ⚠️ ส่วน import รูปภาพด้านล่าง (บรรทัดที่ import จาก "figma:asset/...") ต้องให้
// Claude Code เป็นคนแก้/เพิ่ม เพราะเกี่ยวข้องกับการวางไฟล์รูปจริงใน src/assets
// และตั้งชื่อไฟล์ให้ระบบ resolve ถูกต้อง
// ============================================================================

import smartLivingImg1 from "figma:asset/smart-living-1.png"; // ⚠️ ต้องให้ Claude Code แก้ถ้าเปลี่ยนรูป
import smartLivingImg2 from "figma:asset/smart-living-2.png"; // ⚠️ ต้องให้ Claude Code แก้ถ้าเปลี่ยนรูป
import smartLivingImg3 from "figma:asset/smart-living-3.png"; // ⚠️ ต้องให้ Claude Code แก้ถ้าเปลี่ยนรูป
import smartLivingImg4 from "figma:asset/smart-living-4.png"; // ⚠️ ต้องให้ Claude Code แก้ถ้าเปลี่ยนรูป
import smartLivingCaseHero from "figma:asset/smart-living-case-hero.png"; // ⚠️ ต้องให้ Claude Code แก้ถ้าเปลี่ยนรูป

export const caseStudies: Record<string, any> = {
  "smart-living": {
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
  },
  "nova-banking": {
    title: "Nova Banking",
    subtitle: "Reimagining Digital Banking for Gen Z",
    category: "App Design",
    tags: ["Mobile", "Fintech", "UX Research"],
    year: "2025",
    client: "Nova Financial",
    role: "Lead UX/UI Designer",
    duration: "4 months",
    hero: "https://images.unsplash.com/photo-1660732106134-f3009a1e90ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3MjA2MTA0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    screenshots: [
      "https://images.unsplash.com/photo-1663000803107-132fb64cc148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwZGFzaGJvYXJkJTIwZGVzaWdufGVufDF8fHx8MTc3MjE4NjUzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYW5raW5nJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwxfHx8fDE3NzIxODY1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1706037151159-75266368d630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYXBwJTIwb25ib2FyZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzIxODY1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1652503698072-175651f77634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYW5raW5nJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwxfHx8fDE3NzIxODY1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1671459923834-47a0b8ed93f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwc2NyZWVufGVufDF8fHx8MTc3MjEyNzI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    overview:
      "Nova Banking approached me to redesign their mobile banking app targeting Gen Z users. The goal was to make financial management more engaging and educational while maintaining security and trust.",
    problem: {
      title: "The Problem",
      description:
        "Traditional banking apps are overwhelming for young users who are just starting their financial journey. Most apps lack educational features and fail to make financial literacy engaging.",
      challenges: [
        "Low engagement rates among 18-25 year olds",
        "Complex onboarding process causing 40% drop-off",
        "Lack of financial education resources",
        "Outdated visual design not resonating with target audience",
      ],
    },
    research: {
      title: "Research & Discovery",
      description:
        "I conducted extensive user research including interviews, surveys, and competitive analysis to understand the needs and pain points of Gen Z users.",
      insights: [
        "Users want bite-sized financial tips, not lengthy tutorials",
        "Gamification elements increase engagement by 65%",
        "Social proof and achievements motivate savings behavior",
        "Mobile-first design is non-negotiable for this demographic",
      ],
    },
    solution: {
      title: "The Solution",
      description:
        "I designed a modern, intuitive banking app with gamification elements, financial literacy features, and a clean interface that makes banking feel less intimidating.",
      features: [
        {
          title: "Simplified Onboarding",
          description: "Reduced the onboarding flow from 12 steps to 4, with clear progress indicators and educational tooltips.",
        },
        {
          title: "Financial Wellness Dashboard",
          description: "A visual dashboard showing spending patterns, savings goals, and personalized insights.",
        },
        {
          title: "Achievement System",
          description: "Users earn badges and rewards for healthy financial behaviors like consistent saving.",
        },
        {
          title: "Micro-learning",
          description: "Daily financial tips and bite-sized lessons integrated into the app experience.",
        },
      ],
    },
    impact: {
      title: "Results & Impact",
      metrics: [
        { value: "85%", label: "Increase in daily active users" },
        { value: "60%", label: "Reduction in onboarding drop-off" },
        { value: "4.8", label: "App Store rating (up from 3.2)" },
        { value: "50k+", label: "New users in first month" },
      ],
    },
    nextProject: "lumina-design",
  },
  "lumina-design": {
    title: "Lumina Design System",
    subtitle: "Building a Scalable Design Foundation",
    category: "Design System",
    tags: ["Components", "Documentation", "Tokens"],
    year: "2024",
    client: "Lumina Tech",
    role: "Design System Lead",
    duration: "6 months",
    hero: "https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc3MTk4NDA3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    screenshots: [
      "https://images.unsplash.com/photo-1520982399404-d4cc203fdc5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzJTIwbGlicrFyeXxlbnwxfHx8fDE3NzIxODY1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1616861771635-49063a4636ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGNvbXBvbmVudCUyMGRvY3VtZW50YXRpb24lMjBzY3JlZW58ZW58MXx8fHwxNzcyMTg2NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1642261366979-704a073bef4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b2tlbnMlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyMTg2NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1772048196515-e980d8204ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wb25lbnQlMjBsaWJyYXJ5JTIwcGF0dGVybnMlMjB1aXxlbnwxfHx8fDE3NzIxODY1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1590483200421-58b5a8a0be55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwY29tcG9uZW50c3xlbnwxfHx8fDE3NzIxODY1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    overview:
      "Lumina, a fast-growing SaaS company, needed a comprehensive design system to maintain consistency across their growing product suite and speed up development cycles.",
    problem: {
      title: "The Problem",
      description:
        "With rapid growth came design inconsistencies, slower development, and difficulty onboarding new designers and developers.",
      challenges: [
        "Inconsistent UI patterns across 8 different products",
        "Designers and developers working in silos",
        "No single source of truth for design decisions",
        "Slow feature development due to constant redesign",
      ],
    },
    research: {
      title: "Research & Discovery",
      description:
        "I conducted stakeholder interviews, audited existing products, and researched industry best practices for design systems.",
      insights: [
        "70% of UI components were duplicated with slight variations",
        "Developers spent 30% of time recreating existing components",
        "Teams needed better documentation and guidelines",
        "Accessibility was inconsistent across products",
      ],
    },
    solution: {
      title: "The Solution",
      description:
        "I built a comprehensive design system with reusable components, clear documentation, and a token-based architecture for easy maintenance.",
      features: [
        {
          title: "Component Library",
          description: "50+ reusable components built in Figma and React, covering all common use cases.",
        },
        {
          title: "Design Tokens",
          description: "Color, typography, spacing, and other design tokens defined in a single source of truth.",
        },
        {
          title: "Documentation Site",
          description: "Interactive documentation with code examples, usage guidelines, and accessibility standards.",
        },
        {
          title: "Contribution Guidelines",
          description: "Clear process for proposing new components and maintaining the system.",
        },
      ],
    },
    impact: {
      title: "Results & Impact",
      metrics: [
        { value: "40%", label: "Faster feature development" },
        { value: "90%", label: "Component reuse rate" },
        { value: "100%", label: "WCAG AA compliance" },
        { value: "15", label: "Teams actively using the system" },
      ],
    },
    nextProject: "flow-fitness",
  },
  "flow-fitness": {
    title: "Flow Fitness",
    subtitle: "AI-Powered Workout Tracking",
    category: "App Design",
    tags: ["Mobile", "Health", "AI/ML"],
    year: "2025",
    client: "Flow Health Inc",
    role: "Senior UX/UI Designer",
    duration: "5 months",
    hero: "https://images.unsplash.com/photo-1769893841740-fc98ce39a3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjA2ODI3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    screenshots: [
      "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwd29ya291dCUyMHRyYWNraW5nfGVufDF8fHx8MTc3MjE1NTc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1633230329619-70ae2e6d50bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVyY2lzZSUyMHRyYWNraW5nJTIwbW9iaWxlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjE4NjU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1570621936497-2b2ca5633cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZGFzaGJvYXJkJTIwc3RhdGlzdGljc3xlbnwxfHx8fDE3NzIxODY1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwYXBwJTIwcHJvZ3Jlc3MlMjBzY3JlZW58ZW58MXx8fHwxNzcyMTg2NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW9iaWxlJTIwYXBwJTIwdWl8ZW58MXx8fHx8MTc3MjE4NjU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    overview:
      "Flow Fitness wanted to create a next-generation workout app that uses AI to provide personalized coaching and adapt to users' fitness levels.",
    problem: {
      title: "The Problem",
      description:
        "Existing fitness apps offer generic workout plans that don't adapt to individual progress, leading to plateaus and user churn.",
      challenges: [
        "One-size-fits-all workout plans don't work for everyone",
        "Users struggle to track form and technique",
        "High churn rate after the first month",
        "Lack of personalized coaching for budget-conscious users",
      ],
    },
    research: {
      title: "Research & Discovery",
      description:
        "I conducted user interviews with fitness enthusiasts and beginners, analyzed competitor apps, and worked with fitness trainers to understand coaching methods.",
      insights: [
        "Users want real-time feedback on their form",
        "Personalization is the #1 factor in app retention",
        "Progress visualization motivates continued use",
        "Social features increase accountability",
      ],
    },
    solution: {
      title: "The Solution",
      description:
        "I designed an AI-powered fitness app that adapts workouts in real-time, provides form feedback, and creates personalized coaching experiences.",
      features: [
        {
          title: "AI Workout Adaptation",
          description: "Workouts automatically adjust based on performance, energy levels, and recovery.",
        },
        {
          title: "Form Analysis",
          description: "Using device camera and ML, the app provides real-time feedback on exercise form.",
        },
        {
          title: "Progress Tracking",
          description: "Visual dashboards showing strength gains, consistency, and personal records.",
        },
        {
          title: "Community Features",
          description: "Share workouts, join challenges, and connect with friends for motivation.",
        },
      ],
    },
    impact: {
      title: "Results & Impact",
      metrics: [
        { value: "75%", label: "User retention after 3 months" },
        { value: "95%", label: "User satisfaction rating" },
        { value: "200k+", label: "Active users" },
        { value: "4.9", label: "App Store rating" },
      ],
    },
    nextProject: "smart-living",
  },

  // ==========================================================================
  // 🆕 โครงเปล่า "new-project-1" — key ตรงนี้ต้องตรงกับ id ใน data/projects.ts
  // เป๊ะ ถ้าเปลี่ยน id ที่นั่น ต้องเปลี่ยน key ตรงนี้ให้ตรงกันด้วย (ไม่งั้นหน้า
  // เว็บจะหาโปรเจกต์นี้ไม่เจอ) — ถ้าจะเปลี่ยน id ให้ขอ Claude Code ช่วย
  //
  // กรอกข้อความ/URL แทนที่ "" หรือ [] ได้เลยด้วยตัวเอง — field ที่มี label
  // "OPTIONAL" กำกับไว้ ลบทั้งก้อน (ทั้ง key นั้นและ { ... } ที่ตามมา) ทิ้งได้
  // เลยถ้าไม่ต้องการ section นั้น มันจะหายไปจากหน้าเว็บเองอัตโนมัติ ไม่ต้อง
  // แก้ที่อื่นเพิ่ม
  // ==========================================================================
  "new-project-1": {
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
    nextProject: "", // id ของโปรเจกต์ถัดไปที่จะโชว์เป็นปุ่ม "Next Project" ท้ายหน้า — ต้องตรงกับ key อื่นในไฟล์นี้ เช่น "smart-living" (ถ้าเว้นว่างไว้หรือใส่ id ที่ published: false ปุ่มนี้จะไม่โชว์เองอัตโนมัติ)
  },
};
