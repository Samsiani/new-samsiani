"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Bot,
  Search,
  Headphones,
  Clock,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatsCounter } from "@/components/animations/StatsCounter";
import { Marquee } from "@/components/animations/Marquee";
import wpProjects from "@/data/wp/projects.json";

/* ─── Data ─────────────────────────────────────── */

const FOUNDED = 2015;
const portfolioCount = wpProjects.length;
const yearsExp = new Date().getFullYear() - FOUNDED;
const projectsDone = portfolioCount * 8 + 4;
const happyClients = Math.floor(portfolioCount * 7.5 + 3);

const projectImages: Record<string, string> = {
  "gn-ge": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  "tbc-corporate": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  "capex-credit": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  "autohub": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
};

const featured = [
  { name: "GN.ge — ონლაინ მაღაზია", slug: "gn-ge", cat: "E-Commerce", year: "2024" },
  { name: "TBC კორპორატიული", slug: "tbc-corporate", cat: "Corporate", year: "2024" },
  { name: "Capex Credit", slug: "capex-credit", cat: "Web App", year: "2023" },
  { name: "ავტოჰაბი", slug: "autohub", cat: "Web App", year: "2024" },
];

const services = [
  { icon: Code, name: "ვებ დეველოპმენტი", href: "/services/web/" },
  { icon: Bot, name: "AI ავტომატიზაცია", href: "/services/ai/" },
  { icon: Search, name: "SEO ოპტიმიზაცია", href: "/services/seo/" },
  { icon: Headphones, name: "ტექნიკური მხარდაჭერა", href: "/services/support/" },
];

const partners = [
  "TBC Bank", "Bank of Georgia", "Wissol", "Nikora", "Geocell",
  "Magti", "PSP", "GPI Holding", "m²", "Carrefour",
  "Tegeta", "Liberty Bank",
];

/* ─── Animations ───────────────────────────────── */

const cell = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* ─── Page ─────────────────────────────────────── */

export default function HomePage() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-28 pb-12 md:px-6 md:pt-32 md:pb-16">
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        {/* ── Hero ─────────────────────── col 1-3 */}
        <motion.div
          custom={0}
          variants={cell}
          className="glass rounded-[20px] p-8 md:p-12 lg:col-span-3 lg:p-14"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--c-fg-muted)]">
            ციფრული სააგენტო · 2015 წლიდან
          </span>
          <h1 className="mt-6 text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[1.05] tracking-[-0.03em]">
            ჩვენ ვქმნით
            <br />
            <span className="text-[var(--c-accent)]">ვებს.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--c-fg-muted)] md:text-lg">
            ვებ-საიტები, რომლებიც{" "}
            <span className="font-semibold text-[var(--c-fg)]">მუშაობს</span>,{" "}
            <span className="font-semibold text-[var(--c-fg)]">იყიდის</span>{" "}
            და{" "}
            <span className="font-semibold text-[var(--c-accent)]">ახარებს</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/portfolio/" size="lg">ნამუშევრები</Button>
            <Button href="/contact/" variant="outline" size="lg">
              მოგვწერეთ <ArrowRight size={16} className="inline" />
            </Button>
          </div>
        </motion.div>

        {/* ── Stats ────────────────────── col 4 */}
        <motion.div
          custom={1}
          variants={cell}
          className="glass flex flex-col justify-between gap-6 rounded-[20px] p-8"
        >
          {[
            { value: yearsExp, suffix: "+", label: "წლიანი გამოცდილება", icon: Clock },
            { value: projectsDone, suffix: "+", label: "დასრულებული პროექტი", icon: Target },
            { value: happyClients, suffix: "+", label: "კმაყოფილი კლიენტი", icon: Users },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <s.icon size={20} className="shrink-0 text-[var(--c-accent)]" />
              <StatsCounter
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                className="text-left [&>span]:text-3xl [&>span]:md:text-4xl [&>p]:text-[11px]"
              />
            </div>
          ))}
        </motion.div>

        {/* ── Portfolio (4 cards) ───────── 4 × col-1 */}
        {featured.map((p, i) => (
          <motion.div key={p.slug} custom={i + 2} variants={cell}>
            <Link href={`/portfolio/${p.slug}/`} className="group relative block overflow-hidden rounded-[20px]">
              <div className="aspect-[4/3] bg-[var(--c-bg2)]">
                <img
                  src={projectImages[p.slug] || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80"}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[30%] transition-[filter,transform] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/60">
                    {p.cat} · {p.year}
                  </p>
                  <h3 className="mt-0.5 text-sm font-semibold text-white md:text-base">{p.name}</h3>
                </div>
                <ArrowUpRight size={18} className="text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
            </Link>
          </motion.div>
        ))}

        {/* ── Services ─────────────────── col 1-2 */}
        <motion.div
          custom={6}
          variants={cell}
          className="glass rounded-[20px] p-8 md:col-span-2"
        >
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-xl font-bold tracking-tight md:text-2xl">სერვისები</h2>
            <Link href="/services/web/" className="text-xs font-medium text-[var(--c-accent)] transition-opacity hover:opacity-70">
              ყველა →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group flex items-center gap-4 border border-[var(--c-border)] bg-[var(--c-bg)]/40 p-4 transition-all duration-300 hover:border-[var(--c-accent)] hover:bg-[var(--c-accent)] hover:text-white rounded-xl"
              >
                <s.icon size={20} className="shrink-0 text-[var(--c-accent)] transition-colors group-hover:text-white" />
                <span className="text-sm font-semibold">{s.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── Blog ─────────────────────── col 3 */}
        <motion.div
          custom={7}
          variants={cell}
          className="glass rounded-[20px] overflow-hidden"
        >
          <Link href="/blog/web-trends-2024/" className="group block h-full">
            <div className="aspect-[16/10] overflow-hidden bg-[var(--c-bg2)]">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
                alt="ვებ ტრენდები"
                loading="lazy"
                className="h-full w-full object-cover grayscale-[30%] transition-[filter,transform] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            </div>
            <div className="p-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--c-accent)]">
                ბლოგი
              </span>
              <h3 className="mt-2 text-sm font-bold leading-snug transition-colors group-hover:text-[var(--c-accent)]">
                ვებ დეველოპმენტის ტრენდები 2024 წელს
              </h3>
            </div>
          </Link>
        </motion.div>

        {/* ── CTA ──────────────────────── col 4 */}
        <motion.div
          custom={8}
          variants={cell}
          className="flex flex-col items-start justify-center gap-5 rounded-[20px] bg-[var(--c-accent)] p-8 text-white"
        >
          <h2 className="text-2xl font-black leading-tight tracking-tight md:text-3xl">
            მოდით,<br />ერთად შევქმნათ.
          </h2>
          <p className="text-sm leading-relaxed text-white/70">
            გაქვთ იდეა? ვაქციოთ ის პიქსელებად, კოდად და ბიზნესად.
          </p>
          <Button href="/contact/" size="lg" className="bg-white text-[var(--c-accent)] hover:bg-white/90 border-none">
            დაგვიკავშირდით <ArrowRight size={16} className="inline" />
          </Button>
        </motion.div>

        {/* ── Partners Marquee ──────────── full width */}
        <motion.div
          custom={9}
          variants={cell}
          className="glass overflow-hidden rounded-[20px] py-5 lg:col-span-4 md:col-span-2"
        >
          <Marquee speed={35}>
            {partners.map((name) => (
              <span
                key={name}
                className="flex items-center gap-4 whitespace-nowrap text-sm font-semibold text-[var(--c-fg-muted)]/30"
              >
                {name}
                <span className="text-[var(--c-accent)] opacity-40">•</span>
              </span>
            ))}
          </Marquee>
        </motion.div>
      </motion.div>
    </section>
  );
}
