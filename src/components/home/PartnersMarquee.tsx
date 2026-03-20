"use client";

import { Marquee } from "@/components/animations/Marquee";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const partners = [
  "TBC Bank", "Bank of Georgia", "Wissol", "Nikora", "Geocell",
  "Magti", "PSP", "GPI Holding", "m²", "Carrefour",
  "Tegeta", "Liberty Bank",
];

export function PartnersMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--c-border)] py-8">
      {/* Doodle star */}
      <motion.span
        className="absolute right-8 top-2 text-xl text-[var(--c-accent)] opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Star size={18} className="text-[var(--c-accent)]" />
      </motion.span>
      <Marquee speed={35}>
        {partners.map((name) => (
          <span
            key={name}
            className="flex items-center gap-4 whitespace-nowrap text-base font-semibold text-[var(--c-fg-muted)]/30"
          >
            {name}
            <span className="text-[var(--c-accent)] opacity-40">•</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
