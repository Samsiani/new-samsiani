"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

const footerNav = [
  { label: "მთავარი", href: "/" },
  { label: "პორტფოლიო", href: "/portfolio" },
  { label: "ბლოგი", href: "/blog" },
  { label: "ჩვენს შესახებ", href: "/about" },
  { label: "კონტაქტი", href: "/contact" },
];

const footerServices = [
  { label: "ვებ დეველოპმენტი", href: "/services/web" },
  { label: "SEO ოპტიმიზაცია", href: "/services/seo" },
  { label: "ტექნიკური მხარდაჭერა", href: "/services/support" },
];

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setShowTop(v > 500));
  }, [scrollY]);

  return (
    <footer className="border-t border-[var(--c-border)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-black tracking-tight">
              SAMSIANI.
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[var(--c-fg-muted)]">
              ვებ დეველოპმენტის და ციფრული სერვისების სააგენტო. 2009 წლიდან ვქმნით ციფრულ გამოცდილებას.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--c-fg-muted)]">
              ნავიგაცია
            </h4>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[var(--c-accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--c-fg-muted)]">
              სერვისები
            </h4>
            <ul className="space-y-2">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[var(--c-accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--c-fg-muted)]">
              კონტაქტი
            </h4>
            <div className="space-y-2 text-sm">
              <p>+995 555 12 34 56</p>
              <p>info@samsiani.com</p>
              <p className="text-[var(--c-fg-muted)]">თბილისი, საქართველო</p>
            </div>
            <div className="mt-6">
              <p className="mb-2 text-xs font-medium text-[var(--c-fg-muted)]">გამოიწერეთ სიახლეები</p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--c-border)] py-6">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs text-[var(--c-fg-muted)]">
            © {new Date().getFullYear()} SAMSIANI. ხელნაკეთი სიყვარულით თბილისში 🇬🇪
          </p>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--c-accent)] text-white shadow-lg transition-colors hover:bg-[var(--c-accent-hover)] cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
