"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Search, Headphones, Palette, Smartphone, Megaphone } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const services = [
  { num: "01", name: "ვებ დეველოპმენტი", desc: "საიტები, რომლებიც ჩქარია — ისევე, როგორც შენი იდეა", href: "/services/web", icon: Code },
  { num: "02", name: "SEO ოპტიმიზაცია", desc: "Google-ი გიყვარდეს — Google-მაც შეგიყვაროს", href: "/services/seo", icon: Search },
  { num: "03", name: "ტექნიკური მხარდაჭერა", desc: "ძილიც მშვიდად — ჩვენ ვუყურებთ სერვერს", href: "/services/support", icon: Headphones },
  { num: "04", name: "UI/UX დიზაინი", desc: "ლამაზი რომ არის — კარგია. მოსახერხებელი რომ არის — უკეთესია", href: "/services/web", icon: Palette },
  { num: "05", name: "მობილური აპები", desc: "ჯიბეში ჩასადები ბიზნესი", href: "/services/web", icon: Smartphone },
  { num: "06", name: "ციფრული მარკეტინგი", desc: "რომ გესმოდეთ ინტერნეტის ენა", href: "/services/seo", icon: Megaphone },
];

export function ServiceRows() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-[10vh] sm:py-[15vh]">
      <ScrollReveal>
        <div className="mb-16 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--c-fg-muted)]">
              02 — რას ვაკეთებთ
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              ყველაფერი, რაც <span className="scratchy-underline">ციფრულია</span>
            </h2>
          </div>
          <motion.div
            className="hidden md:block"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Palette size={40} className="text-[var(--c-accent)] opacity-30" />
          </motion.div>
        </div>
      </ScrollReveal>

      <div className="border-t border-[var(--c-border)]">
        {services.map((service, i) => (
          <ScrollReveal key={service.num} delay={i * 0.04}>
            <Link
              href={service.href}
              className="group relative flex items-center gap-5 border-b border-[var(--c-border)] py-6 md:py-8"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hover bg */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-[var(--c-accent)]"
                initial={false}
                animate={{ scaleY: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.77, 0, 0.175, 1] }}
                style={{ originY: 1 }}
              />

              <service.icon
                size={22}
                className={`relative z-10 shrink-0 transition-colors duration-300 ${hovered === i ? "text-white" : "text-[var(--c-accent)]"}`}
              />

              <h3 className={`relative z-10 flex-1 text-xl font-bold tracking-tight transition-all duration-300 md:text-2xl lg:text-3xl ${
                hovered === i ? "translate-x-2 text-white" : hovered !== null ? "opacity-40" : ""
              }`}>
                {service.name}
              </h3>

              <p className={`relative z-10 hidden max-w-xs text-sm leading-relaxed transition-colors duration-300 lg:block ${
                hovered === i ? "text-white/80" : "text-[var(--c-fg-muted)]"
              }`}>
                {service.desc}
              </p>

              <ArrowUpRight
                size={20}
                className={`relative z-10 shrink-0 transition-all duration-300 ${
                  hovered === i ? "translate-x-1 -translate-y-1 text-white" : "text-[var(--c-fg-muted)]"
                }`}
              />
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
