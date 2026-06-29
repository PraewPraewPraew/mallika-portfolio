import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "../components/project-card";
import { SectionHeader } from "../components/section-header";
import { cn } from "../../lib/utils";

const allProjects = [
  {
    id: "smart-living",
    title: "Smart Living - Admin Portal",
    description: "Admin Portal for managing and monitoring Solar Roof devices with real-time status tracking and data visualization.",
    category: "Web",
    tags: ["SaaS", "Dashboard", "Data Visual"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "freshcart-ecommerce",
    title: "FreshCart E-Commerce",
    description: "Rethinking the online grocery experience with streamlined checkout, smart search, and data-driven design decisions.",
    category: "Web",
    tags: ["E-Commerce", "Web", "UX Strategy"],
    image: "https://images.unsplash.com/photo-1764194790147-8a1e47a91a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZSUyMGNsZWFufGVufDF8fHx8MTc3MzA0NjgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "lego-design-system",
    title: "Building Blocks Design System",
    description: "Building a token-first design system from scratch where brand identity was evolving and deadlines weren't waiting.",
    category: "Design System",
    tags: ["Tokens", "Components", "Documentation"],
    image: "https://images.unsplash.com/photo-1724745523036-bfceadebcd50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdvJTIwYmxvY2tzJTIwY29sb3JmdWwlMjBkZXNpZ24lMjBzeXN0ZW18ZW58MXx8fHwxNzczMjIzMjc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "nova-banking",
    title: "Nova Banking",
    description: "Reimagining digital banking for Gen Z with a focus on financial literacy and gamification.",
    category: "App",
    tags: ["Mobile", "Fintech", "UX Research"],
    image: "https://images.unsplash.com/photo-1660732106134-f3009a1e90ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3MjA2MTA0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const filters = ["All", "App", "Web", "Design System"];

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

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