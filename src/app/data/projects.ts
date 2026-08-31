import smartLivingCover from "figma:asset/smart-living-cover.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  /** Set to false to hide this project from Work and Home while keeping its data/routes intact. */
  published: boolean;
  /** Whether this project shows in the Home page's Featured Projects section. */
  featured: boolean;
  /** Which case study page renders this project. See CLAUDE.md "Adding a new case study" for what each value needs. */
  layoutType: "data-driven" | "ecommerce" | "lego";
}

export const projects: Project[] = [
  {
    id: "smart-living",
    title: "Smart Living - Admin Portal",
    description: "Admin Portal for managing and monitoring Solar Roof devices with real-time status tracking and data visualization.",
    category: "Web",
    tags: ["SaaS", "Dashboard", "Data Visual"],
    image: smartLivingCover,
    published: true,
    featured: true,
    layoutType: "data-driven",
  },
  {
    id: "freshcart-ecommerce",
    title: "FreshCart E-Commerce",
    description: "Rethinking the online grocery experience with streamlined checkout, smart search, and data-driven design decisions.",
    category: "Web",
    tags: ["E-Commerce", "Web", "UX Strategy"],
    image: "https://images.unsplash.com/photo-1764194790147-8a1e47a91a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZSUyMGNsZWFufGVufDF8fHx8MTc3MzA0NjgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    published: true,
    featured: true,
    layoutType: "ecommerce",
  },
  {
    id: "lego-design-system",
    title: "Building Blocks Design System",
    description: "Building a token-first design system from scratch where brand identity was evolving and deadlines weren't waiting.",
    category: "Design System",
    tags: ["Tokens", "Components", "Documentation"],
    image: "https://images.unsplash.com/photo-1724745523036-bfceadebcd50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdvJTIwYmxvY2tzJTIwY29sb3JmdWwlMjBkZXNpZ24lMjBzeXN0ZW18ZW58MXx8fHwxNzczMjIzMjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    published: true,
    featured: true,
    layoutType: "lego",
  },
  {
    id: "nova-banking",
    title: "Nova Banking",
    description: "Reimagining digital banking for Gen Z with a focus on financial literacy and gamification.",
    category: "App",
    tags: ["Mobile", "Fintech", "UX Research"],
    image: "https://images.unsplash.com/photo-1660732106134-f3009a1e90ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3MjA2MTA0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    published: false,
    featured: false,
    layoutType: "data-driven",
  },
  {
    id: "lumina-design",
    title: "Lumina Design System",
    description: "Building a comprehensive design system to maintain consistency across a growing SaaS product suite.",
    category: "Design System",
    tags: ["Components", "Documentation", "Tokens"],
    image: "https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc3MTk4NDA3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    published: false,
    featured: false,
    layoutType: "data-driven",
  },
  {
    id: "flow-fitness",
    title: "Flow Fitness",
    description: "Designing an AI-powered fitness app that adapts workouts in real-time to user progress.",
    category: "App",
    tags: ["Mobile", "Health", "AI/ML"],
    image: "https://images.unsplash.com/photo-1769893841740-fc98ce39a3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjA2ODI3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    published: false,
    featured: false,
    layoutType: "data-driven",
  },
  {
    // 🆕 โครงเปล่า — โปรเจกต์จริงยังไม่มา แก้ id นี้เป็นชื่อจริงตอนพร้อมเผยแพร่
    // (ถ้าจะเปลี่ยน id ต้องให้ Claude Code ช่วย เพราะต้องแก้ทั้ง key ใน
    // src/app/data/case-studies/index.ts และชื่อไฟล์ new-project-1.ts ให้ตรงกัน
    // ไม่งั้นหน้าเว็บจะหาไม่เจอ)
    id: "new-project-1",
    title: "", // ชื่อโปรเจกต์ที่โชว์บนการ์ด (หน้า Work/Home) และหัวข้อในหน้า case study
    description: "", // คำโปรยสั้นๆ ใต้ชื่อบนการ์ด (1-2 ประโยค)
    category: "", // ต้องเป็นหนึ่งใน: "App", "Web", "Design System" (ต้องตรงกับปุ่ม filter ในหน้า Work เป๊ะ ตัวพิมพ์เล็ก-ใหญ่ต้องตรง)
    tags: [], // คำสั้นๆ ใต้ชื่อโปรเจกต์บนการ์ด เช่น ["Mobile", "Fintech"] ใส่กี่คำก็ได้
    image: "", // รูปปกการ์ด (หน้า Work/Home) — วาง URL รูปตรงๆ ได้เลย (เช่นจาก unsplash.com) ถ้าจะใช้รูปที่อัปโหลดเองต้องให้ Claude Code ช่วย import
    published: false, // เปลี่ยนเป็น true เมื่อพร้อมให้คนอื่นเห็นในหน้า Work/Home
    featured: false, // เปลี่ยนเป็น true ถ้าอยากให้ขึ้นหน้าแรกด้วย (มีผลก็ต่อเมื่อ published เป็น true แล้ว)
    layoutType: "data-driven", // ห้ามแก้ค่านี้ — ผูกกับว่าเนื้อหาอยู่ในโฟลเดอร์ src/app/data/case-studies/ (ไม่ใช่ case-studies-ecommerce/)
  },
  {
    // 🆕 โครงเปล่า — โปรเจกต์จริงยังไม่มา แก้ id นี้เป็นชื่อจริงตอนพร้อมเผยแพร่
    // (ถ้าจะเปลี่ยน id ต้องให้ Claude Code ช่วย เพราะต้องแก้ทั้ง key ใน
    // src/app/data/case-studies-ecommerce/index.ts และชื่อไฟล์ new-project-2.ts
    // ให้ตรงกัน ไม่งั้นหน้าเว็บจะหาไม่เจอ)
    id: "new-project-2",
    title: "", // ชื่อโปรเจกต์ที่โชว์บนการ์ด (หน้า Work/Home) และหัวข้อในหน้า case study
    description: "", // คำโปรยสั้นๆ ใต้ชื่อบนการ์ด (1-2 ประโยค)
    category: "", // ต้องเป็นหนึ่งใน: "App", "Web", "Design System" (ต้องตรงกับปุ่ม filter ในหน้า Work เป๊ะ ตัวพิมพ์เล็ก-ใหญ่ต้องตรง)
    tags: [], // คำสั้นๆ ใต้ชื่อโปรเจกต์บนการ์ด เช่น ["E-Commerce", "Web"] ใส่กี่คำก็ได้
    image: "", // รูปปกการ์ด (หน้า Work/Home) — วาง URL รูปตรงๆ ได้เลย (เช่นจาก unsplash.com) ถ้าจะใช้รูปที่อัปโหลดเองต้องให้ Claude Code ช่วย import
    published: false, // เปลี่ยนเป็น true เมื่อพร้อมให้คนอื่นเห็นในหน้า Work/Home
    featured: false, // เปลี่ยนเป็น true ถ้าอยากให้ขึ้นหน้าแรกด้วย (มีผลก็ต่อเมื่อ published เป็น true แล้ว)
    layoutType: "ecommerce", // ห้ามแก้ค่านี้ — ผูกกับว่าเนื้อหาอยู่ในโฟลเดอร์ src/app/data/case-studies-ecommerce/ (ไม่ใช่ case-studies/)
  },
];
