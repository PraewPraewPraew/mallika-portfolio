import { useParams, Link } from "react-router";
import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/button";
import { Tag } from "../components/tag";
import { SectionHeader } from "../components/section-header";

import smartLivingImg1 from "figma:asset/e1906635db4210b11b5c64f679764c4f554832d9.png";
import smartLivingImg2 from "figma:asset/b2ce241e598d5d66cba01e0785f6689d603fe7b4.png";
import smartLivingImg3 from "figma:asset/d10d9c8d90c6b13f3fc0c8e4208981d119e60a08.png";
import smartLivingImg4 from "figma:asset/1c1bf097f83af8f54eaec5dcdde8bd47142b8b86.png";

const caseStudies: Record<string, any> = {
  "smart-living": {
    title: "Smart Living - Admin Portal",
    subtitle: "Solar Roof Device Management & Monitoring Platform",
    category: "Web Application",
    tags: ["SaaS", "Dashboard", "Data Visual"],
    year: "2024",
    client: "Smart Living (SCG)",
    role: "UX/UI Designer",
    duration: "1 Year",
    hero: smartLivingImg1,
    screenshots: [
      { src: smartLivingImg1, caption: "Solar Roof device list with color-coded status indicators and mini dashboard for at-a-glance monitoring" },
      { src: smartLivingImg2, caption: "Daily performance monitoring with graphs, issue breakdowns, and full report generation" },
      { src: smartLivingImg3, caption: "Solar Roof statistics overview with energy production data and system health metrics" },
      { src: smartLivingImg4, caption: "Admin group management with hierarchical permission controls and role-based access settings" },
    ],
    overview:
      "Admin Portal website for managing and monitoring the device installed with the Solar Roof service of the Smart Living project. The platform serves admin and technician teams to efficiently monitor device status, track performance data, and provide consultation support for residents using the service.",
    problem: {
      title: "Project Goal & Challenge",
      description:
        "The client needed an Admin Portal for admin and technician teams to efficiently monitor and maintain Solar Roof devices, while also enabling effective consultation and support for residents using the service.",
      challenges: [
        "The backend system involved complex technical logic requiring close collaboration with developers to balance usability and technical constraints",
        "Data-heavy content needed to be presented clearly without overwhelming users",
        "Standard components from the existing framework (MUI, React) were adopted to reduce the learning curve and speed up development",
        "Needed to bridge the communication gap between technical admin data and resident-facing information",
      ],
    },
    research: {
      title: "Responsibilities",
      description:
        "Handled end-to-end design from requirements gathering with the BA team, user behavior analysis, to designing a simple UX journey and a clear UI that minimizes confusion from data-heavy content.",
      insights: [
        "Collaborated with BA team to gather and clarify requirements",
        "Analyzed user behavior patterns for admin and technician workflows",
        "Designed simplified UX journeys for complex monitoring tasks",
        "Created clear UI patterns that minimize cognitive load from data-heavy screens",
      ],
    },
    solution: {
      title: "Solution Design",
      description:
        "Designed a comprehensive admin portal with prioritized status visualization, data-driven performance monitoring, consistent visual language, and flexible permission management.",
      features: [
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
    impact: {
      title: "Results & Impact",
      metrics: [
        { value: "1,500+", label: "Solar Roof devices managed" },
        { value: "60%", label: "Faster issue resolution" },
        { value: "4", label: "Severity levels tracked" },
        { value: "150+", label: "Admin users onboarded" },
      ],
    },
    nextProject: "nova-banking",
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
      "https://images.unsplash.com/photo-1663000803107-132fb64cc148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwbW9iaWxlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MjE4NjUzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwZGFzaGJvYXJkJTIwZGVzaWdufGVufDF8fHx8MTc3MjE4NjUzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1706037151159-75266368d630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYXBwJTIwb25ib2FyZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzIxODY1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
};

export function CaseStudy() {
  const { id } = useParams();
  const study = id ? caseStudies[id] : null;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Helper to normalize screenshots (string or {src, caption})
  const getScreenshotSrc = (s: any): string => (typeof s === "string" ? s : s.src);
  const getScreenshotCaption = (s: any): string | undefined =>
    typeof s === "string" ? undefined : s.caption;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = useCallback(() => {
    if (lightboxIndex === null || !study) return;
    setLightboxIndex(
      (lightboxIndex - 1 + study.screenshots.length) % study.screenshots.length
    );
  }, [lightboxIndex, study]);

  const goToNext = useCallback(() => {
    if (lightboxIndex === null || !study) return;
    setLightboxIndex((lightboxIndex + 1) % study.screenshots.length);
  }, [lightboxIndex, study]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, goToPrev, goToNext]);

  if (!study) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Case Study Not Found
          </h1>
          <Button variant="ghost" asChild>
            <Link to="/work">
              <ArrowLeft size={20} />
              Back to Work
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Back button */}
      <section className="py-6 md:py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="text" asChild>
            <Link to="/work">
              <ArrowLeft size={20} />
              Back to All Work
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={study.hero}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs md:text-sm uppercase tracking-widest font-mono mb-4 opacity-80">
              {study.category}
            </p>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {study.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl opacity-90">
              {study.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <p className="text-xs md:text-sm text-muted uppercase tracking-wider font-mono mb-2">
                Client
              </p>
              <p className="text-base md:text-lg">{study.client}</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted uppercase tracking-wider font-mono mb-2">
                Role
              </p>
              <p className="text-base md:text-lg">{study.role}</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted uppercase tracking-wider font-mono mb-2">
                Duration
              </p>
              <p className="text-base md:text-lg">{study.duration}</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted uppercase tracking-wider font-mono mb-2">
                Year
              </p>
              <p className="text-base md:text-lg">{study.year}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-6 md:mt-8">
            {study.tags.map((tag: string) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Overview"
            title="Project Background"
            className="mb-6 md:mb-8"
          />
          <p className="text-base md:text-lg lg:text-xl text-muted leading-relaxed">
            {study.overview}
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={study.problem.title}
            className="mb-6 md:mb-8"
          />
          <p className="text-base md:text-lg text-muted leading-relaxed mb-6 md:mb-8">
            {study.problem.description}
          </p>
          <h4 className="text-lg md:text-xl mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            Key Challenges
          </h4>
          <ul className="space-y-3 md:space-y-4">
            {study.problem.challenges.map((challenge: string, index: number) => (
              <li key={index} className="flex gap-3 md:gap-4">
                <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-accent rounded-full flex items-center justify-center text-foreground text-xs md:text-sm font-mono">
                  {index + 1}
                </span>
                <span className="text-sm md:text-base text-muted pt-1">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Research */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={study.research.title}
            className="mb-6 md:mb-8"
          />
          <p className="text-base md:text-lg text-muted leading-relaxed mb-6 md:mb-8">
            {study.research.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {study.research.insights.map((insight: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-4 md:p-6"
              >
                <p className="text-sm md:text-base">{insight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={study.solution.title}
            className="mb-6 md:mb-8"
          />
          <p className="text-base md:text-lg text-muted leading-relaxed mb-8 md:mb-12">
            {study.solution.description}
          </p>
          <div className="space-y-8 md:space-y-12">
            {study.solution.features.map((feature: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4
                  className="text-xl md:text-2xl mb-3 md:mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base text-muted">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {study.screenshots && study.screenshots.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Visual Design"
              title="Screenshots"
              className="mb-8 md:mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {study.screenshots.map((screenshot: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-card">
                    <ImageWithFallback
                      src={getScreenshotSrc(screenshot)}
                      alt={getScreenshotCaption(screenshot) || `${study.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-foreground/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-background"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {getScreenshotCaption(screenshot) && (
                    <p className="text-xs md:text-sm text-muted mt-3 px-1">
                      {getScreenshotCaption(screenshot)}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && study.screenshots && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-background/20 hover:bg-background/40 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-background" />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50">
              <p className="text-xs md:text-sm text-background/80 font-mono">
                {lightboxIndex + 1} / {study.screenshots.length}
              </p>
            </div>

            {/* Previous button */}
            {study.screenshots.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-2 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-background/20 hover:bg-background/40 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-background" />
              </button>
            )}

            {/* Next button */}
            {study.screenshots.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-2 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-background/20 hover:bg-background/40 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-background" />
              </button>
            )}

            {/* Image + Caption */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={getScreenshotSrc(study.screenshots[lightboxIndex])}
                alt={
                  getScreenshotCaption(study.screenshots[lightboxIndex]) ||
                  `${study.title} screenshot ${lightboxIndex + 1}`
                }
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
              {getScreenshotCaption(study.screenshots[lightboxIndex]) && (
                <p className="text-sm md:text-base text-background/80 text-center mt-4 max-w-2xl px-4">
                  {getScreenshotCaption(study.screenshots[lightboxIndex])}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Impact */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={study.impact.title}
            className="mb-8 md:mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {study.impact.metrics.map((metric: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p
                  className="text-3xl md:text-4xl lg:text-5xl mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {metric.value}
                </p>
                <p className="text-xs md:text-sm text-muted">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-12 md:py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-widest font-mono mb-2 opacity-80">
                Next Project
              </p>
              <h3
                className="text-2xl md:text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {caseStudies[study.nextProject]?.title}
              </h3>
            </div>
            <Button
              variant="primary"
              size="lg"
              asChild
              className="bg-accent text-foreground hover:bg-accent/90"
            >
              <Link to={`/case-study/${study.nextProject}`}>
                View Project
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}