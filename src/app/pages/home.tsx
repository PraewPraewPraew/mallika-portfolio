import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../components/button";
import { ProjectCard } from "../components/project-card";
import { SectionHeader } from "../components/section-header";
import { projects } from "../data/projects";

export function Home() {
  const featuredProjects = projects.filter(
    (project) => project.published && project.featured
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full">
                <Sparkles size={16} className="text-foreground" />
                <span className="text-xs md:text-sm font-mono">
                  Available for new projects
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Crafting digital experiences that{" "}
                <span className="italic">matter</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-muted max-w-xl">
                I'm Mallika, a UX/UI designer specializing in creating
                thoughtful, user-centered digital products. From research to
                pixel-perfect interfaces, I bring ideas to life.
              </p>

              <div className="flex flex-row items-center gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link to="/work" className="inline-flex items-center gap-2">
                    View My Work
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <p
                  className="text-3xl md:text-4xl lg:text-5xl mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  50+
                </p>
                <p className="text-sm md:text-base text-muted">
                  Projects Completed
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <p
                  className="text-3xl md:text-4xl lg:text-5xl mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  8+
                </p>
                <p className="text-sm md:text-base text-muted">
                  Years Experience
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <p
                  className="text-3xl md:text-4xl lg:text-5xl mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  30+
                </p>
                <p className="text-sm md:text-base text-muted">
                  Happy Clients
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <p
                  className="text-3xl md:text-4xl lg:text-5xl mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  1,000+
                </p>
                <p className="text-sm md:text-base text-muted">
                  Happy User
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Featured Work"
            title="Selected Projects"
            description="A showcase of my recent work across mobile apps, web platforms, and design systems."
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12 md:mt-16">
            <Button variant="ghost" size="lg" asChild>
              <Link to="/work" className="inline-flex items-center gap-2">
                View All Projects
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                label="About Me"
                title="Design is about solving problems, not just making things pretty"
                description="With 8+ years of experience in UX/UI design, I've had the privilege of working with startups, agencies, and Fortune 500 companies to create digital products that users love."
              />
              <div className="mt-8">
                <Button variant="primary" size="md" asChild>
                  <Link to="/about" className="inline-flex items-center gap-2">
                    More About Me
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 md:space-y-6"
            >
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <h3
                  className="text-xl md:text-2xl mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  My Approach
                </h3>
                <p className="text-sm md:text-base text-muted">
                  I believe in a human-centered design process that starts with
                  deep user research and ends with delightful, accessible
                  experiences.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <h3
                  className="text-xl md:text-2xl mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Collaboration
                </h3>
                <p className="text-sm md:text-base text-muted">
                  I work closely with developers, product managers, and
                  stakeholders to ensure designs are not only beautiful but also
                  technically feasible and aligned with business goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Let's work together to create impactful designs
            </h2>
            <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <Button
              variant="primary"
              size="lg"
              asChild
              className="bg-accent text-foreground hover:bg-accent/90"
            >
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}