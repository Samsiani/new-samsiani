"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const smallPostImages = [
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=200&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80",
];

const previewPosts = [
  {
    title: "ვებ დეველოპმენტის ტრენდები 2024 წელს",
    slug: "web-trends-2024",
    date: "2024-01-15",
    category: "ტექნოლოგია",
    large: true,
  },
  {
    title: "SEO ოპტიმიზაციის 10 რჩევა",
    slug: "seo-tips",
    date: "2023-12-20",
    category: "SEO",
    large: false,
  },
  {
    title: "UI/UX დიზაინის პრინციპები",
    slug: "ui-ux-principles",
    date: "2023-11-10",
    category: "დიზაინი",
    large: false,
  },
];

export function BlogPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-32">
      <div className="mb-12 flex items-baseline justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--c-fg-muted)]">
          03 — ბლოგი
        </p>
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--c-accent)] transition-opacity hover:opacity-70"
        >
          ყველა სტატია →
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Large post */}
        <ScrollReveal>
          <Link href={`/blog/${previewPosts[0].slug}`} className="group block">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--c-bg2)]">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80" alt="ვებ დეველოპმენტის ტრენდები" loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition-[filter] duration-500 group-hover:grayscale-0" />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[var(--c-accent)]/10 px-3 py-1 text-xs font-medium text-[var(--c-accent)]">
                  {previewPosts[0].category}
                </span>
                <time className="font-mono text-xs text-[var(--c-fg-muted)]">
                  {previewPosts[0].date}
                </time>
              </div>
              <h3 className="mt-3 text-xl font-semibold transition-colors group-hover:text-[var(--c-accent)]">
                {previewPosts[0].title}
              </h3>
            </div>
          </Link>
        </ScrollReveal>

        {/* Small posts */}
        <div className="flex flex-col gap-8">
          {previewPosts.slice(1).map((post, i) => (
            <ScrollReveal key={post.slug} delay={0.1 * (i + 1)}>
              <Link href={`/blog/${post.slug}`} className="group flex gap-4">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-[var(--c-bg2)]">
                  <img src={smallPostImages[i]} alt={post.title} loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition-[filter] duration-500 group-hover:grayscale-0" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[var(--c-accent)]/10 px-3 py-1 text-xs font-medium text-[var(--c-accent)]">
                      {post.category}
                    </span>
                    <time className="font-mono text-xs text-[var(--c-fg-muted)]">
                      {post.date}
                    </time>
                  </div>
                  <h3 className="mt-2 font-semibold transition-colors group-hover:text-[var(--c-accent)]">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
