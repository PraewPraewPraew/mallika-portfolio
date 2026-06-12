import { cn } from "../../lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs md:text-sm rounded-full border border-muted text-muted uppercase tracking-wider",
        "font-mono",
        className
      )}
    >
      {children}
    </span>
  );
}
