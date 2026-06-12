import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { Link } from "react-router";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "text";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, asChild, href, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 transition-all duration-300 rounded-full",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      {
        // Variant styles
        "bg-foreground text-background hover:bg-accent hover:text-foreground":
          variant === "primary",
        "border border-foreground text-foreground hover:bg-foreground hover:text-background":
          variant === "ghost",
        "text-foreground hover:text-muted underline-offset-4 hover:underline":
          variant === "text",
        
        // Size styles
        "px-6 py-3 text-sm md:text-base": size === "md",
        "px-4 py-2 text-sm": size === "sm",
        "px-8 py-4 text-base md:text-lg": size === "lg",
      },
      className
    );

    if (asChild && href) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";