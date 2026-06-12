import { Link } from "react-router";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../components/button";
import { Tag } from "../components/tag";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ──────────────────────────── data ──────────────────────────── */

const tags = ["E-Commerce", "Web", "UX Strategy", "Responsive"];

const decisionRows = [
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
];

/* ──────────────────────────── helpers ──────────────────────────── */

function Placeholder({
  label,
  className = "",
  aspect = "aspect-[16/9]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} bg-[#EDEAE6] rounded-lg border border-border flex items-center justify-center ${className}`}
    >
      <span className="text-xs md:text-sm text-muted font-mono tracking-wider uppercase">
        {label}
      </span>
    </div>
  );
}

/* ──────────────────────────── page ──────────────────────────── */

export function CaseStudyEcommerce() {
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

      {/* ────── 1 · HOOK — PROJECT OVERVIEW ────── */}
      <section className="py-16 md:py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs md:text-sm text-muted uppercase tracking-widest font-mono mb-4">
              Case Study
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Designing Without a Safety Net — UX for E-Commerce Under Real-World Constraints
            </h1>
            <div className="max-w-3xl space-y-4">
              <p className="text-base md:text-lg lg:text-xl text-muted leading-relaxed">
                This project involved designing the UX for an E-Commerce platform where business requirements drove every decision — no user interviews, no usability testing, and tight technical limitations from the backend team.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-muted leading-relaxed">
                The challenge wasn't just designing good flows. It was knowing when to push back, when to adapt, and how to advocate for the end user when their voice wasn't in the room.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((t) => (
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
              src="https://images.unsplash.com/photo-1760376208569-e1b82e1ae494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjB1eCUyMGRlc2lnbiUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NzMwNDc5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wireframe and user flow overview"
              className="w-full aspect-[16/8] object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ────── 2 · THE CHALLENGE — CONTEXT & CONSTRAINTS ────── */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs md:text-sm text-muted uppercase tracking-widest font-mono mb-3">
              01 — The Challenge
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Business Needs First. But Users Still Matter.
            </h2>
            <div className="max-w-3xl space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Requirements came entirely from the client's business goals — increase conversion, streamline the purchase flow, and support backend logic that couldn't be changed. There was no direct access to end users, no existing data, and no room for extensive iteration.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                My role was to bridge that gap: working alongside the BA to interpret business requirements, advising the client on UX implications they hadn't considered, and collaborating with backend developers to understand what was technically possible before committing to any design direction.
              </p>
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
              src="https://images.unsplash.com/photo-1666148670142-2f01b117e6e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGRpYWdyYW0lMjBidXNpbmVzcyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzczMDQ3OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workflow diagram showing Client to BA to UX to Developer"
              className="w-full aspect-[16/9] object-cover rounded-lg"
            />
            <p className="text-xs text-muted text-center uppercase tracking-widest font-mono mt-4">
              Collaboration Model: Client → BA → UX (Me) → Dev
            </p>
          </motion.div>
        </div>
      </section>

      {/* ────── 3 · MY APPROACH — UX THINKING WITHOUT USER DATA ────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs md:text-sm text-muted uppercase tracking-widest font-mono mb-3">
              02 — My Approach
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              No User Research? Design From First Principles.
            </h2>
            <div className="max-w-3xl space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Without user interviews, I relied on UX heuristics, e-commerce best practices, and logical inference from business requirements to shape design decisions. Every assumption was made explicit — and every flow was designed to reduce friction based on what we know about how people shop online.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                For example, when the client required users to log in via LINE and complete personal details (name, surname, email) before placing an order, I flagged the risk of drop-offs at this critical step. I worked with the client to identify which fields were truly necessary upfront, then proposed pre-filling data from the LINE profile — so users only needed to verify, not re-enter —  their information, reducing cognitive load and returning them to the checkout flow as quickly as possible.
              </p>
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
                src="https://images.unsplash.com/photo-1605606582211-088f336964ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0YWJsZSUyMHJlcXVpcmVtZW50cyUyMGRvY3VtZW50YXRpb258ZW58MXx8fHwxNzczMDQ3OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Design requirements documentation"
                className="w-full aspect-[16/9] object-cover rounded-lg opacity-30"
              />
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr>
                    {[
                      "Business Requirement",
                      "UX Assumption",
                      "Design Decision",
                    ].map((h) => (
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
                  {decisionRows.map((row, i) => (
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

      {/* ────── 4 · SOLUTION — FEATURE WALKTHROUGHS ────── */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs md:text-sm text-muted uppercase tracking-widest font-mono mb-3">
              03 — Solution
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              From Requirements to Real Flows — Key Features That Shaped the Experience
            </h2>
            <div className="max-w-3xl space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Three features defined the core UX challenge of this project: the product discovery flow, the checkout process, and the order management experience. Each required balancing what the business wanted to show with what a user would actually need to do.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Below is a walkthrough of how each feature was approached — from the initial requirement, through the design decisions made, to the final wireframe output. Annotations highlight not just what was designed, but why.
              </p>
            </div>
          </motion.div>

          {/* Feature walkthroughs */}
          <div className="space-y-12 md:space-y-16 mt-12 md:mt-16">
            {/* Feature 1: Product Discovery */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-xl border border-border overflow-hidden"
            >
              <div className="p-6 md:p-8 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded bg-accent flex items-center justify-center text-xs font-mono text-foreground">
                    01
                  </span>
                  <h3
                    className="text-xl md:text-2xl"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Product Discovery Flow
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  Users need to find products quickly using filters that match their mental model. Backend constraints limited results to 50 items per query.
                </p>
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1647032713701-a80d2b69e502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZmxvdyUyMGRpYWdyYW0lMjBhbm5vdGF0ZWR8ZW58MXx8fHwxNzczMDQ3OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Annotated user flow for product discovery"
                className="w-full aspect-[16/9] object-cover"
              />
            </motion.div>

            {/* Feature 2: Checkout Process */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background rounded-xl border border-border overflow-hidden"
            >
              <div className="p-6 md:p-8 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded bg-accent flex items-center justify-center text-xs font-mono text-foreground">
                    02
                  </span>
                  <h3
                    className="text-xl md:text-2xl"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Streamlined Checkout Process
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  Client wanted a 4-step checkout. I proposed a single-page flow that reduced friction while maintaining all required data collection points.
                </p>
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760376208569-e1b82e1ae494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjB1eCUyMGRlc2lnbiUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NzMwNDc5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Annotated wireframe for checkout flow"
                className="w-full aspect-[16/9] object-cover"
              />
            </motion.div>

            {/* Feature 3: Order Management */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background rounded-xl border border-border overflow-hidden"
            >
              <div className="p-6 md:p-8 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded bg-accent flex items-center justify-center text-xs font-mono text-foreground">
                    03
                  </span>
                  <h3
                    className="text-xl md:text-2xl"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Order Management Experience
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  Post-purchase tracking needed to be simple and reassuring. Designed a progressive disclosure pattern that shows just enough detail without overwhelming.
                </p>
              </div>
              <div className="aspect-[16/9] bg-[#EDEAE6] flex items-center justify-center">
                <span className="text-xs md:text-sm text-muted font-mono tracking-wider uppercase">
                  Order tracking wireframe + annotations
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────── 5 · COLLABORATION HIGHLIGHT ────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs md:text-sm text-muted uppercase tracking-widest font-mono mb-3">
              04 — Collaboration Highlight
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The Design Isn't Just What You See — It's What You Convinced Others to Change.
            </h2>
            <div className="max-w-3xl space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                One of the most impactful moments in this project was advising the client to restructure a flow they had already approved. The original design followed their internal process logic — but created an unnecessary detour for the end user. After mapping out the impact with a revised flow diagram, the client aligned with the updated approach.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Working closely with backend developers also shaped several decisions. Rather than designing an ideal flow and handing it over, constraints were surfaced early — allowing the design to account for technical limitations without compromising the core user experience.
              </p>
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
                  Before & After: Product Listing Flow
                </h3>
                <p className="text-sm md:text-base text-muted text-center">
                  Showing how user feedback influenced the final design direction
                </p>
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1703756883093-301a1cb45603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBjb21wYXJpc29uJTIwYmVmb3JlJTIwYWZ0ZXJ8ZW58MXx8fHwxNzczMDQ3OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Before and after comparison of design flows"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────── 6 · REFLECTION — WHAT I LEARNED ────── */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs md:text-sm text-muted uppercase tracking-widest font-mono mb-3">
              05 — Reflection
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Constraints Don't Block Good UX. They Define It.
            </h2>
            <div className="max-w-3xl space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                This project reinforced that UX design rarely happens in ideal conditions — and that's not a problem to solve, it's a reality to design within. The ability to advocate for the user using business language, and to find the best possible experience within technical boundaries, is where UX impact actually lives.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                If I were to revisit this project, I would push for at least lightweight user validation — even a 5-person usability test — to pressure-test assumptions made from business requirements alone. Good design under constraints is still good design. But validated design is better.
              </p>
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
                  src="https://images.unsplash.com/photo-1605290994680-779e10fff203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdHlwb2dyYXBoeSUyMHF1b3RlJTIwZGVzaWdufGVufDF8fHx8MTc3MzA0Nzk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Minimal typography background"
                  className="w-full h-full object-cover opacity-10"
                />
              </div>
              
              {/* Content overlay */}
              <div className="relative bg-foreground/95 px-8 md:px-16 py-14 md:py-20 text-center">
                <p
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-background italic leading-snug max-w-3xl mx-auto"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  "Constraints don't block good UX. They define it."
                </p>
                <p className="text-xs md:text-sm text-background/50 font-mono uppercase tracking-widest mt-8">
                  — Key takeaway
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ────── Navigation ────── */}
      <section className="py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Button variant="text" asChild>
            <Link to="/work">
              <ArrowLeft size={20} />
              Back to All Work
            </Link>
          </Button>
          <Button variant="ghost" asChild>
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