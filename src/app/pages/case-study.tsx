// ============================================================================
// Template สำหรับ case study แบบ "data-driven" (layoutType: "data-driven")
// เนื้อหาของแต่ละโปรเจกต์อยู่ใน src/app/data/case-studies/ (1 ไฟล์ต่อโปรเจกต์
// รวมร่างผ่าน index.ts ในโฟลเดอร์นั้น) ไฟล์พวกนั้นแก้เองได้ ไฟล์นี้มีแต่
// โครงสร้าง/logic การแสดงผล ไม่ควรแก้เว้นแต่จะเปลี่ยนหน้าตา/ลำดับ section
//
// Optional Sections pattern: problem/research/solution/screenshots/impact
// เป็น section ที่ "ไม่มีข้อมูล = ไม่แสดง" อัตโนมัติ ผ่าน resolveSections()
// (src/lib/utils.ts) — ลำดับ section ยังคงตายตัวตามที่ประกาศไว้ใน sectionDefs
// ด้านล่าง ไม่ใช่สิ่งที่ data เลือกลำดับเองได้
// ============================================================================

import { useParams, Link } from "react-router";
import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/button";
import { Tag } from "../components/tag";
import { SectionHeader } from "../components/section-header";
import { resolveSections, findPublishedNext } from "../../lib/utils";
import { caseStudies } from "../data/case-studies";
import { projects } from "../data/projects";

const isProjectPublished = (id: string) =>
  projects.find((p) => p.id === id)?.published === true;

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

  // Optional Sections: only sections with data render. Order below is the
  // fixed display order — data cannot reorder these, only hide/show them.
  const sections = resolveSections([
    { key: "problem", data: study.problem },
    { key: "research", data: study.research },
    { key: "solution", data: study.solution },
    {
      key: "screenshots",
      data: study.screenshots && study.screenshots.length > 0 ? study.screenshots : null,
    },
    { key: "impact", data: study.impact },
  ]);
  const visible = Object.fromEntries(sections.map((s) => [s.key, true]));

  // Skip unpublished projects when picking what "Next Project" points to —
  // published: false projects still exist in caseStudies (so their own
  // page works via direct URL) but should never be surfaced as a next-up
  // recommendation. nextId is null if no published project is reachable.
  const nextId = id
    ? findPublishedNext(
        id,
        (pid) => caseStudies[pid]?.nextProject,
        isProjectPublished
      )
    : null;

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
            className="w-full h-full object-cover object-top"
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

      {/* Overview — always shown, not an optional section */}
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
      {visible.problem && (
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
      )}

      {/* Research */}
      {visible.research && (
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
      )}

      {/* Solution */}
      {visible.solution && (
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
      )}

      {/* Screenshots */}
      {visible.screenshots && (
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
      {visible.impact && (
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
      )}

      {/* Next Project — hidden entirely if no published project is reachable */}
      {nextId && (
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
                  {caseStudies[nextId]?.title}
                </h3>
              </div>
              <Button
                variant="primary"
                size="lg"
                asChild
                className="bg-accent text-foreground hover:bg-accent/90"
              >
                <Link to={`/case-study/${nextId}`}>
                  View Project
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
