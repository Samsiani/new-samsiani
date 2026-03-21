"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const variants = {
  filled:
    "bg-[var(--c-accent)] text-white hover:bg-[var(--c-accent-hover)] border border-transparent",
  outline:
    "bg-transparent text-[var(--c-fg)] border border-[var(--c-border)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]",
  ghost:
    "bg-transparent text-[var(--c-fg)] hover:bg-[var(--c-bg2)] border border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "filled", size = "md", href, children, ...props }, ref) => {
    const classes = cn(
      "group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c-accent)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
          <span className="absolute inset-0 -translate-y-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-y-0" />
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
        <span className="absolute inset-0 -translate-y-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-y-0" />
      </button>
    );
  }
);

Button.displayName = "Button";
