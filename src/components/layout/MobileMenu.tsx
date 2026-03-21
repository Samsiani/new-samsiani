"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "მთავარი", href: "/" },
  { label: "ვებ დეველოპმენტი", href: "/services/web" },
  { label: "AI ავტომატიზაცია", href: "/services/ai" },
  { label: "SEO ოპტიმიზაცია", href: "/services/seo" },
  { label: "ტექნიკური მხარდაჭერა", href: "/services/support" },
  { label: "პორტფოლიო", href: "/portfolio" },
  { label: "ბლოგი", href: "/blog" },
  { label: "ჩვენს შესახებ", href: "/about" },
  { label: "კონტაქტი", href: "/contact" },
];

const socials = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col bg-[var(--c-fg)]/95 text-[var(--c-bg)]"
        >
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button onClick={onClose} className="cursor-pointer" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-6" aria-label="Mobile navigation">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-2xl font-semibold tracking-tight transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center justify-center gap-6 pb-10">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-xs uppercase tracking-widest opacity-60 transition-opacity hover:opacity-100"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
