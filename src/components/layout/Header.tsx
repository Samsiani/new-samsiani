"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Sun, Moon, Menu, ChevronDown } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "მთავარი", href: "/" },
  {
    label: "სერვისები",
    href: "/services/web",
    children: [
      { label: "ვებ დეველოპმენტი", href: "/services/web" },
      { label: "AI ავტომატიზაცია", href: "/services/ai" },
      { label: "SEO ოპტიმიზაცია", href: "/services/seo" },
      { label: "ტექნიკური მხარდაჭერა", href: "/services/support" },
    ],
  },
  { label: "პორტფოლიო", href: "/portfolio" },
  { label: "ბლოგი", href: "/blog" },
  { label: "ჩვენს შესახებ", href: "/about" },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 50));
  }, [scrollY]);

  return (
    <>
      <header
        className={cn(
          "safe-header fixed left-0 right-0 top-0 z-[100] transition-all duration-300",
          scrolled
            ? "border-b border-[var(--c-border)] bg-[var(--c-bg)]/95 backdrop-blur-xl"
            : "bg-[var(--c-bg)]"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Wordmark */}
          <Link href="/" className="text-lg font-black tracking-[-0.02em]">
            SAMSIANI<span className="text-[var(--c-accent)]">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setDropdownOpen(true)}
                onMouseLeave={() => link.children && setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.15em] text-[var(--c-fg-muted)] transition-colors hover:text-[var(--c-fg)]"
                >
                  {link.label}
                  {link.children && <ChevronDown size={12} />}
                </Link>
                {link.children && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-2"
                      >
                        <div className="min-w-[200px] rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-2 shadow-lg">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-[var(--c-bg2)]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-[var(--c-bg2)] cursor-pointer"
              aria-label="Toggle theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            </button>

            <Link
              href="/contact"
              className="hidden sketch-border-accent bg-transparent px-5 py-2 text-xs font-bold text-[var(--c-accent)] transition-all hover:bg-[var(--c-accent)] hover:text-white md:block"
            >
              კონტაქტი
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center md:hidden cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
