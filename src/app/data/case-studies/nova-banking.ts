// ข้อมูล case study ของ Nova Banking (ยังเป็น placeholder เนื้อหา / published: false)

import type { DataDrivenCaseStudy } from "./types";

export const novaBanking: DataDrivenCaseStudy = {
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
};
