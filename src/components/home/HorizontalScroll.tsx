"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projectImages: Record<string, string> = {
  "gn-ge": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  "tbc-corporate": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  "wine-ge": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80",
  "capex-credit": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  "geoland-tourism": "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80",
  "medicare-portal": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
};

const featuredProjects = [
  { name: "GN.ge — ონლაინ მაღაზია", slug: "gn-ge", category: "E-Commerce", year: "2024" },
  { name: "TBC კორპორატიული", slug: "tbc-corporate", category: "Corporate", year: "2023" },
  { name: "Wine.ge — მარკეტპლეისი", slug: "wine-ge", category: "E-Commerce", year: "2023" },
  { name: "Capex Credit", slug: "capex-credit", category: "Web App", year: "2024" },
  { name: "გეოლენდი — ტურიზმი", slug: "geoland-tourism", category: "Landing", year: "2022" },
  { name: "MediCare პორტალი", slug: "medicare-portal", category: "Portal", year: "2023" },
];

export function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-[var(--c-fg-muted)]">
            01 — გამორჩეული პროექტები
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 pl-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group relative block w-[80vw] shrink-0 sm:w-[60vw] md:w-[45vw]"
              data-cursor="ნახვა"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--c-bg2)]">
                <img src={projectImages[project.slug]} alt={project.name} loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition-[filter] duration-500 group-hover:grayscale-0" />
                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" />
                {/* Project info on gradient */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 sm:flex-row sm:items-end sm:justify-between sm:p-5 md:p-6">
                  <h3 className="text-base font-semibold text-white sm:text-lg">{project.name}</h3>
                  <span className="text-xs text-white/70">
                    {project.category} · {project.year}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
