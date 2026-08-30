import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "../components/project-card";
import { SectionHeader } from "../components/section-header";
import { cn } from "../../lib/utils";
import { projects } from "../data/projects";

const filters = ["All", "App", "Web", "Design System"];

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const publishedProjects = projects.filter((project) => project.published);

  const filteredProjects =
    activeFilter === "All"
      ? publishedProjects
      : publishedProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Portfolio"
          title="My Work"
          description="A collection of projects showcasing my approach to user-centered design, from initial research to final implementation."
          className="mb-12 md:mb-16"
        />

        <div className="flex flex-wrap gap-3 md:gap-4 mb-12 md:mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base transition-all duration-300 font-mono uppercase tracking-wider",
                activeFilter === filter
                  ? "bg-foreground text-background"
                  : "bg-card border border-border text-muted hover:border-foreground hover:text-foreground"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 md:py-24">
            <p className="text-lg md:text-xl text-muted">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}