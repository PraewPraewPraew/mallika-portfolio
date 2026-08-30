// ============================================================================
// Template สำหรับ case study แบบ "ecommerce" (layoutType: "ecommerce")
// เนื้อหาของแต่ละโปรเจกต์อยู่ใน src/app/data/case-studies-ecommerce.ts
// ไฟล์นั้นแก้เองได้ ไฟล์นี้มีแต่โครงสร้าง/logic การแสดงผล
//
// Optional Sections pattern: challenge/approach/solution/collaboration/
// reflection เป็น section ที่ "ไม่มีข้อมูล = ไม่แสดง" อัตโนมัติ ผ่าน
// resolveSections() (src/lib/utils.ts) — เลข "01-05" หน้าหัวข้อ, delay ของ
// animation, และแถบสีสลับ (zebra) คำนวณจากตำแหน่งจริงที่แสดงเสมอ ไม่ใช่ลำดับ
// ที่ประกาศไว้ ลำดับ section เองยังคงตายตัวตามอาร์เรย์ sectionDefs ด้านล่าง —
// data เลือกได้แค่ "แสดง/ไม่แสดง" ไม่ใช่ "สลับลำดับ"
//
// การเพิ่ม section type ใหม่ (เช่น video, timeline) ต้องแก้โค้ดไฟล์นี้ ไม่ใช่
// แค่แก้ data — ถ้าในอนาคตพบว่าต้องเขียน section แบบเดียวกันซ้ำในหลาย layout
// (เช่นทั้ง ecommerce และ lego อยากได้ section เดียวกัน) ให้พิจารณาย้ายไปใช้
// Section Registry (Option B) แทนแนวทางนี้ — ดู CLAUDE.md
// ============================================================================

import { useLocation, Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../components/button";
import { Tag } from "../components/tag";
import { SectionHeader } from "../components/section-header";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { resolveSections, findPublishedNext } from "../../lib/utils";
import { ecommerceCaseStudies } from "../data/case-studies-ecommerce";
import { projects } from "../data/projects";

const isProjectPublished = (pid: string) =>
  projects.find((p) => p.id === pid)?.published === true;

export function CaseStudyEcommerce() {
  // routes.tsx registers one exact literal path per "ecommerce"-layout
  // project (`case-study/<id>`), not a shared `:id` param route — that's
  // what keeps it from colliding with case-study.tsx's generic
  // `case-study/:id` catch-all. So the id is read straight from the URL
  // path here instead of useParams().
  const location = useLocation();
  const id = location.pathname.replace(/^\/case-study\//, "").replace(/\/$/, "");
  const study = ecommerceCaseStudies[id];

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
  // `number`/`index` are computed from the FILTERED list, so numbering,
  // animation delay, and the alternating background all reflect what's
  // actually on screen.
  const sections = resolveSections([
    { key: "challenge", data: study.challenge },
    { key: "approach", data: study.approach },
    { key: "solution", data: study.solution },
    { key: "collaboration", data: study.collaboration },
    { key: "reflection", data: study.reflection },
  ]);
  const sectionByKey = Object.fromEntries(sections.map((s) => [s.key, s]));
  const altBg = (key: string) =>
    sectionByKey[key] && sectionByKey[key].index % 2 === 0 ? "bg-card" : "";

  // Same published-skip rule as case-study.tsx — never link "Next Project"
  // to something unpublished. nextId is null if none is reachable.
  const nextId = findPublishedNext(
    id,
    (pid) => ecommerceCaseStudies[pid]?.nextProjectId,
    isProjectPublished
  );

  return (
    <div>
      {/* Back button */}
      <section className="py-6 md:py-8 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="text" asChild>
            <Link to="/work">
              <ArrowLeft size={20} />
              Back to All Work
            </Link>
          </Button>
        </div>
      </section>

      {/* ────── HOOK — PROJECT OVERVIEW ────── */}
      <section className="py-16 md:py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs md:text-sm text-muted uppercase tracking-widest font-mono mb-4">
              {study.hero.label}
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {study.hero.headline}
            </h1>
            <div className="max-w-3xl space-y-4">
              {study.hero.intro.map((paragraph: string, i: number) => (
                <p
                  key={i}
                  className="text-base md:text-lg lg:text-xl text-muted leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {study.hero.tags.map((t: string) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 md:mt-16"
          >
            <ImageWithFallback
              src={study.hero.image.src}
              alt={study.hero.image.alt}
              className="w-full aspect-[16/8] object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ────── THE CHALLENGE ────── */}
      {sectionByKey.challenge && (
        <section className={`py-16 md:py-24 ${altBg("challenge")}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader
                label={`${sectionByKey.challenge.number} — ${study.challenge.label}`}
                title={study.challenge.title}
                className="mb-6 md:mb-8"
              />
              <div className="max-w-3xl space-y-4">
                {study.challenge.paragraphs.map((paragraph: string, i: number) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Role diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-12 md:mt-16"
            >
              <ImageWithFallback
                src={study.challenge.image.src}
                alt={study.challenge.image.alt}
                className="w-full aspect-[16/9] object-cover rounded-lg"
              />
              {study.challenge.image.caption && (
                <p className="text-xs text-muted text-center uppercase tracking-widest font-mono mt-4">
                  {study.challenge.image.caption}
                </p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* ────── MY APPROACH ────── */}
      {sectionByKey.approach && (
        <section className={`py-16 md:py-24 ${altBg("approach")}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader
                label={`${sectionByKey.approach.number} — ${study.approach.label}`}
                title={study.approach.title}
                className="mb-6 md:mb-8"
              />
              <div className="max-w-3xl space-y-4">
                {study.approach.paragraphs.map((paragraph: string, i: number) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Decision table with visual background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-12 md:mt-16"
            >
              <div className="mb-8">
                <ImageWithFallback
                  src={study.approach.backgroundImage.src}
                  alt={study.approach.backgroundImage.alt}
                  className="w-full aspect-[16/9] object-cover rounded-lg opacity-30"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse">
                  <thead>
                    <tr>
                      {study.approach.decisionTable.columns.map((h: string) => (
                        <th
                          key={h}
                          className="text-left text-xs md:text-sm uppercase tracking-wider font-mono px-5 py-4 bg-accent text-foreground first:rounded-tl-lg last:rounded-tr-lg"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {study.approach.decisionTable.rows.map((row: any, i: number) => (
                      <tr
                        key={i}
                        className="border-b border-border last:border-b-0 bg-background/50"
                      >
                        <td className="px-5 py-5 text-sm md:text-base align-top text-muted">
                          {row.business}
                        </td>
                        <td className="px-5 py-5 text-sm md:text-base align-top text-muted">
                          {row.ux}
                        </td>
                        <td className="px-5 py-5 text-sm md:text-base align-top text-muted">
                          {row.design}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ────── SOLUTION — FEATURE WALKTHROUGHS ────── */}
      {sectionByKey.solution && (
        <section className={`py-16 md:py-24 ${altBg("solution")}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader
                label={`${sectionByKey.solution.number} — ${study.solution.label}`}
                title={study.solution.title}
                className="mb-6 md:mb-8"
              />
              <div className="max-w-3xl space-y-4">
                {study.solution.paragraphs.map((paragraph: string, i: number) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Feature walkthroughs */}
            <div className="space-y-12 md:space-y-16 mt-12 md:mt-16">
              {study.solution.features.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-xl border border-border overflow-hidden"
                >
                  <div className="p-6 md:p-8 border-b border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded bg-accent flex items-center justify-center text-xs font-mono text-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className="text-xl md:text-2xl"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  {feature.image ? (
                    <ImageWithFallback
                      src={feature.image.src}
                      alt={feature.image.alt}
                      className="w-full aspect-[16/9] object-cover"
                    />
                  ) : (
                    <div className="aspect-[16/9] bg-surface-subtle flex items-center justify-center">
                      <span className="text-xs md:text-sm text-muted font-mono tracking-wider uppercase">
                        {feature.placeholderLabel}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ────── COLLABORATION HIGHLIGHT ────── */}
      {sectionByKey.collaboration && (
        <section className={`py-16 md:py-24 ${altBg("collaboration")}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader
                label={`${sectionByKey.collaboration.number} — ${study.collaboration.label}`}
                title={study.collaboration.title}
                className="mb-6 md:mb-8"
              />
              <div className="max-w-3xl space-y-4">
                {study.collaboration.paragraphs.map((paragraph: string, i: number) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Before / After comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-12 md:mt-16"
            >
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="p-6 md:p-8 border-b border-border">
                  <h3
                    className="text-xl md:text-2xl text-center mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {study.collaboration.beforeAfter.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted text-center">
                    {study.collaboration.beforeAfter.description}
                  </p>
                </div>
                <ImageWithFallback
                  src={study.collaboration.beforeAfter.image.src}
                  alt={study.collaboration.beforeAfter.image.alt}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ────── REFLECTION — WHAT I LEARNED ────── */}
      {sectionByKey.reflection && (
        <section className={`py-16 md:py-24 ${altBg("reflection")}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader
                label={`${sectionByKey.reflection.number} — ${study.reflection.label}`}
                title={study.reflection.title}
                className="mb-6 md:mb-8"
              />
              <div className="max-w-3xl space-y-4">
                {study.reflection.paragraphs.map((paragraph: string, i: number) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Quote card with background image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-12 md:mt-16"
            >
              <div className="relative rounded-2xl overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={study.reflection.quote.backgroundImage.src}
                    alt={study.reflection.quote.backgroundImage.alt}
                    className="w-full h-full object-cover opacity-10"
                  />
                </div>

                {/* Content overlay */}
                <div className="relative bg-foreground/95 px-8 md:px-16 py-14 md:py-20 text-center">
                  <p
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-background italic leading-snug max-w-3xl mx-auto"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {study.reflection.quote.text}
                  </p>
                  <p className="text-xs md:text-sm text-background/50 font-mono uppercase tracking-widest mt-8">
                    {study.reflection.quote.attribution}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ────── Navigation ────── */}
      <section className="py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Button variant="text" asChild>
            <Link to="/work">
              <ArrowLeft size={20} />
              Back to All Work
            </Link>
          </Button>
          {nextId && (
            <Button variant="ghost" asChild>
              <Link to={`/case-study/${nextId}`}>
                Next Project
                <ArrowRight size={20} />
              </Link>
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
