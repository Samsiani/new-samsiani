"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Tabs } from "@/components/ui/Tabs";
import { Pagination } from "@/components/ui/Pagination";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { cn } from "@/lib/utils";

/* ─── Data ───────────────────────────────────────────────────────────── */

import wpPosts from "@/data/wp/blog-posts.json";
import wpCategories from "@/data/wp/categories.json";

const POSTS = wpPosts as any[];

const CATEGORIES = [
  { value: "all", label: "ყველა" },
  ...wpCategories.blog,
];

const CATEGORY_MAP: Record<string, string> = Object.fromEntries(
  wpCategories.blog.map((c: any) => [c.value, c.label])
);

const ITEMS_PER_PAGE = 3;


const POST_IMAGES: Record<string, string> = {
  "web-trends-2024": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  "seo-tips": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
  "ui-ux-principles": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  "ecommerce-growth": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  "ai-web-development": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  "website-speed-optimization": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "react-vs-vue": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  "brand-identity-digital": "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
  "startup-website-checklist": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const months = [
    "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
    "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი",
  ];
  return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
}

/* ─── Popular posts (top 3 by date) ──────────────────────────────────── */

const POPULAR_SLUGS = ["web-trends-2024", "seo-tips", "ai-web-development"];
const POPULAR = POSTS.filter((p) => POPULAR_SLUGS.includes(p.slug));

/* ─── Component ──────────────────────────────────────────────────────── */

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = POSTS;
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q));
    }
    return result;
  }, [activeCategory, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE
  );

  const featured = paginated[0];
  const rest = paginated.slice(1);

  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-44 md:pb-28">
        <span
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[10rem] font-black leading-none tracking-tighter text-[var(--c-fg)] opacity-[0.03] sm:text-[18rem] md:text-[26rem]"
          aria-hidden="true"
        >
          BLOG
        </span>
        <div className="relative mx-auto max-w-7xl text-center">
          <TextReveal
            text="ბლოგი"
            as="h1"
            className="justify-center text-3xl font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
          />
          <ScrollReveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--c-fg-muted)]">
              სტატიები ვებ დეველოპმენტზე, დიზაინზე, SEO-ზე და ციფრულ ბიზნესზე
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Tabs
              tabs={CATEGORIES}
              defaultValue="all"
              onChange={handleCategoryChange}
              className="mb-10"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
            {/* Main column */}
            <div className="min-w-0">
              <AnimatePresence mode="popLayout">
                {filtered.length === 0 ? (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-20 text-center text-lg text-[var(--c-fg-muted)]"
                  >
                    სტატიები ვერ მოიძებნა
                  </motion.p>
                ) : (
                  <motion.div
                    key={`page-${safeCurrentPage}-${activeCategory}-${search}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                  >
                    {/* Featured post */}
                    {featured && (
                      <Link
                        href={`/blog/${featured.slug}`}
                        className="group mb-10 block"
                      >
                        <div className="overflow-hidden rounded-2xl bg-[var(--c-bg2)]">
                          <div className="aspect-[16/9] w-full overflow-hidden">
                            <img src={featured.image || POST_IMAGES[featured.slug] || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80"} alt={featured.title} loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition-[filter] duration-500 group-hover:grayscale-0" />
                          </div>
                          <div className="p-6 md:p-8">
                            <div className="flex items-center gap-3">
                              <span className="rounded-full bg-[var(--c-accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--c-accent)]">
                                {CATEGORY_MAP[featured.category]}
                              </span>
                              <span className="flex items-center gap-1.5 text-xs text-[var(--c-fg-muted)]">
                                <Calendar size={12} />
                                {formatDate(featured.date)}
                              </span>
                            </div>
                            <h2 className="mt-4 text-xl font-bold leading-snug transition-colors group-hover:text-[var(--c-accent)] sm:text-2xl md:text-3xl">
                              {featured.title}
                            </h2>
                            <p className="mt-3 text-[var(--c-fg-muted)] leading-relaxed line-clamp-3">
                              {featured.excerpt}
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--c-accent)]">
                              სრულად წაკითხვა
                              <ArrowRight
                                size={14}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </span>
                          </div>
                        </div>
                      </Link>
                    )}

                    {/* Remaining posts — asymmetric 2-col grid */}
                    {rest.length > 0 && (
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                        {rest.map((post, i) => (
                          <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className={cn(
                              "group block",
                              i === 0 ? "md:col-span-3" : "md:col-span-2"
                            )}
                          >
                            <div className="h-full overflow-hidden rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] transition-colors hover:border-[var(--c-accent)]/40">
                              <div className="aspect-[16/10] w-full overflow-hidden">
                                <img src={post.image || POST_IMAGES[post.slug] || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80"} alt={post.title} loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition-[filter] duration-500 group-hover:grayscale-0" />
                              </div>
                              <div className="p-5">
                                <div className="flex items-center gap-3">
                                  <span className="rounded-full bg-[var(--c-accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--c-accent)]">
                                    {CATEGORY_MAP[post.category]}
                                  </span>
                                  <span className="text-xs text-[var(--c-fg-muted)]">
                                    {formatDate(post.date)}
                                  </span>
                                </div>
                                <h3 className="mt-3 text-lg font-bold leading-snug transition-colors group-hover:text-[var(--c-accent)]">
                                  {post.title}
                                </h3>
                                <p className="mt-2 text-sm text-[var(--c-fg-muted)] line-clamp-2 leading-relaxed">
                                  {post.excerpt}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pagination */}
              <Pagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                className="mt-14"
              />
            </div>

            {/* Sidebar — desktop only */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">
                {/* Search */}
                <div>
                  <div className="relative">
                    <Search
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--c-fg-muted)]"
                    />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                      }}
                      placeholder="სტატიის ძიება..."
                      className="w-full rounded-full border border-[var(--c-border)] bg-transparent py-2.5 pr-4 pl-10 text-base outline-none transition-colors focus:border-[var(--c-accent)] form-input-hover"
                    />
                  </div>
                </div>

                {/* Popular articles */}
                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--c-fg-muted)]">
                    პოპულარული სტატიები
                  </h3>
                  <div className="space-y-4">
                    {POPULAR.map((post, i) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex gap-3"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--c-bg2)] text-xs font-bold text-[var(--c-fg-muted)]">
                          {i + 1}
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold leading-snug transition-colors group-hover:text-[var(--c-accent)]">
                            {post.title}
                          </h4>
                          <p className="mt-0.5 text-xs text-[var(--c-fg-muted)]">
                            {formatDate(post.date)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5">
                  <h3 className="mb-1 text-sm font-bold">
                    გამოიწერეთ სიახლეები
                  </h3>
                  <p className="mb-4 text-xs text-[var(--c-fg-muted)] leading-relaxed">
                    მიიღეთ ახალი სტატიები და რჩევები ელ-ფოსტაზე
                  </p>
                  <NewsletterForm />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
