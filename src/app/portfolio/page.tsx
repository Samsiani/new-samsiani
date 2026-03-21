"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FilterBar } from "@/components/ui/FilterBar";
import { Pagination } from "@/components/ui/Pagination";
import wpProjects from "@/data/wp/projects.json";
import wpCategories from "@/data/wp/categories.json";

const CATEGORIES = [
  { value: "all", label: "ყველა" },
  ...wpCategories.portfolio,
];

const PROJECTS = wpProjects.map((p: any) => ({
  name: p.name,
  slug: p.slug,
  category: p.category || "",
  year: p.year ? Number(p.year) : 0,
}));

const PROJECT_IMAGES: Record<string, string> = {
  "gn-ge": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  "tbc-corporate": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  "capex-credit": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  "maistori": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  "autohub": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
  "pharmadepo": "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
  "metro-blog": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  "smart-home": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
  "dazghveva": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  "creative-hub": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  "techno-market": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
  "finance-portal": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
};

const ITEMS_PER_PAGE = 4;

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-44 md:pb-28">
        <span
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[10rem] font-black leading-none tracking-tighter text-[var(--c-fg)] opacity-[0.03] sm:text-[20rem] md:text-[28rem]"
          aria-hidden="true"
        >
          300+
        </span>
        <div className="relative mx-auto max-w-7xl text-center">
          <TextReveal
            text="პორტფოლიო"
            as="h1"
            className="justify-center text-3xl font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
          />
          <ScrollReveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--c-fg-muted)]">
              ჩვენი გუნდის მიერ შექმნილი პროექტები, რომლებიც ბიზნესებს ეხმარება ზრდაში
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <FilterBar
              options={CATEGORIES}
              defaultValue="all"
              onFilterChange={handleFilterChange}
              className="mb-12 justify-center"
            />
          </ScrollReveal>

          {/* Masonry Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {paginated.map((project, i) => {
                const isWide = i % 3 === 0;
                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={isWide ? "sm:col-span-2" : ""}
                  >
                    <Link href={`/portfolio/${project.slug}`} className="group block">
                      <div
                        className={`relative overflow-hidden rounded-2xl bg-[var(--c-bg2)] ${
                          isWide ? "aspect-[16/9]" : "aspect-[4/5]"
                        }`}
                      >
                        <img
                          src={PROJECT_IMAGES[project.slug] || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80"}
                          alt={project.name}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover grayscale-[30%] transition-[filter] duration-500 group-hover:grayscale-0"
                        />
                        {/* Bottom gradient */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/5 bg-gradient-to-t from-black/70 to-transparent" />

                        {/* Project info */}
                        <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-6">
                          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                            {CATEGORIES.find((c) => c.value === project.category)?.label || project.category || "პროექტი"}{project.year ? ` \u00B7 ${project.year}` : ""}
                          </p>
                          <h3 className="mt-1 text-xl font-bold text-white">{project.name}</h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            className="mt-16"
          />
        </div>
      </section>
    </>
  );
}
