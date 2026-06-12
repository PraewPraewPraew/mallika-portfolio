import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tag } from "./tag";
import { cn } from "../../lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  className?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  category,
  tags,
  image,
  className,
}: ProjectCardProps) {
  return (
    <Link to={`/case-study/${id}`} className={cn("group block", className)}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-lg mb-4 md:mb-6 aspect-[4/3] bg-card">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
          
          {/* Hover Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={20} className="text-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2 md:space-y-3">
          <p className="text-xs md:text-sm text-muted uppercase tracking-widest font-mono">
            {category}
          </p>
          <h3
            className="text-xl md:text-2xl lg:text-3xl group-hover:text-muted transition-colors"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {title}
          </h3>
          <p className="text-sm md:text-base text-muted line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
