"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Target, Users } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StatsCounter } from "@/components/animations/StatsCounter";

export function SplitSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative mx-auto max-w-7xl overflow-hidden px-6 py-[12vh] sm:py-[18vh]">
      {/* Background doodle */}
      <svg className="pointer-events-none absolute right-[5%] top-[10%] w-48 text-[var(--c-border)] opacity-50" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
        <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-24">
        {/* Left */}
        <ScrollReveal direction="left">
          <div>
            <motion.div style={{ y: textY }}>
              <span className="text-[clamp(6rem,15vw,14rem)] font-black leading-[0.85] tracking-[-0.04em]">
                <span
                  style={{
                    WebkitTextStroke: "1.5px var(--c-fg)",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  20
                </span>
                <span className="text-[var(--c-accent)]">09</span>
              </span>
            </motion.div>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--c-fg-muted)]">
              მას შემდეგ, რაც ჩვენმა დამფუძნებელმა პირველი ვებსაიტი Notepad-ში დაწერა,{" "}
              <span className="font-semibold text-[var(--c-fg)]">ბევრი რამ შეიცვალა</span> —
              მაგრამ ვებისადმი სიყვარული იგივე დარჩა.
            </p>
          </div>
        </ScrollReveal>

        {/* Right — Stats with sketchy borders */}
        <div className="space-y-10">
          {[
            { value: 15, suffix: "+", label: "წლიანი გამოცდილება", icon: Clock },
            { value: 300, suffix: "+", label: "დასრულებული პროექტი", icon: Target },
            { value: 150, suffix: "+", label: "კმაყოფილი კლიენტი", icon: Users },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={0.12 * i} direction="right">
              <motion.div
                className="flex items-center gap-5 rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6"
                whileHover={{ rotate: i % 2 === 0 ? 1 : -1, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon size={28} className="shrink-0 text-[var(--c-accent)]" />
                <StatsCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  className="text-left"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
