"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={cn("flex items-center justify-center gap-2", className)} aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--c-border)] transition-colors hover:border-[var(--c-accent)] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors cursor-pointer",
            page === currentPage
              ? "bg-[var(--c-accent)] text-white"
              : "hover:bg-[var(--c-bg2)]"
          )}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--c-border)] transition-colors hover:border-[var(--c-accent)] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
