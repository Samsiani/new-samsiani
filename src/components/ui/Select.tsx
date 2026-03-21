"use client";

import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    const hasValue = props.value !== undefined && props.value !== "";

    return (
      <div className={cn("relative", className)}>
        <select
          ref={ref}
          {...props}
          className={cn(
            "peer w-full appearance-none border bg-transparent px-4 pb-2 pt-6 text-base outline-none transition-colors cursor-pointer form-input-hover",
            error
              ? "border-[var(--c-accent)] focus:border-[var(--c-accent)]"
              : "border-[var(--c-border)] focus:border-[var(--c-accent)]",
            "focus:ring-1 focus:ring-[var(--c-accent)]",
            !hasValue && "text-transparent"
          )}
        >
          <option value="">{label}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <label
          className={cn(
            "pointer-events-none absolute left-4 top-4 origin-left text-sm transition-all duration-200",
            "text-[var(--c-fg-muted)]",
            hasValue && "translate-y-[-10px] scale-[0.8] text-[var(--c-accent)]",
            "peer-focus:translate-y-[-10px] peer-focus:scale-[0.8] peer-focus:text-[var(--c-accent)]"
          )}
        >
          {label}
        </label>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {error && <p className="mt-1 text-xs text-[var(--c-accent)]">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
