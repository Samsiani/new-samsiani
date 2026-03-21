"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "words" | "chars";
  staggerDelay?: number;
  once?: boolean;
}

export function TextReveal({
  text,
  className,
  as: Tag = "h2",
  splitBy = "words",
  staggerDelay = 0.05,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const units = splitBy === "words" ? text.split(" ") : text.split("");

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={cn("flex flex-wrap", className)}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          className={unit === " " ? "inline" : "inline-block"}
          initial={unit === " " ? undefined : { opacity: 0, y: 30 }}
          animate={unit === " " ? undefined : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 })}
          transition={unit === " " ? undefined : {
            duration: 0.5,
            delay: i * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {unit === " " ? "\u00A0" : unit}
          {splitBy === "words" && i < units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
