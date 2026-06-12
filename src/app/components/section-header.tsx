import { cn } from "../../lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2 md:space-y-4", className)}>
      {label && (
        <p className="text-xs md:text-sm text-muted uppercase tracking-widest font-mono">
          {label}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg lg:text-xl text-muted max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
