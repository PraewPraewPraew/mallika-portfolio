// ข้อมูล case study ของ Lumina Design System (ยังเป็น placeholder เนื้อหา / published: false)

import type { DataDrivenCaseStudy } from "./types";

export const luminaDesign: DataDrivenCaseStudy = {
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
};
