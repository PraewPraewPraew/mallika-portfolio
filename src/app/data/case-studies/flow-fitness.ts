// ข้อมูล case study ของ Flow Fitness (ยังเป็น placeholder เนื้อหา / published: false)

import type { DataDrivenCaseStudy } from "./types";

export const flowFitness: DataDrivenCaseStudy = {
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
};
