import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../components/button";
import { Tag } from "../components/tag";

import legoHeroImg from "figma:asset/lego-design-system-hero.png";

/* ──────────────────────────── LEGO DESIGN SYSTEM CASE STUDY ──────────────────────────── */
/* Restyled to match the Figma import design */

const tags = [
  "Tokens",
  "Components",
  "Documentation",
  "Design System",
];

export function CaseStudyLegoDesignSystem() {
  return (
    <div>
      {/* Back button */}
      <section className="py-6 md:py-8 border-b border-border">
        
      </section>

      {/* ────── HERO ────── */}
      <section className="min-h-[90vh] grid lg:grid-cols-2 relative overflow-hidden">
        {/* Left side - Content */}
        <div className="px-8 py-16 sm:px-12 lg:px-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-muted uppercase tracking-[1.4px] font-mono mb-4">
              Case Study
            </p>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.03em] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >Building<br />Blocks<br />That <span className="text-accent">Scale.</span></h1>

            <p className="text-lg md:text-xl text-muted max-w-[420px] leading-relaxed mb-10">
              Building a design system from scratch on a
              fast-moving project — where the brand identity was
              still evolving and deadlines weren't waiting.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="flex flex-wrap gap-10">
              <div>
                <label className="text-[10px] tracking-[1.2px] uppercase text-muted block mb-1 font-mono">
                  Role
                </label>
                <span
                  className="text-base"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  UX/UI Designer
                </span>
              </div>
              <div>
                <label className="text-[10px] tracking-[1.2px] uppercase text-muted block mb-1 font-mono">
                  Scope
                </label>
                <span
                  className="text-base"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Design System
                </span>
              </div>
              <div>
                <label className="text-[10px] tracking-[1.2px] uppercase text-muted block mb-1 font-mono">
                  Type
                </label>
                <span
                  className="text-base"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  New Product Build
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side - Image */}
        <div className="relative overflow-hidden min-h-[350px] lg:min-h-full">
          <img
            src={legoHeroImg}
            alt="Colorful LEGO bricks scattered across a surface"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 text-[11px] tracking-[1.1px] text-white/50 uppercase font-mono">
            Design Tokens → Components
          </div>
        </div>
      </section>

      {/* ────── LEGO ANALOGY ────── */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left - Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs text-muted uppercase tracking-[1.2px] font-mono mb-7">
                The Analogy
              </p>

              <h2
                className="text-4xl md:text-5xl leading-[1.1] tracking-tight mb-8"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Think of it
                <br />
                like LEGO.
              </h2>

              <div className="space-y-5 text-lg text-muted leading-relaxed">
                <p>
                  Every LEGO set starts with the same foundation
                  —{" "}
                  <strong className="text-foreground font-bold">
                    small, standardized bricks.
                  </strong>{" "}
                  On their own, they're just colored plastic.
                  But assembled with intention, they become
                  anything: a house, a spaceship, a city.
                </p>
                <p>
                  A Design System works the same way.{" "}
                  <strong className="text-foreground font-bold">
                    Design Tokens
                  </strong>{" "}
                  are the raw bricks — your colors, spacing, and
                  typography values. Stack them into rules, and
                  you get a{" "}
                  <strong className="text-foreground font-bold">
                    Design System
                  </strong>
                  . Combine those rules into reusable patterns,
                  and you get{" "}
                  <strong className="text-foreground font-bold">
                    Components
                  </strong>{" "}
                  — buttons, inputs, modals — ready to build any
                  interface.
                </p>
                <p>
                  The beauty?{" "}
                  <strong className="text-foreground font-bold">
                    Change one brick, and the whole structure
                    updates.
                  </strong>{" "}
                  That's not just good design — that's how you
                  survive a project where everything is still
                  being figured out.
                </p>
              </div>
            </motion.div>

            {/* Right - Analogy Cards */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Token Card */}
              <div className="bg-white border border-border rounded-xl p-6 grid grid-cols-[48px_1fr] gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-2xl">
                  🧱
                </div>
                <div>
                  <h4
                    className="text-lg mb-2 tracking-tight leading-tight"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Design Token = The Brick
                  </h4>
                  <p className="text-base text-muted leading-relaxed mb-3">
                    The atomic value. Color, spacing, radius,
                    font size. Nothing is hardcoded — everything
                    references a token.
                  </p>
                  <span className="text-[11px] tracking-[1.1px] text-[#6ab002] uppercase font-mono">
                    → e.g. color-primary: #C8FF00
                  </span>
                </div>
              </div>

              {/* System Card */}
              <div className="bg-white border border-border rounded-xl p-6 grid grid-cols-[48px_1fr] gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center text-2xl">
                  🏗️
                </div>
                <div>
                  <h4
                    className="text-lg mb-2 tracking-tight leading-tight"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Design System = The Blueprint
                  </h4>
                  <p className="text-base text-muted leading-relaxed mb-3">
                    Rules for how bricks connect. Typography
                    scale, spacing grid, elevation — the logic
                    layer that brings order.
                  </p>
                  <span className="text-[11px] tracking-[1.1px] text-[#6ab002] uppercase font-mono">
                    → e.g. button-padding: spacing-md
                  </span>
                </div>
              </div>

              {/* Component Card */}
              <div className="bg-white border border-border rounded-xl p-6 grid grid-cols-[48px_1fr] gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-muted/15 flex items-center justify-center text-2xl">
                  🏠
                </div>
                <div>
                  <h4
                    className="text-lg mb-2 tracking-tight leading-tight"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Component = The Finished Build
                  </h4>
                  <p className="text-base text-muted leading-relaxed mb-3">
                    Assembled, reusable pieces. Button, Input
                    Field, Modal — built once, used everywhere,
                    consistent always.
                  </p>
                  <span className="text-[11px] tracking-[1.1px] text-[#6ab002] uppercase font-mono">
                    → e.g. &lt;PrimaryButton /&gt;
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────── PROCESS ────── */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-[1.2px] font-mono mb-3 text-background/50">
              The Process
            </p>
            <h2
              className="text-4xl md:text-5xl leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              From zero
              <br />
              to a system.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              className="bg-background/5 border border-background/10 rounded-xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="absolute -top-2 right-6 text-[100px] font-extrabold text-background/5 leading-none pointer-events-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                01
              </div>
              <div className="inline-block px-3 py-1 text-[10px] tracking-[1.2px] font-mono uppercase rounded-full bg-accent/15 text-accent mb-6 relative">
                Layer 01
              </div>
              <h3
                className="text-2xl mb-4 tracking-tight relative leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Design Tokens
              </h3>
              <p className="text-base text-background/50 leading-relaxed mb-6 relative">
                The foundation of everything. Every visual
                decision lives here as a named variable — not a
                hardcoded value.
              </p>
              <ul className="space-y-2 relative text-[13px] text-background/35">
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Color palette (primary, semantic, neutral)
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Typography scale & font families
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Spacing & sizing units
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Border radius & elevation
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Mapped to CSS variables / Figma variables
                </li>
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-background/5 border border-background/10 rounded-xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className="absolute -top-2 right-6 text-[100px] font-extrabold text-background/5 leading-none pointer-events-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                02
              </div>
              <div className="inline-block px-3 py-1 text-[10px] tracking-[1.2px] font-mono uppercase rounded-full bg-background/10 text-background/70 mb-6 relative">
                Layer 02
              </div>
              <h3
                className="text-2xl mb-4 tracking-tight relative leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Design System
              </h3>
              <p className="text-base text-background/50 leading-relaxed mb-6 relative">
                Tokens become rules. Rules become patterns. This
                layer defines how elements relate to each other.
              </p>
              <ul className="space-y-2 relative text-[13px] text-background/35">
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Grid & layout structure
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  State definitions (default, hover, disabled,
                  error)
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Interaction patterns & feedback
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Iconography & illustration standards
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Documentation for Dev handoff
                </li>
              </ul>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-background/5 border border-background/10 rounded-xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className="absolute -top-2 right-6 text-[100px] font-extrabold text-background/5 leading-none pointer-events-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                03
              </div>
              <div className="inline-block px-3 py-1 text-[10px] tracking-[1.2px] font-mono uppercase rounded-full bg-muted/20 text-muted mb-6 relative">
                Layer 03
              </div>
              <h3
                className="text-2xl mb-4 tracking-tight relative leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Components
              </h3>
              <p className="text-base text-background/50 leading-relaxed mb-6 relative">
                Rules assembled into fully functional, reusable
                UI building blocks — aligned to the tech stack
                used by Dev.
              </p>
              <ul className="space-y-2 relative text-[13px] text-background/35">
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Buttons, inputs, selects, checkboxes
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Cards, modals, drawers, toasts
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Navigation & table patterns
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Variants for each component state
                </li>
                <li className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-background/20">
                  Dev-ready specs with token references
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────── CHALLENGE / SOLUTION ────── */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <p className="text-xs text-muted uppercase tracking-[1.2px] font-mono mb-3">
              The Hard Part
            </p>
            <h2
              className="text-4xl md:text-5xl leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Challenges
              <br />& How We Solved Them.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="space-y-8">
              <div className="tracking-[1.5px] uppercase font-mono pb-4 border-b-2 border-[#d4183d] text-[#d4183d] text-[24px]">
                Challenges
              </div>

              <motion.div
                className="pb-8 border-b border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="tracking-[1.2px] uppercase font-mono text-muted mb-2.5 text-[10px]">
                  Design · Brand Identity
                </div>
                <h4
                  className="text-xl mb-2.5 leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  CI was never final
                </h4>
                <p className="text-base text-muted leading-relaxed">
                  The brand identity kept changing — fonts,
                  colors, and styles were still being refined
                  while design work was already underway. Every
                  update threatened to break what was already
                  built.
                </p>
              </motion.div>

              <motion.div
                className="pb-8 border-b border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-[10px] tracking-[1.2px] uppercase font-mono text-muted mb-2.5">
                  Design · Timeline
                </div>
                <h4
                  className="text-xl mb-2.5 leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Building while shipping
                </h4>
                <p className="text-base text-muted leading-relaxed">
                  The project was moving fast with no runway.
                  Design system and product features had to be
                  developed in parallel — there was no "phase 1
                  system, phase 2 product" luxury.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-[10px] tracking-[1.2px] uppercase font-mono text-muted mb-2.5">
                  Developer Collaboration
                </div>
                <h4
                  className="text-xl mb-2.5 leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Components had to match the tech stack
                </h4>
                <p className="text-base text-muted leading-relaxed">
                  If the component structure didn't align with
                  how Dev was building, implementation would
                  slow down or create inconsistencies between
                  design and production.
                </p>
              </motion.div>
            </div>

            {/* Solutions */}
            <div className="space-y-8">
              <div className="tracking-[1.5px] uppercase font-mono pb-4 border-b-2 border-foreground text-foreground text-[24px] text-[#6ab002]">Solutions</div>

              <motion.div
                className="pb-8 border-b border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-[10px] tracking-[1.2px] uppercase font-mono text-muted mb-2.5">
                  Solution · Token-First Approach
                </div>
                <h4
                  className="text-xl mb-2.5 leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Abstract everything into tokens
                </h4>
                <p className="text-base text-muted leading-relaxed">
                  Instead of hardcoding values, every color and
                  font reference pointed to a token. When CI
                  changed, we updated the token — not every
                  component individually. One change, everywhere
                  updated.
                </p>
              </motion.div>

              <motion.div
                className="pb-8 border-b border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-[10px] tracking-[1.2px] uppercase font-mono text-muted mb-2.5">
                  Solution · Parallel Workflow
                </div>
                <h4
                  className="text-xl mb-2.5 leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Base system + feature-level system running
                  together
                </h4>
                <p className="text-base text-muted leading-relaxed">
                  We maintained a core base system while
                  simultaneously building feature-specific
                  component sets. Both tracks were designed to
                  stay in sync, so neither blocked the other
                  from progressing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-[10px] tracking-[1.2px] uppercase font-mono text-muted mb-2.5">
                  Solution · Dev-Aligned Components
                </div>
                <h4
                  className="text-xl mb-2.5 leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Design that speaks the same language as Dev
                </h4>
                <p className="text-base text-muted leading-relaxed">
                  Components were scoped and named to match what
                  the tech framework supported. Regular syncs
                  ensured design didn't create patterns that
                  were difficult or impossible to implement
                  cleanly.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── QUOTE ────── */}
      <section className="py-16 md:py-24 border-t border-border text-center">
        <motion.blockquote
          className="text-3xl md:text-4xl lg:text-5xl leading-[1.3] max-w-4xl mx-auto px-8 tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          "The goal wasn't perfection. It was{" "}
          <em className="not-italic text-accent text-[#b5ef00]">
            flexibility
          </em>{" "}
          — a system that could absorb change without falling
          apart."
        </motion.blockquote>
      </section>

      {/* ────── OUTCOME ────── */}
      <section className="py-20 md:py-32 bg-accent text-foreground">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[1.2px] font-mono mb-3 text-foreground/50">
              The Impact
            </p>
            <h2
              className="text-4xl md:text-5xl leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What the system
              <br />
              made possible.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-foreground/5 rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="text-[48px] leading-none mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                CI
              </div>
              <h4
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Change-Resilient Foundation
              </h4>
              <p className="text-base text-foreground/60 leading-relaxed">
                Brand updates required only token changes — no
                need to rework individual components or screens.
              </p>
            </motion.div>

            <motion.div
              className="bg-foreground/5 rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className="text-[48px] leading-none mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &times;2
              </div>
              <h4
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Faster Design Iterations
              </h4>
              <p className="text-base text-foreground/60 leading-relaxed">
                Reusable components meant new feature screens
                could be assembled quickly without redesigning
                from scratch.
              </p>
            </motion.div>

            <motion.div
              className="bg-foreground/5 rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className="text-[48px] leading-none mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                ✦
              </div>
              <h4
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Consistent End-User Experience
              </h4>
              <p className="text-base text-foreground/60 leading-relaxed">
                Admins using the product encountered the same
                patterns across all features — familiar,
                learnable, and reliable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────── NAVIGATION ────── */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 flex items-center justify-between">
          <Button variant="text" asChild>
            <Link to="/work">
              <ArrowLeft size={20} />
              Back to All Work
            </Link>
          </Button>
          <Button variant="text" asChild>
            <Link to="/case-study/smart-living">
              Next Project
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}