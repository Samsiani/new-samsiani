"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Facebook, Linkedin, Twitter, LinkIcon } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useToast } from "@/components/ui/Toast";

import wpPosts from "@/data/wp/blog-posts.json";

const POSTS = wpPosts as any[];

const POST_IMAGES: Record<string, string> = {
  "web-trends-2024": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
  "seo-tips": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
  "ui-ux-principles": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
  "ecommerce-growth": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  "ai-web-development": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  "website-speed-optimization": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  "react-vs-vue": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
  "brand-identity-digital": "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80",
  "startup-website-checklist": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
};

const AUTHOR = {
  name: "გიორგი სამსიშვილი",
  bio: "ვებ დეველოპერი და დიზაინერი 10+ წლიანი გამოცდილებით. სამსიანის დამფუძნებელი.",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const months = [
    "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
    "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი",
  ];
  return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
}

export function BlogPostContent({ slug }: { slug: string }) {
  const { toast } = useToast();
  const postIndex = POSTS.findIndex((p) => p.slug === slug);
  const post = POSTS[postIndex];

  if (!post) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-4 text-[var(--c-fg-muted)]">სტატია ვერ მოიძებნა</p>
          <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--c-accent)] hover:underline">
            <ArrowLeft size={14} /> ბლოგზე დაბრუნება
          </Link>
        </div>
      </section>
    );
  }

  const prevPost = postIndex > 0 ? POSTS[postIndex - 1] : null;
  const nextPost = postIndex < POSTS.length - 1 ? POSTS[postIndex + 1] : null;
  const relatedPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("ლინკი დაკოპირდა!", "success");
  };

  return (
    <article className="px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--c-fg-muted)] transition-colors hover:text-[var(--c-accent)]">
            <ArrowLeft size={14} /> ბლოგი
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <span className="inline-block bg-[var(--c-accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--c-accent)]">
            {post.categoryLabel}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">{post.title}</h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center bg-[var(--c-accent)]/10 text-sm font-bold text-[var(--c-accent)]">
              გს
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--c-fg-muted)]">
              <span className="font-medium text-[var(--c-fg)]">{AUTHOR.name}</span>
              <span>&middot;</span>
              <span>{formatDate(post.date)}</span>
              <span>&middot;</span>
              <span>{post.readingTime} წთ</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-10 aspect-[16/9] w-full overflow-hidden">
            <img src={post.image || POST_IMAGES[post.slug]} alt={post.title} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div
            className="prose dark:prose-invert mt-12 max-w-none prose-headings:font-bold prose-p:leading-relaxed prose-p:text-[var(--c-fg)] prose-a:text-[var(--c-accent)] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </ScrollReveal>

        {/* Share buttons */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 border-t border-b border-[var(--c-border)] py-6">
            <p className="mb-3 text-sm font-medium text-[var(--c-fg-muted)]">გაზიარება</p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "X" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-[var(--c-border)] transition-colors hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
                  aria-label={`${s.label}-ზე გაზიარება`}
                >
                  <s.icon size={16} />
                </a>
              ))}
              <button
                onClick={handleCopyLink}
                className="flex h-10 w-10 items-center justify-center border border-[var(--c-border)] transition-colors hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] cursor-pointer"
                aria-label="ლინკის კოპირება"
              >
                <LinkIcon size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Author card */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex gap-5 border border-[var(--c-border)] bg-[var(--c-surface)] p-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[var(--c-accent)]/10 text-lg font-bold text-[var(--c-accent)]">
              გს
            </div>
            <div>
              <h3 className="font-bold">{AUTHOR.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--c-fg-muted)]">{AUTHOR.bio}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Related posts */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16">
            <h2 className="mb-6 text-xl font-bold">მსგავსი სტატიები</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group border border-[var(--c-border)] bg-[var(--c-surface)] p-5 transition-colors hover:border-[var(--c-accent)]/40"
                >
                  <span className="text-xs font-semibold text-[var(--c-accent)]">{rp.categoryLabel}</span>
                  <h3 className="mt-2 text-sm font-bold leading-snug transition-colors group-hover:text-[var(--c-accent)]">
                    {rp.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--c-fg-muted)]">{formatDate(rp.date)}</p>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Prev / Next navigation */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex items-center gap-3 border border-[var(--c-border)] p-5 transition-colors hover:border-[var(--c-accent)]/40"
              >
                <ArrowLeft size={16} className="shrink-0 text-[var(--c-fg-muted)] transition-transform group-hover:-translate-x-1" />
                <div className="min-w-0">
                  <p className="text-xs text-[var(--c-fg-muted)]">წინა სტატია</p>
                  <p className="mt-0.5 truncate text-sm font-semibold transition-colors group-hover:text-[var(--c-accent)]">{prevPost.title}</p>
                </div>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-center justify-end gap-3 border border-[var(--c-border)] p-5 text-right transition-colors hover:border-[var(--c-accent)]/40"
              >
                <div className="min-w-0">
                  <p className="text-xs text-[var(--c-fg-muted)]">შემდეგი სტატია</p>
                  <p className="mt-0.5 truncate text-sm font-semibold transition-colors group-hover:text-[var(--c-accent)]">{nextPost.title}</p>
                </div>
                <ArrowRight size={16} className="shrink-0 text-[var(--c-fg-muted)] transition-transform group-hover:translate-x-1" />
              </Link>
            ) : <div />}
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
