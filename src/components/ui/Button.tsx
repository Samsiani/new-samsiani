"use client";

import { forwardRef, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  magnetic?: boolean;
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
  ({ className, variant = "filled", size = "md", href, magnetic = true, children, ...props }, ref) => {
    const btnRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!magnetic || !btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.15);
      y.set((e.clientY - centerY) * 0.15);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const classes = cn(
      "group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c-accent)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
      variants[variant],
      sizes[size],
      className
    );

    const inner = (
      <motion.div
        ref={btnRef}
        className="inline-flex"
        style={{ x, y }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {href ? (
          <Link href={href} className={classes}>
            <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
            <span className="absolute inset-0 -translate-y-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-y-0" />
          </Link>
        ) : (
          <button ref={ref} className={classes} {...props}>
            <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
            <span className="absolute inset-0 -translate-y-full bg-white/20 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-y-0" />
          </button>
        )}
      </motion.div>
    );

    return inner;
  }
);

Button.displayName = "Button";
