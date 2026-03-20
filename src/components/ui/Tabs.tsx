"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  value: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Tabs({ tabs, defaultValue, onChange, className }: TabsProps) {
  const [active, setActive] = useState(defaultValue || tabs[0]?.value);

  const handleClick = (value: string) => {
    setActive(value);
    onChange?.(value);
  };

  return (
    <div className={cn("flex gap-1 overflow-x-auto border-b border-[var(--c-border)]", className)} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={active === tab.value}
          onClick={() => handleClick(tab.value)}
          className={cn(
            "relative shrink-0 whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors cursor-pointer",
            active === tab.value
              ? "text-[var(--c-accent)]"
              : "text-[var(--c-fg-muted)] hover:text-[var(--c-fg)]"
          )}
        >
          {tab.label}
          {active === tab.value && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--c-accent)]"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
