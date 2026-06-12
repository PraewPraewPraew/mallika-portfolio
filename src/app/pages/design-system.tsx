import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Star,
  Heart,
  Zap,
  Search,
  Settings,
  User,
  Bell,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Download,
  Upload,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Plus,
  Minus,
  Trash2,
  Edit,
  Filter,
  Grid,
  List,
  Moon,
  Sun,
  Globe,
  Layers,
  Code2,
  Palette,
  Type,
  Box,
  Cpu,
  Brush,
} from "lucide-react";
import { Button } from "../components/button";
import { Tag } from "../components/tag";
import { SectionHeader } from "../components/section-header";
import { cn } from "../../lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ColorSwatch {
  name: string;
  token: string;
  hex: string;
  textColor: string;
  usage: string;
}

interface TypographyItem {
  name: string;
  size: string;
  cssVar: string;
  sample: string;
  font: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const colors: ColorSwatch[] = [
  {
    name: "Background",
    token: "--background",
    hex: "#F7F5F1",
    textColor: "#0A0A0A",
    usage: "Page & section backgrounds",
  },
  {
    name: "Foreground",
    token: "--foreground",
    hex: "#0A0A0A",
    textColor: "#F7F5F1",
    usage: "Primary text & interactive elements",
  },
  {
    name: "Accent",
    token: "--accent",
    hex: "#C8FF00",
    textColor: "#0A0A0A",
    usage: "CTAs, highlights & hover states",
  },
  {
    name: "Muted",
    token: "--muted",
    hex: "#7A7570",
    textColor: "#F7F5F1",
    usage: "Secondary text & disabled states",
  },
  {
    name: "Card",
    token: "--card",
    hex: "#FFFFFF",
    textColor: "#0A0A0A",
    usage: "Card & surface backgrounds",
  },
  {
    name: "Border",
    token: "--border",
    hex: "rgba(10,10,10,0.1)",
    textColor: "#0A0A0A",
    usage: "Dividers, outlines & separators",
  },
  {
    name: "Destructive",
    token: "--destructive",
    hex: "#d4183d",
    textColor: "#ffffff",
    usage: "Error states & destructive actions",
  },
  {
    name: "Ring",
    token: "--ring",
    hex: "#C8FF00",
    textColor: "#0A0A0A",
    usage: "Focus rings & keyboard navigation",
  },
];

const accentVariants = [
  { label: "100%", opacity: "100", hex: "#C8FF00" },
  { label: "80%", opacity: "80", hex: "#D3FF33" },
  { label: "60%", opacity: "60", hex: "#DFFF66" },
  { label: "40%", opacity: "40", hex: "#EBFF99" },
  { label: "20%", opacity: "20", hex: "#F5FFCC" },
  { label: "10%", opacity: "10", hex: "#FAFEE5" },
];

const typeScale: TypographyItem[] = [
  { name: "7xl", size: "4.5rem / 72px", cssVar: "--text-7xl", sample: "Display", font: "serif" },
  { name: "6xl", size: "3.75rem / 60px", cssVar: "--text-6xl", sample: "Hero Heading", font: "serif" },
  { name: "5xl", size: "3rem / 48px", cssVar: "--text-5xl", sample: "Section Title", font: "serif" },
  { name: "4xl", size: "2.25rem / 36px", cssVar: "--text-4xl", sample: "Page Heading", font: "serif" },
  { name: "3xl", size: "1.875rem / 30px", cssVar: "--text-3xl", sample: "Card Heading", font: "serif" },
  { name: "2xl", size: "1.5rem / 24px", cssVar: "--text-2xl", sample: "Subheading", font: "sans" },
  { name: "xl", size: "1.25rem / 20px", cssVar: "--text-xl", sample: "Large Body", font: "sans" },
  { name: "lg", size: "1.125rem / 18px", cssVar: "--text-lg", sample: "Body Large", font: "sans" },
  { name: "base", size: "1rem / 16px", cssVar: "--text-base", sample: "Body Regular", font: "sans" },
  { name: "sm", size: "0.875rem / 14px", cssVar: "--text-sm", sample: "Small Text", font: "sans" },
  { name: "xs", size: "0.75rem / 12px", cssVar: "--text-xs", sample: "Micro Label", font: "mono" },
];

const spacingTokens = [
  { token: "--spacing-xs", value: "0.5rem", px: "8px" },
  { token: "--spacing-sm", value: "0.75rem", px: "12px" },
  { token: "--spacing-md", value: "1rem", px: "16px" },
  { token: "--spacing-lg", value: "1.5rem", px: "24px" },
  { token: "--spacing-xl", value: "2rem", px: "32px" },
  { token: "--spacing-2xl", value: "3rem", px: "48px" },
  { token: "--spacing-3xl", value: "4rem", px: "64px" },
  { token: "--spacing-4xl", value: "6rem", px: "96px" },
  { token: "--spacing-5xl", value: "8rem", px: "128px" },
];

const radiusTokens = [
  { token: "--radius-sm", value: "calc(0.5rem - 2px)", px: "6px", label: "Small" },
  { token: "--radius-md", value: "0.5rem", px: "8px", label: "Medium" },
  { token: "--radius-lg", value: "calc(0.5rem + 4px)", px: "12px", label: "Large" },
  { token: "rounded-full", value: "9999px", px: "999px", label: "Full" },
];

const iconLibrary = [
  ArrowUpRight, Check, Copy, Sparkles, ArrowRight, ArrowLeft,
  Menu, X, Mail, Github, Linkedin, Twitter, Star, Heart,
  Zap, Search, Settings, User, Bell, ChevronDown, ChevronRight,
  ExternalLink, Download, Upload, Eye, EyeOff, Lock, Unlock,
  Plus, Minus, Trash2, Edit, Filter, Grid, List, Moon, Sun, Globe,
];

const navSections = [
  { id: "colors", label: "Colors", icon: Palette },
  { id: "typography", label: "Typography", icon: Type },
  { id: "spacing", label: "Spacing", icon: Box },
  { id: "radius", label: "Border Radius", icon: Layers },
  { id: "buttons", label: "Buttons", icon: Cpu },
  { id: "tags", label: "Tags & Labels", icon: Code2 },
  { id: "cards", label: "Cards", icon: Grid },
  { id: "forms", label: "Form Elements", icon: Edit },
  { id: "icons", label: "Icon Library", icon: Brush },
  { id: "motion", label: "Motion & Animation", icon: Zap },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="p-1.5 rounded hover:bg-border transition-colors text-muted hover:text-foreground"
      title="Copy to clipboard"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
}

function TokenBadge({ token }: { token: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-foreground/5 border border-border rounded text-xs font-mono text-muted">
      {token}
      <CopyButton value={`var(${token})`} />
    </span>
  );
}

function SectionDivider({ id, label }: { id: string; label: string }) {
  return (
    <div id={id} className="flex items-center gap-4 pt-4 mb-8 md:mb-12 scroll-mt-28">
      <div className="w-2 h-8 bg-accent rounded-full" />
      <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-serif)" }}>
        {label}
      </h2>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function DesignSystem() {
  const [activeSection, setActiveSection] = useState("colors");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [checkboxes, setCheckboxes] = useState({ ux: true, ui: false, research: true });
  const [radioValue, setRadioValue] = useState("option1");
  const [sliderValue, setSliderValue] = useState(65);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navSections.map((s) => document.getElementById(s.id));
      const scrollPos = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navSections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* ── Page Hero ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-full mb-6">
              <Palette size={14} className="text-foreground" />
              <span className="text-xs font-mono uppercase tracking-widest">Design System v1.0</span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Alex Rivers{" "}
              <span className="italic">Design System</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted max-w-2xl mb-8">
              A comprehensive reference of all design tokens, components, typography, and patterns
              powering this portfolio. Built for consistency, scalability, and craft.
            </p>
            <div className="flex flex-wrap gap-3">
              <Tag>Playfair Display</Tag>
              <Tag>DM Sans</Tag>
              <Tag>JetBrains Mono</Tag>
              <Tag>React + Tailwind v4</Tag>
              <Tag>Motion</Tag>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex gap-8 lg:gap-12">

          {/* ── Sticky Sidebar (Desktop) ── */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-1">
              <p className="text-xs font-mono uppercase tracking-widest text-muted mb-4 px-3">
                Contents
              </p>
              {navSections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 text-left",
                    activeSection === s.id
                      ? "bg-accent text-foreground"
                      : "text-muted hover:text-foreground hover:bg-foreground/5"
                  )}
                >
                  <s.icon size={14} />
                  {s.label}
                </button>
              ))}
            </div>
          </aside>

          {/* ── Mobile TOC Toggle ── */}
          <div className="lg:hidden fixed bottom-6 right-4 z-50">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg"
            >
              {sidebarOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="lg:hidden fixed bottom-24 right-4 z-40 bg-background border border-border rounded-xl shadow-2xl p-4 w-52"
              >
                {navSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 text-left",
                      activeSection === s.id
                        ? "bg-accent text-foreground"
                        : "text-muted hover:text-foreground hover:bg-foreground/5"
                    )}
                  >
                    <s.icon size={14} />
                    {s.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Main Content ── */}
          <main className="flex-1 min-w-0 space-y-20 md:space-y-28">

            {/* ═══════════════ COLORS ═══════════════ */}
            <section>
              <SectionDivider id="colors" label="Colors" />

              {/* Core Palette */}
              <div className="mb-10">
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Core Palette
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {colors.map((c, i) => (
                    <motion.div
                      key={c.token}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="border border-border rounded-xl overflow-hidden"
                    >
                      <div
                        className="h-24 w-full flex items-end px-4 pb-3"
                        style={{ backgroundColor: c.hex, color: c.textColor }}
                      >
                        <span className="text-xs font-mono opacity-60">{c.hex}</span>
                      </div>
                      <div className="p-4 bg-background flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                            {c.name}
                          </p>
                          <p className="text-xs text-muted">{c.usage}</p>
                        </div>
                        <TokenBadge token={c.token} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Accent Scale */}
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Accent Scale
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {accentVariants.map((v) => (
                    <div key={v.opacity} className="space-y-2">
                      <div
                        className="h-16 rounded-lg border border-border"
                        style={{ backgroundColor: v.hex }}
                      />
                      <p className="text-xs font-mono text-muted text-center">{v.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted mt-3 font-mono">
                  Use with Tailwind opacity modifier: <span className="text-foreground">bg-accent/20</span>,{" "}
                  <span className="text-foreground">bg-accent/40</span>, etc.
                </p>
              </div>
            </section>

            {/* ═══════════════ TYPOGRAPHY ═══════════════ */}
            <section>
              <SectionDivider id="typography" label="Typography" />

              {/* Font Families */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {[
                  {
                    label: "Playfair Display",
                    token: "--font-serif",
                    role: "Headlines & display",
                    sample: "Crafted with intention",
                    family: "var(--font-serif)",
                    weight: "400 – 700",
                  },
                  {
                    label: "DM Sans",
                    token: "--font-sans",
                    role: "Body text & UI copy",
                    sample: "Clear and readable",
                    family: "var(--font-sans)",
                    weight: "400 – 700",
                  },
                  {
                    label: "JetBrains Mono",
                    token: "--font-mono",
                    role: "Labels, code & tags",
                    sample: "MONO / 01",
                    family: "var(--font-mono)",
                    weight: "400 – 600",
                  },
                ].map((f) => (
                  <div key={f.token} className="border border-border rounded-xl p-6 space-y-4 bg-card">
                    <p className="text-xs font-mono uppercase tracking-widest text-muted">{f.role}</p>
                    <p
                      className="text-2xl leading-tight"
                      style={{ fontFamily: f.family }}
                    >
                      {f.sample}
                    </p>
                    <div className="pt-2 border-t border-border flex items-center justify-between">
                      <div>
                        <p className="text-sm">{f.label}</p>
                        <p className="text-xs text-muted font-mono">{f.weight}</p>
                      </div>
                      <TokenBadge token={f.token} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Type Scale */}
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Type Scale
                </h3>
                <div className="space-y-2">
                  {typeScale.map((t, i) => (
                    <motion.div
                      key={t.cssVar}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.03 }}
                      className="flex items-center gap-4 py-4 border-b border-border group"
                    >
                      <div className="w-12 text-right">
                        <span className="text-xs font-mono text-muted">{t.name}</span>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p
                          className="truncate leading-tight"
                          style={{
                            fontSize: `var(${t.cssVar})`,
                            fontFamily:
                              t.font === "serif"
                                ? "var(--font-serif)"
                                : t.font === "mono"
                                ? "var(--font-mono)"
                                : "var(--font-sans)",
                          }}
                        >
                          {t.sample}
                        </p>
                      </div>
                      <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
                        <span className="text-xs font-mono text-muted">{t.size}</span>
                        <TokenBadge token={t.cssVar} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Font Weights */}
              <div className="mt-10">
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Font Weights
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Normal", weight: 400, token: "--font-weight-normal" },
                    { name: "Medium", weight: 500, token: "--font-weight-medium" },
                    { name: "Semibold", weight: 600, token: "--font-weight-semibold" },
                    { name: "Bold", weight: 700, token: "--font-weight-bold" },
                  ].map((w) => (
                    <div key={w.token} className="border border-border rounded-xl p-5 bg-card">
                      <p
                        className="text-xl md:text-2xl mb-3"
                        style={{ fontFamily: "var(--font-sans)", fontWeight: w.weight }}
                      >
                        Aa
                      </p>
                      <p className="text-sm">{w.name}</p>
                      <p className="text-xs font-mono text-muted">{w.weight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ═══════════════ SPACING ═══════════════ */}
            <section>
              <SectionDivider id="spacing" label="Spacing" />
              <div className="space-y-3">
                {spacingTokens.map((s, i) => (
                  <motion.div
                    key={s.token}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-32 flex-shrink-0">
                      <TokenBadge token={s.token} />
                    </div>
                    <div
                      className="bg-accent rounded"
                      style={{ width: s.px, height: "20px", minWidth: "4px" }}
                    />
                    <span className="text-xs font-mono text-muted whitespace-nowrap">
                      {s.value} / {s.px}
                    </span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ═══════════════ BORDER RADIUS ═══════════════ */}
            <section>
              <SectionDivider id="radius" label="Border Radius" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {radiusTokens.map((r) => (
                  <div key={r.token} className="bg-card border border-border p-6 text-center space-y-4">
                    <div
                      className="w-full h-20 bg-foreground/10 border-2 border-foreground/20 mx-auto"
                      style={{
                        borderRadius: r.px === "999px" ? "9999px" : r.px,
                      }}
                    />
                    <div>
                      <p className="text-sm mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                        {r.label}
                      </p>
                      <p className="text-xs font-mono text-muted">{r.px}</p>
                    </div>
                    <TokenBadge token={r.token} />
                  </div>
                ))}
              </div>
            </section>

            {/* ═══════════════ BUTTONS ═══════════════ */}
            <section>
              <SectionDivider id="buttons" label="Buttons" />

              {/* Variants */}
              <div className="mb-10">
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Variants
                </h3>
                <div className="border border-border rounded-xl overflow-hidden">
                  <div className="p-8 bg-card flex flex-wrap items-center gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="text">Text Button</Button>
                  </div>
                  <div className="border-t border-border bg-background p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-muted">
                    <div className="space-y-1">
                      <p className="text-foreground">Primary</p>
                      <p>bg-foreground → bg-accent on hover</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-foreground">Ghost</p>
                      <p>border-foreground → bg-foreground on hover</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-foreground">Text</p>
                      <p>Underline decoration on hover</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-10">
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Sizes
                </h3>
                <div className="border border-border rounded-xl overflow-hidden">
                  <div className="p-8 bg-card flex flex-wrap items-end gap-4">
                    <Button variant="primary" size="sm">Small</Button>
                    <Button variant="primary" size="md">Medium</Button>
                    <Button variant="primary" size="lg">Large</Button>
                  </div>
                  <div className="border-t border-border bg-background p-4 grid grid-cols-3 gap-4 text-xs font-mono text-muted">
                    <div><span className="text-foreground">sm</span> — px-4 py-2</div>
                    <div><span className="text-foreground">md</span> — px-6 py-3</div>
                    <div><span className="text-foreground">lg</span> — px-8 py-4</div>
                  </div>
                </div>
              </div>

              {/* With Icons */}
              <div className="mb-10">
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  With Icons
                </h3>
                <div className="border border-border rounded-xl p-8 bg-card flex flex-wrap items-center gap-4">
                  <Button variant="primary">
                    View Work <ArrowRight size={16} />
                  </Button>
                  <Button variant="ghost">
                    <Download size={16} /> Download CV
                  </Button>
                  <Button variant="text">
                    <ExternalLink size={16} /> Open Link
                  </Button>
                  <Button variant="primary" className="bg-accent text-foreground hover:bg-accent/90">
                    <Sparkles size={16} /> Accent Variant
                  </Button>
                </div>
              </div>

              {/* Dark Background Context */}
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  On Dark Background
                </h3>
                <div className="border border-border rounded-xl p-8 bg-foreground flex flex-wrap items-center gap-4">
                  <Button
                    variant="primary"
                    className="bg-accent text-foreground hover:bg-accent/90"
                  >
                    <Sparkles size={16} /> Get Started
                  </Button>
                  <Button variant="ghost" className="border-background text-background hover:bg-background hover:text-foreground">
                    Learn More
                  </Button>
                </div>
              </div>
            </section>

            {/* ═══════════════ TAGS & LABELS ═══════════════ */}
            <section>
              <SectionDivider id="tags" label="Tags & Labels" />

              {/* Tags */}
              <div className="mb-10">
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">Tag Component</h3>
                <div className="border border-border rounded-xl p-8 bg-card flex flex-wrap gap-3">
                  <Tag>Mobile</Tag>
                  <Tag>UX Research</Tag>
                  <Tag>Design System</Tag>
                  <Tag>Fintech</Tag>
                  <Tag>AI/ML</Tag>
                  <Tag>Components</Tag>
                  <Tag>Tokens</Tag>
                </div>
              </div>

              {/* Status Labels */}
              <div className="mb-10">
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Status Badges
                </h3>
                <div className="border border-border rounded-xl p-8 bg-card flex flex-wrap gap-3">
                  {[
                    { label: "Available", bg: "#C8FF00", text: "#0A0A0A" },
                    { label: "In Progress", bg: "#FFC107", text: "#0A0A0A" },
                    { label: "Completed", bg: "#4CAF50", text: "#fff" },
                    { label: "On Hold", bg: "#7A7570", text: "#fff" },
                    { label: "Cancelled", bg: "#d4183d", text: "#fff" },
                  ].map((b) => (
                    <span
                      key={b.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono"
                      style={{ backgroundColor: b.bg, color: b.text }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: b.text, opacity: 0.5 }}
                      />
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category Labels */}
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Mono Labels (Overline)
                </h3>
                <div className="border border-border rounded-xl p-8 bg-card space-y-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted">
                    Section Label / Overline
                  </p>
                  <p className="text-xs font-mono uppercase tracking-wider text-foreground">
                    Category Heading
                  </p>
                  <p className="text-xs font-mono text-muted">
                    inline • metadata • 01 / technical label
                  </p>
                </div>
              </div>
            </section>

            {/* ═══════════════ CARDS ═══════════════ */}
            <section>
              <SectionDivider id="cards" label="Cards" />

              {/* Card Variants */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Default Card */}
                <div className="border border-border rounded-xl p-6 bg-card space-y-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted">Default Card</p>
                  <h3 className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
                    Card Title
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    A standard card with border, rounded corners, and card background.
                  </p>
                  <Button variant="text" size="sm">
                    Learn more <ArrowRight size={14} />
                  </Button>
                </div>

                {/* Accent Card */}
                <div className="border border-accent rounded-xl p-6 bg-card space-y-3">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted">Accent Card</p>
                  <h3 className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
                    Featured Card
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Uses the accent color border to draw attention to important content.
                  </p>
                  <div className="pt-1">
                    <Tag>Featured</Tag>
                  </div>
                </div>

                {/* Dark Card */}
                <div className="rounded-xl p-6 bg-foreground text-background space-y-3">
                  <p className="text-xs font-mono uppercase tracking-widest opacity-60">
                    Dark Card
                  </p>
                  <h3 className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
                    Inverted Card
                  </h3>
                  <p className="text-sm leading-relaxed opacity-70">
                    Dark background with light text, used for CTAs and high emphasis sections.
                  </p>
                  <span className="inline-block px-3 py-1 bg-accent text-foreground text-xs rounded-full font-mono">
                    CTA Variant
                  </span>
                </div>
              </div>

              {/* Stat Cards */}
              <div className="mb-8">
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Stat Cards
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: "50+", label: "Projects" },
                    { value: "8+", label: "Years" },
                    { value: "30+", label: "Clients" },
                    { value: "1k+", label: "Users" },
                  ].map((stat) => (
                    <div key={stat.label} className="border border-border rounded-xl p-6 bg-card">
                      <p
                        className="text-3xl md:text-4xl mb-1"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section Header Component */}
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Section Header Component
                </h3>
                <div className="border border-border rounded-xl p-8 bg-card">
                  <SectionHeader
                    label="Featured Work"
                    title="Selected Projects"
                    description="A showcase of recent work across mobile apps, web platforms, and design systems."
                  />
                </div>
              </div>
            </section>

            {/* ═══════════════ FORM ELEMENTS ═══════════════ */}
            <section>
              <SectionDivider id="forms" label="Form Elements" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Text Input */}
                <div className="border border-border rounded-xl p-6 bg-card space-y-3">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted block">
                    Text Input
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formValues.name}
                    onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                  <p className="text-xs text-muted font-mono">
                    border-border → ring-accent on focus
                  </p>
                </div>

                {/* Password Input */}
                <div className="border border-border rounded-xl p-6 bg-card space-y-3">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted block">
                    Password Input
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Enter password"
                      className="w-full px-4 py-3 pr-12 bg-background border border-border rounded-lg text-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                    <button
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
                    >
                      {passwordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <p className="text-xs text-muted font-mono">With visibility toggle icon</p>
                </div>

                {/* Email Input with Validation */}
                <div className="border border-border rounded-xl p-6 bg-card space-y-3">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted block">
                    Email — With Error State
                  </label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    value={formValues.email}
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-destructive rounded-lg text-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-destructive transition-all"
                  />
                  <p className="text-xs text-destructive font-mono flex items-center gap-1">
                    <X size={12} /> Please enter a valid email address
                  </p>
                </div>

                {/* Textarea */}
                <div className="border border-border rounded-xl p-6 bg-card space-y-3">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted block">
                    Textarea
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={formValues.message}
                    onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  />
                  <p className="text-xs text-muted font-mono">resize-none for consistent layout</p>
                </div>

                {/* Select */}
                <div className="border border-border rounded-xl p-6 bg-card space-y-3">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted block">
                    Select / Dropdown
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none px-4 py-3 pr-10 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all cursor-pointer">
                      <option>UX Design</option>
                      <option>UI Design</option>
                      <option>Design System</option>
                      <option>User Research</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                    />
                  </div>
                  <p className="text-xs text-muted font-mono">Custom styled native select</p>
                </div>

                {/* Search */}
                <div className="border border-border rounded-xl p-6 bg-card space-y-3">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted block">
                    Search Input
                  </label>
                  <div className="relative">
                    <Search
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                    />
                    <input
                      type="search"
                      placeholder="Search projects..."
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>
                  <p className="text-xs text-muted font-mono">Left-padded icon variant</p>
                </div>

                {/* Checkboxes */}
                <div className="border border-border rounded-xl p-6 bg-card space-y-3">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted block">
                    Checkboxes
                  </label>
                  <div className="space-y-3">
                    {[
                      { key: "ux" as const, label: "UX Research" },
                      { key: "ui" as const, label: "UI Design" },
                      { key: "research" as const, label: "User Testing" },
                    ].map((item) => (
                      <label key={item.key} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          onClick={() =>
                            setCheckboxes({ ...checkboxes, [item.key]: !checkboxes[item.key] })
                          }
                          className={cn(
                            "w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-shrink-0",
                            checkboxes[item.key]
                              ? "bg-accent border-accent"
                              : "bg-background border-border group-hover:border-foreground"
                          )}
                        >
                          {checkboxes[item.key] && <Check size={12} className="text-foreground" />}
                        </div>
                        <span className="text-sm">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Radio Buttons */}
                <div className="border border-border rounded-xl p-6 bg-card space-y-3">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted block">
                    Radio Buttons
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "option1", label: "Full-time Collaboration" },
                      { value: "option2", label: "Part-time / Freelance" },
                      { value: "option3", label: "One-off Project" },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          onClick={() => setRadioValue(opt.value)}
                          className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0",
                            radioValue === opt.value
                              ? "border-accent bg-accent"
                              : "border-border group-hover:border-foreground"
                          )}
                        >
                          {radioValue === opt.value && (
                            <div className="w-2 h-2 rounded-full bg-foreground" />
                          )}
                        </div>
                        <span className="text-sm">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Range Slider */}
                <div className="border border-border rounded-xl p-6 bg-card space-y-3 md:col-span-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted block">
                      Range Slider
                    </label>
                    <span className="text-sm font-mono">{sliderValue}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={sliderValue}
                    onChange={(e) => setSliderValue(parseInt(e.target.value))}
                    className="w-full accent-accent h-1 rounded-full"
                  />
                  <div className="flex justify-between text-xs font-mono text-muted">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ═══════════════ ICONS ═══════════════ */}
            <section>
              <SectionDivider id="icons" label="Icon Library" />
              <p className="text-sm text-muted mb-6">
                Using{" "}
                <a
                  href="https://lucide.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Lucide React
                </a>{" "}
                — a clean, consistent open-source icon library. All icons scale with the{" "}
                <code className="text-xs font-mono bg-foreground/5 px-1.5 py-0.5 rounded">size</code> prop.
              </p>

              {/* Icon Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 mb-8">
                {iconLibrary.map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex flex-col items-center justify-center gap-2 p-3 border border-border rounded-lg bg-card cursor-default"
                  >
                    <Icon size={20} className="text-foreground" />
                  </motion.div>
                ))}
              </div>

              {/* Icon Sizes */}
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Icon Sizes
                </h3>
                <div className="border border-border rounded-xl p-6 bg-card flex flex-wrap items-end gap-6">
                  {[12, 16, 20, 24, 32, 40, 48].map((s) => (
                    <div key={s} className="flex flex-col items-center gap-2">
                      <Star size={s} className="text-foreground" />
                      <span className="text-xs font-mono text-muted">{s}px</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ═══════════════ MOTION ═══════════════ */}
            <section>
              <SectionDivider id="motion" label="Motion & Animation" />
              <p className="text-sm text-muted mb-8">
                Powered by{" "}
                <span className="font-mono text-foreground">motion/react</span>{" "}
                (Motion library). All animations use consistent easing and duration tokens.
              </p>

              {/* Entrance Animations */}
              <div className="mb-10">
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Entrance Animations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: "Fade Up", initial: { opacity: 0, y: 24 }, desc: "opacity + translateY" },
                    { label: "Fade In", initial: { opacity: 0 }, desc: "opacity only" },
                    { label: "Scale In", initial: { opacity: 0, scale: 0.93 }, desc: "opacity + scale" },
                  ].map((anim) => (
                    <div key={anim.label} className="border border-border rounded-xl overflow-hidden">
                      <motion.div
                        initial={anim.initial}
                        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        viewport={{ once: false, margin: "-40px" }}
                        transition={{ duration: 0.5 }}
                        className="p-6 bg-card"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent mb-4" />
                        <p className="text-base" style={{ fontFamily: "var(--font-serif)" }}>
                          {anim.label}
                        </p>
                        <p className="text-xs font-mono text-muted mt-1">{anim.desc}</p>
                      </motion.div>
                      <div className="border-t border-border bg-background px-4 py-2 text-xs font-mono text-muted">
                        duration: 0.5s
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effects */}
              <div className="mb-10">
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Hover Interactions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Lift */}
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="border border-border rounded-xl p-6 bg-card cursor-default space-y-2"
                  >
                    <Layers size={24} />
                    <p className="text-sm" style={{ fontFamily: "var(--font-serif)" }}>Lift on Hover</p>
                    <p className="text-xs font-mono text-muted">translateY(-8px)</p>
                  </motion.div>

                  {/* Scale */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="border border-border rounded-xl p-6 bg-card cursor-default space-y-2"
                  >
                    <Box size={24} />
                    <p className="text-sm" style={{ fontFamily: "var(--font-serif)" }}>Scale on Hover</p>
                    <p className="text-xs font-mono text-muted">scale(1.03) — spring</p>
                  </motion.div>

                  {/* Accent Border */}
                  <motion.div
                    whileHover={{ borderColor: "#C8FF00" }}
                    transition={{ duration: 0.2 }}
                    className="border-2 border-border rounded-xl p-6 bg-card cursor-default space-y-2"
                  >
                    <Palette size={24} />
                    <p className="text-sm" style={{ fontFamily: "var(--font-serif)" }}>Accent Border</p>
                    <p className="text-xs font-mono text-muted">border-color → accent</p>
                  </motion.div>
                </div>
              </div>

              {/* Stagger Example */}
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                  Staggered List
                </h3>
                <div className="border border-border rounded-xl p-6 bg-card">
                  <div className="space-y-3">
                    {[
                      "User Research & Discovery",
                      "Information Architecture",
                      "Wireframing & Prototyping",
                      "Visual Design & Handoff",
                    ].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-20px" }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-background transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <p className="text-sm">{item}</p>
                        <ChevronRight size={14} className="text-muted ml-auto" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xs font-mono text-muted mt-4 pt-4 border-t border-border">
                    delay: index × 0.08s — creates cascading entrance
                  </p>
                </div>
              </div>
            </section>

            {/* ═══════════════ FOOTER ═══════════════ */}
            <section className="border-t border-border pt-12">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted mb-2">
                    Design System
                  </p>
                  <h3 className="text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
                    Alex Rivers — v1.0
                  </h3>
                  <p className="text-sm text-muted mt-1">Last updated: February 2026</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="ghost" size="sm">
                    <Download size={14} /> Export Tokens
                  </Button>
                  <Button variant="primary" size="sm" asChild>
                    <a href="/work">
                      View Work <ArrowRight size={14} />
                    </a>
                  </Button>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
