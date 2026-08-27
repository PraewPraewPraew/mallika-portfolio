import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SectionHeader } from "../components/section-header";
import { Tag } from "../components/tag";
import { Button } from "../components/button";
import { Link } from "react-router";
import {
  Figma,
  Sparkles,
  Palette,
  Code,
  Users,
  Zap,
  Brain,
  MessageCircle,
  Target,
  Lightbulb,
  Heart,
  Clock,
  ArrowRight,
  Briefcase,
  Award,
  TrendingUp,
  Layout,
  Search,
  Layers,
  Accessibility,
  Monitor,
  PenTool,
} from "lucide-react";

// --- DATA ---

const impactMetrics = [
  { value: "40%", label: "Increase in user retention", context: "Nova Banking App" },
  { value: "3x", label: "Faster design-to-dev handoff", context: "Design System" },
  { value: "50K+", label: "Daily active users served", context: "Lumina Platform" },
  { value: "95%", label: "Stakeholder satisfaction rate", context: "Across all projects" },
];

const experience = [
  {
    title: "Senior UX/UI Designer",
    company: "TechCorp Inc",
    period: "2022 - Present",
    description:
      "Leading design initiatives for enterprise SaaS products, managing a team of 3 designers, and establishing design system standards across the organization.",
    highlights: ["Team Leadership", "Design Systems", "Enterprise SaaS"],
  },
  {
    title: "UX/UI Designer",
    company: "StartupHub",
    period: "2020 - 2022",
    description:
      "Designed mobile and web applications for various startups, conducted user research, and collaborated with cross-functional teams to ship 15+ products.",
    highlights: ["Mobile Apps", "User Research", "Cross-functional"],
  },
  {
    title: "Junior Designer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description:
      "Created visual designs for client projects, assisted in user testing sessions, and contributed to design system development.",
    highlights: ["Visual Design", "User Testing", "Client Projects"],
  },
];

const hardSkillCategories = [
  {
    category: "Research & Strategy",
    icon: Search,
    skills: ["User Research", "Usability Testing", "A/B Testing", "Competitive Analysis", "Information Architecture", "User Personas & Journey Maps"],
  },
  {
    category: "Design & Craft",
    icon: PenTool,
    skills: ["UI Design", "Interaction Design", "Visual Design", "Responsive Design", "Motion Design", "Iconography"],
  },
  {
    category: "Systems & Scale",
    icon: Layers,
    skills: ["Design Systems", "Component Libraries", "Design Tokens", "Documentation", "Style Guides", "Pattern Libraries"],
  },
  {
    category: "Technical & Dev",
    icon: Code,
    skills: ["HTML/CSS", "React Basics", "Tailwind CSS", "Figma Plugins", "Design-to-Dev Handoff", "Accessibility (WCAG)"],
  },
];

const softSkills = [
  {
    name: "Creative Problem Solving",
    icon: Lightbulb,
    description:
      "Breaking complex problems into actionable design solutions through structured thinking and creative exploration.",
  },
  {
    name: "Communication & Storytelling",
    icon: MessageCircle,
    description:
      "Articulating design decisions to stakeholders at all levels — from C-suite presentations to developer handoff sessions.",
  },
  {
    name: "Empathy & User Advocacy",
    icon: Heart,
    description:
      "Championing user needs throughout the product lifecycle, ensuring every decision is grounded in real user insights.",
  },
  {
    name: "Strategic Thinking",
    icon: Target,
    description:
      "Connecting design outcomes to business KPIs, balancing user delight with measurable business impact.",
  },
  {
    name: "Adaptability & Growth",
    icon: Brain,
    description:
      "Thriving in ambiguity, rapidly iterating on feedback, and continuously learning new tools and methodologies.",
  },
  {
    name: "Leadership & Mentorship",
    icon: Clock,
    description:
      "Guiding junior designers, facilitating design critiques, and fostering a culture of continuous improvement.",
  },
];

const tools = [
  { name: "Figma", category: "Design" },
  { name: "Adobe Creative Suite", category: "Design" },
  { name: "Sketch", category: "Design" },
  { name: "Principle", category: "Prototyping" },
  { name: "Framer", category: "Prototyping" },
  { name: "Miro", category: "Collaboration" },
  { name: "Notion", category: "Collaboration" },
  { name: "Jira", category: "Project Management" },
  { name: "FigJam", category: "Collaboration" },
  { name: "Loom", category: "Communication" },
];

// Section navigation anchors
const sections = [
  { id: "intro", label: "Introduction" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "hard-skills", label: "Hard Skills" },
  { id: "soft-skills", label: "Strengths" },
  { id: "toolkit", label: "Toolkit" },
  { id: "philosophy", label: "Philosophy" },
];

export function About() {
  const [activeSection, setActiveSection] = useState("intro");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Sticky Section Navigator */}
      <div className="sticky top-16 md:top-20 z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs md:text-sm transition-all duration-300 shrink-0 ${
                  activeSection === section.id
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground hover:bg-card"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* 1. HERO - Who I Am (First Impression) */}
      <section id="intro" className="py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1771072428050-1492abb58f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMDkyNTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mallika"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 space-y-6 md:space-y-8"
            >
              <SectionHeader
                label="About Me"
                title="Designing experiences that make a difference"
              />
              <div className="space-y-4 text-base md:text-lg text-muted">
                <p>
                  Hi, I'm Mallika — a Senior UX/UI Designer with 8+ years of
                  experience crafting digital products that users love and
                  businesses rely on.
                </p>
                <p>
                  I specialize in leading end-to-end design processes — from deep
                  user research and strategy to scalable design systems and
                  pixel-perfect interfaces. I've led design teams, collaborated
                  with C-level stakeholders, and shipped products used by over
                  50,000 daily users.
                </p>
                <p>
                  My strength lies in bridging the gap between user needs and
                  business goals, turning complex problems into simple,
                  delightful experiences.
                </p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <Button variant="primary" size="md" asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Get in Touch
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="ghost" size="md" asChild>
                  <Link to="/work" className="inline-flex items-center gap-2">
                    View My Work
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT & RESULTS (What hiring managers care about most) */}
      <section id="impact" className="py-12 md:py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-14"
          >
            <p className="text-xs md:text-sm uppercase tracking-wider font-mono mb-4 opacity-60">
              Measurable Results
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Design impact you can measure
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-background/20 rounded-lg p-5 md:p-6 text-center"
              >
                <p
                  className="text-3xl md:text-4xl lg:text-5xl mb-2 text-accent"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {metric.value}
                </p>
                <p className="text-sm md:text-base opacity-90 mb-1">
                  {metric.label}
                </p>
                <p className="text-xs opacity-50 font-mono">{metric.context}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE (Career Journey) */}
      <section id="experience" className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Career Journey"
            title="Where I've Made an Impact"
            description="A track record of growing responsibilities, team leadership, and shipping products that matter."
            className="mb-8 md:mb-12"
          />
          <div className="space-y-8 md:space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 md:pl-8 border-l-2 border-border"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                <p className="text-xs md:text-sm text-muted uppercase tracking-wider font-mono mb-2">
                  {job.period}
                </p>
                <h3
                  className="text-xl md:text-2xl lg:text-3xl mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {job.title}
                </h3>
                <p className="text-base md:text-lg text-muted mb-3 md:mb-4">
                  {job.company}
                </p>
                <p className="text-sm md:text-base text-muted mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.highlights.map((tag) => (
                    <Tag key={tag} className="text-xs px-3 py-1">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HARD SKILLS (Categorized, no progress bars) */}
      <section id="hard-skills" className="py-12 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Hard Skills"
            title="Technical Expertise"
            description="Core competencies organized by discipline — built through years of hands-on project experience."
            className="mb-10 md:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {hardSkillCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-background border border-border rounded-lg p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h4
                    className="text-lg md:text-xl"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {cat.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 text-xs md:text-sm bg-card border border-border rounded-full text-muted hover:text-foreground hover:border-accent transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOFT SKILLS / PERSONALITY & STRENGTHS */}
      <section id="soft-skills" className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Personality & Strengths"
            title="Beyond the Craft"
            description="The interpersonal qualities that make collaboration effective and design outcomes exceptional."
            className="mb-10 md:mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-card border border-border rounded-lg p-5 md:p-6 hover:border-accent transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/40 transition-colors duration-300">
                  <skill.icon className="w-5 h-5 text-foreground" />
                </div>
                <h4
                  className="text-base md:text-lg mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {skill.name}
                </h4>
                <p className="text-xs md:text-sm text-muted">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TOOLKIT */}
      <section id="toolkit" className="py-12 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Toolkit"
            title="Tools & Technologies"
            description="The daily tools I use to bring designs from concept to production."
            className="mb-8 md:mb-12"
          />
          <div className="flex flex-wrap gap-3 md:gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Tag className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
                  {tool.name}
                </Tag>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DESIGN PHILOSOPHY */}
      <section id="philosophy" className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Design Philosophy"
            title="How I Approach Design"
            className="mb-8 md:mb-12"
          />
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 md:p-8"
            >
              <h4
                className="text-xl md:text-2xl mb-3 md:mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                User-Centered Always
              </h4>
              <p className="text-sm md:text-base text-muted">
                Every design decision I make is rooted in user research and
                validated through testing. I believe in designing with users, not
                for them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-6 md:p-8"
            >
              <h4
                className="text-xl md:text-2xl mb-3 md:mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Simplicity is Sophistication
              </h4>
              <p className="text-sm md:text-base text-muted">
                The best designs are often the simplest. I strive to remove
                complexity and create intuitive experiences that feel effortless.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-6 md:p-8"
            >
              <h4
                className="text-xl md:text-2xl mb-3 md:mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Collaboration Drives Innovation
              </h4>
              <p className="text-sm md:text-base text-muted">
                Great products are built by great teams. I work closely with
                developers, product managers, and stakeholders to ensure
                alignment and shared ownership.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Interested in working together?
            </h2>
            <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">
              Whether you're looking for a senior designer, a design lead, or
              someone to elevate your product experience — let's connect.
            </p>
            <div className="flex flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                asChild
                className="bg-accent text-foreground hover:bg-accent/90"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
