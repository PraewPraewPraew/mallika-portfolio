// ข้อมูล case study ของ FreshCart E-Commerce
//
// ⚠️ เนื้อหาตอนนี้เป็น mock ของ FreshCart (ยังไม่ใช่ข้อมูลจริงของ Doozy online by
// SCGP) — ห้ามแก้ข้อความ/รูป/id ใดๆ จนกว่าจะทำรอบใส่เนื้อหาจริงแยกต่างหาก เพราะ
// ใช้หน้านี้เทียบว่าการแปลงเป็น template ทำให้หน้าตาเพี้ยนไปหรือไม่
//
// ⚠️ รูปภาพทั้งหมดตอนนี้เป็น URL จาก Unsplash (ไม่มีการ import ไฟล์ local เลย)
// ถ้าจะเปลี่ยนเป็นรูป local ในอนาคต ต้องให้ Claude Code เป็นคนเพิ่ม import ให้

import type { EcommerceCaseStudy } from "./types";

export const freshcartEcommerce: EcommerceCaseStudy = {
  hero: {
    label: "Case Study", // label เล็กเหนือหัวข้อใหญ่
    headline: // หัวข้อใหญ่ (H1) ของหน้า
      "Designing Without a Safety Net — UX for E-Commerce Under Real-World Constraints",
    intro: [ // ย่อหน้าเปิดเรื่อง (แสดงต่อกันตามลำดับ)
      "This project involved designing the UX for an E-Commerce platform where business requirements drove every decision — no user interviews, no usability testing, and tight technical limitations from the backend team.",
      "The challenge wasn't just designing good flows. It was knowing when to push back, when to adapt, and how to advocate for the end user when their voice wasn't in the room.",
    ],
    tags: ["E-Commerce", "Web", "UX Strategy", "Responsive"], // แถบ Tag ใต้ย่อหน้าเปิดเรื่อง
    image: {
      src: "https://images.unsplash.com/photo-1760376208569-e1b82e1ae494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjB1eCUyMGRlc2lnbiUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NzMwNDc5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wireframe and user flow overview",
    },
  },
  // Section "01 — The Challenge" — ลบทั้ง field นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
  // (เลข "01" หน้าหัวข้อคำนวณอัตโนมัติจากตำแหน่งจริงที่แสดง ไม่ได้ผูกกับเลขที่ตั้งชื่อ field)
  challenge: {
    label: "The Challenge", // ต่อท้ายเลขลำดับ กลายเป็น "01 — The Challenge"
    title: "Business Needs First. But Users Still Matter.",
    paragraphs: [
      "Requirements came entirely from the client's business goals — increase conversion, streamline the purchase flow, and support backend logic that couldn't be changed. There was no direct access to end users, no existing data, and no room for extensive iteration.",
      "My role was to bridge that gap: working alongside the BA to interpret business requirements, advising the client on UX implications they hadn't considered, and collaborating with backend developers to understand what was technically possible before committing to any design direction.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1666148670142-2f01b117e6e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGRpYWdyYW0lMjBidXNpbmVzcyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzczMDQ3OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Workflow diagram showing Client to BA to UX to Developer",
      caption: "Collaboration Model: Client → BA → UX (Me) → Dev", // ข้อความเล็กใต้รูป
    },
  },
  // Section "02 — My Approach" — ลบทั้ง field นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
  approach: {
    label: "My Approach",
    title: "No User Research? Design From First Principles.",
    paragraphs: [
      "Without user interviews, I relied on UX heuristics, e-commerce best practices, and logical inference from business requirements to shape design decisions. Every assumption was made explicit — and every flow was designed to reduce friction based on what we know about how people shop online.",
      "For example, when the client required users to log in via LINE and complete personal details (name, surname, email) before placing an order, I flagged the risk of drop-offs at this critical step. I worked with the client to identify which fields were truly necessary upfront, then proposed pre-filling data from the LINE profile — so users only needed to verify, not re-enter —  their information, reducing cognitive load and returning them to the checkout flow as quickly as possible.",
    ],
    backgroundImage: { // รูปจางๆ ด้านหลังตาราง (opacity ต่ำ กำหนดใน template ไม่ใช่ data)
      src: "https://images.unsplash.com/photo-1605606582211-088f336964ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0YWJsZSUyMHJlcXVpcmVtZW50cyUyMGRvY3VtZW50YXRpb258ZW58MXx8fHwxNzczMDQ3OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Design requirements documentation",
    },
    decisionTable: {
      columns: ["Business Requirement", "UX Assumption", "Design Decision"], // หัวตาราง 3 คอลัมน์
      rows: [ // แต่ละแถวของตาราง (เพิ่ม/ลบแถวได้ตามต้องการ)
        {
          business: "Increase conversion rate on product pages",
          ux: "Users need confidence in their purchase decision; visual clarity and product details reduce hesitation",
          design: "Implement high-resolution zoom, multiple product angles, and inline size guides with clear CTA placement",
        },
        {
          business: "Reduce cart abandonment during checkout",
          ux: "Too many steps create friction; users prefer seeing all costs upfront",
          design: "Single-page checkout with persistent order summary, inline validation, and transparent pricing",
        },
        {
          business: "Support backend filtering constraints (API returns max 50 results)",
          ux: "Users expect instant feedback when filtering; slow loading breaks trust",
          design: "Client-side preview of filter counts before applying; progressive disclosure with 'Show More' pattern",
        },
      ],
    },
  },
  // Section "03 — Solution" — ลบทั้ง field นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
  solution: {
    label: "Solution",
    title: "From Requirements to Real Flows — Key Features That Shaped the Experience",
    paragraphs: [
      "Three features defined the core UX challenge of this project: the product discovery flow, the checkout process, and the order management experience. Each required balancing what the business wanted to show with what a user would actually need to do.",
      "Below is a walkthrough of how each feature was approached — from the initial requirement, through the design decisions made, to the final wireframe output. Annotations highlight not just what was designed, but why.",
    ],
    // การ์ด feature เรียงต่อกัน (เพิ่ม/ลบได้ตามต้องการ) — เลข "01/02/03" หน้าแต่ละใบ
    // คำนวณอัตโนมัติจากตำแหน่งในลิสต์นี้ ไม่ต้องระบุเอง
    features: [
      {
        title: "Product Discovery Flow",
        description: "Users need to find products quickly using filters that match their mental model. Backend constraints limited results to 50 items per query.",
        image: {
          src: "https://images.unsplash.com/photo-1647032713701-a80d2b69e502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZmxvdyUyMGRpYWdyYW0lMjBhbm5vdGF0ZWR8ZW58MXx8fHwxNzczMDQ3OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Annotated user flow for product discovery",
        },
      },
      {
        title: "Streamlined Checkout Process",
        description: "Client wanted a 4-step checkout. I proposed a single-page flow that reduced friction while maintaining all required data collection points.",
        image: {
          src: "https://images.unsplash.com/photo-1760376208569-e1b82e1ae494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjB1eCUyMGRlc2lnbiUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NzMwNDc5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Annotated wireframe for checkout flow",
        },
      },
      {
        title: "Order Management Experience",
        description: "Post-purchase tracking needed to be simple and reassuring. Designed a progressive disclosure pattern that shows just enough detail without overwhelming.",
        // ไม่มี image — ใช้ placeholderLabel แทน (โชว์เป็นกล่องสีเทาพร้อมข้อความ)
        placeholderLabel: "Order tracking wireframe + annotations",
      },
    ],
  },
  // Section "04 — Collaboration Highlight" — ลบทั้ง field นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
  collaboration: {
    label: "Collaboration Highlight",
    title: "The Design Isn't Just What You See — It's What You Convinced Others to Change.",
    paragraphs: [
      "One of the most impactful moments in this project was advising the client to restructure a flow they had already approved. The original design followed their internal process logic — but created an unnecessary detour for the end user. After mapping out the impact with a revised flow diagram, the client aligned with the updated approach.",
      "Working closely with backend developers also shaped several decisions. Rather than designing an ideal flow and handing it over, constraints were surfaced early — allowing the design to account for technical limitations without compromising the core user experience.",
    ],
    beforeAfter: {
      title: "Before & After: Product Listing Flow",
      description: "Showing how user feedback influenced the final design direction",
      image: {
        src: "https://images.unsplash.com/photo-1703756883093-301a1cb45603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBjb21wYXJpc29uJTIwYmVmb3JlJTIwYWZ0ZXJ8ZW58MXx8fHwxNzczMDQ3OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Before and after comparison of design flows",
      },
    },
  },
  // Section "05 — Reflection" — ลบทั้ง field นี้ทิ้งได้ถ้าไม่ต้องการ section นี้
  reflection: {
    label: "Reflection",
    title: "Constraints Don't Block Good UX. They Define It.",
    paragraphs: [
      "This project reinforced that UX design rarely happens in ideal conditions — and that's not a problem to solve, it's a reality to design within. The ability to advocate for the user using business language, and to find the best possible experience within technical boundaries, is where UX impact actually lives.",
      "If I were to revisit this project, I would push for at least lightweight user validation — even a 5-person usability test — to pressure-test assumptions made from business requirements alone. Good design under constraints is still good design. But validated design is better.",
    ],
    quote: {
      backgroundImage: {
        src: "https://images.unsplash.com/photo-1605290994680-779e10fff203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdHlwb2dyYXBoeSUyMHF1b3RlJTIwZGVzaWdufGVufDF8fHx8MTc3MzA0Nzk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Minimal typography background",
      },
      text: "\"Constraints don't block good UX. They define it.\"", // ข้อความ quote ตัวใหญ่
      attribution: "— Key takeaway", // บรรทัดเล็กใต้ quote
    },
  },
  nextProjectId: "smart-living", // ปุ่ม "Next Project" ท้ายหน้าลิงก์ไปที่นี่
};
