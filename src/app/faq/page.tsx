"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Tabs } from "@/components/ui/Tabs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import wpFaqs from "@/data/wp/faqs.json";
import wpCategories from "@/data/wp/categories.json";

interface FaqItem {
  id: number;
  title: string;
  content: string;
  category: string;
}

const faqItems: FaqItem[] = wpFaqs;

const categoryTabs = [
  { value: "all", label: "ყველა" },
  ...wpCategories.faq,
];

export default function FaqPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="mx-auto max-w-7xl">
          <TextReveal
            text="ხშირად დასმული კითხვები"
            as="h1"
            splitBy="chars"
            className="text-3xl font-black tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
          />
        </div>
      </section>

      {/* Search + Tabs + Accordion */}
      <section className="py-10 px-6">
        <div className="mx-auto max-w-3xl">
          {/* Search */}
          <ScrollReveal>
            <div className="relative mb-10">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--c-fg-muted)]"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="მოძებნეთ კითხვა..."
                className="w-full rounded-full border border-[var(--c-border)] bg-[var(--c-surface)] py-3 pl-11 pr-4 text-[16px] text-[var(--c-fg)] placeholder:text-[var(--c-fg-muted)] outline-none transition-colors focus:border-[var(--c-accent)] form-input-hover"
              />
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          <ScrollReveal delay={0.1}>
            <Tabs
              tabs={categoryTabs}
              defaultValue="all"
              onChange={(v) => setActiveCategory(v)}
              className="mb-8"
            />
          </ScrollReveal>

          {/* FAQ List */}
          <ScrollReveal delay={0.2}>
            {filtered.length > 0 ? (
              <Accordion items={filtered} />
            ) : (
              <p className="py-12 text-center text-[var(--c-fg-muted)]">
                კითხვა ვერ მოიძებნა. სცადეთ სხვა საძიებო სიტყვა.
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <TextReveal
            text="ვერ იპოვეთ პასუხი?"
            as="h2"
            className="justify-center text-2xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          />
          <ScrollReveal delay={0.3}>
            <p className="mt-4 text-[var(--c-fg-muted)]">
              დაგვიკავშირდით და ჩვენი გუნდი სიამოვნებით უპასუხებს თქვენს შეკითხვებს.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="filled" size="lg">
                დაგვიკავშირდით
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
