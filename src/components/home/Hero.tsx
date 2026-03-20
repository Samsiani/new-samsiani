"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowRight } from "lucide-react";

const words = ["ჩვენ", "ვქმნით", "ვებს."];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Scattered decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Sketchy circle */}
        <motion.div
          className="absolute left-[8%] top-[15%] h-32 w-32 rounded-full border-2 border-dashed border-[var(--c-accent)]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        {/* Floating asterisk */}
        <motion.span
          className="absolute right-[12%] top-[20%] text-6xl font-black text-[var(--c-accent)]/10"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          *
        </motion.span>
        {/* Squiggly line */}
        <svg className="absolute bottom-[25%] left-[5%] w-40 text-[var(--c-border)]" viewBox="0 0 200 30" fill="none">
          <path d="M0 15C20 5 40 25 60 15C80 5 100 25 120 15C140 5 160 25 180 15C190 10 200 15 200 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        {/* Arrow doodle */}
        <motion.svg
          className="absolute right-[8%] bottom-[30%] w-20 text-[var(--c-fg-muted)]/15"
          viewBox="0 0 80 80"
          fill="none"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M10 70C20 40 40 20 70 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M55 10L70 15L60 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Playful overline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-block"
        >
          <span className="sketch-border-accent inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] sm:px-5 sm:py-2 sm:tracking-[0.2em] text-[var(--c-accent)]">
            ციფრული სააგენტო · 2009 წლიდან
          </span>
        </motion.div>

        {/* Main heading — word by word with playful delays */}
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-[1.25] sm:leading-[1.15] tracking-[-0.02em]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="mr-[0.2em] inline-block last:mr-0"
              initial={{ y: 80, opacity: 0, rotate: i % 2 === 0 ? -4 : 4 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{
                delay: 0.3 + i * 0.15,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {i === 2 ? (
                <>
                  <span className="scratchy-underline">{word}</span>
                </>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle with personality */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-md text-lg leading-relaxed text-[var(--c-fg-muted)]"
        >
          ვებ-საიტები, რომლებიც{" "}
          <span className="glitch-hover font-semibold text-[var(--c-fg)]">მუშაობს</span>,{" "}
          <span className="hover-wiggle inline-block font-semibold text-[var(--c-fg)]">იყიდის</span>{" "}
          და{" "}
          <motion.span
            className="inline-block font-semibold text-[var(--c-accent)]"
            whileHover={{ scale: 1.1, rotate: -2 }}
          >
            ახარებს
          </motion.span>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <Button href="/portfolio" size="lg">
            ნამუშევრები
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            მოგვწერეთ <ArrowRight size={16} className="inline" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll down — bouncy */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex cursor-pointer flex-col items-center gap-2 border-none bg-transparent"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--c-fg-muted)]">
            ჩამოსქროლე
          </span>
          <ArrowDown size={16} className="text-[var(--c-accent)]" />
        </motion.button>
      </motion.div>
    </section>
  );
}
