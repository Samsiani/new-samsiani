"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-[12vh] sm:py-[18vh]">
      {/* Scattered doodles */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-[10%] top-[20%] opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles size={64} className="text-[var(--c-fg)]" />
        </motion.div>
        <motion.div
          className="absolute right-[15%] bottom-[25%] opacity-10"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap size={48} className="text-[var(--c-fg)]" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <motion.h2
            className="text-[clamp(2rem,6vw,5rem)] font-black leading-[0.95] tracking-[-0.03em]"
            whileInView={{ rotate: [0, -0.5, 0.5, 0] }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            მოდით, ერთად{" "}
            <span className="scratchy-underline">შევქმნათ</span>{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <PenTool size={40} className="inline text-[var(--c-accent)]" />
            </motion.span>
          </motion.h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-md text-lg text-[var(--c-fg-muted)]">
            გაქვთ იდეა? ჩვენ ვიცით როგორ ვაქციოთ ის პიქსელებად, კოდად და ბიზნესად.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              მოგვწერეთ <ArrowRight size={16} className="inline" />
            </Button>
            <span className="text-sm text-[var(--c-fg-muted)]">ან</span>
            <a href="tel:+995555123456" className="link-underline text-sm font-semibold">
              დაგვირეკეთ →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
