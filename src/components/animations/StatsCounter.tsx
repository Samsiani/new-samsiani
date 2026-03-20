"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  duration?: number;
}

export function StatsCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  className,
  duration = 2,
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplayValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, duration, motionValue]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <motion.span
        className="text-5xl font-black tracking-tight md:text-6xl"
        style={{ color: "var(--c-accent)" }}
      >
        {prefix}
        {displayValue}
        {suffix}
      </motion.span>
      <p className="mt-2 text-sm uppercase tracking-widest" style={{ color: "var(--c-fg-muted)" }}>
        {label}
      </p>
    </div>
  );
}
