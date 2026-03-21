"use client";

import { Sparkles, Zap, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-[12vh] sm:py-[18vh]">
      {/* Static decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] opacity-10">
          <Sparkles size={64} className="text-[var(--c-fg)]" />
        </div>
        <div className="absolute right-[15%] bottom-[25%] opacity-10">
          <Zap size={48} className="text-[var(--c-fg)]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,6vw,5rem)] font-black leading-[0.95] tracking-[-0.03em]">
            მოდით, ერთად{" "}
            <span className="scratchy-underline">შევქმნათ</span>{" "}
            <span className="inline-block">
              <PenTool size={40} className="inline text-[var(--c-accent)]" />
            </span>
          </h2>
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
            <a href="tel:+995555123456" className="text-sm font-semibold transition-colors hover:text-[var(--c-accent)]">
              დაგვირეკეთ →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
