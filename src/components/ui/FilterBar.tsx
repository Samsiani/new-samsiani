"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  options: FilterOption[];
  defaultValue?: string;
  onFilterChange?: (value: string) => void;
  className?: string;
}

export function FilterBar({ options, defaultValue, onFilterChange, className }: FilterBarProps) {
  const [active, setActive] = useState(defaultValue || options[0]?.value);

  const handleClick = (value: string) => {
    setActive(value);
    onFilterChange?.(value);
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="group" aria-label="Filter">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => handleClick(opt.value)}
          className={cn(
            "relative rounded-full px-5 py-2 text-sm font-medium transition-colors cursor-pointer",
            active === opt.value
              ? "text-white"
              : "text-[var(--c-fg-muted)] hover:text-[var(--c-fg)]"
          )}
        >
          {active === opt.value && (
            <motion.div
              layoutId="filter-pill"
              className="absolute inset-0 rounded-full bg-[var(--c-accent)]"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
