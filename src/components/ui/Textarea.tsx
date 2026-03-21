"use client";

import { forwardRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, onFocus, onBlur, onInput, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const hasValue = props.value !== undefined && props.value !== "";

    const autoResize = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
      const el = e.currentTarget;
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }, []);

    return (
      <div className={cn("relative", className)}>
        <textarea
          ref={ref}
          {...props}
          onFocus={(e) => { setFocused(true); onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); onBlur?.(e); }}
          onInput={autoResize}
          placeholder=" "
          rows={4}
          className={cn(
            "peer w-full resize-none border bg-transparent px-4 pb-2 pt-6 text-base outline-none transition-colors form-input-hover",
            error
              ? "border-[var(--c-accent)] focus:border-[var(--c-accent)]"
              : "border-[var(--c-border)] focus:border-[var(--c-accent)]",
            "focus:ring-1 focus:ring-[var(--c-accent)]"
          )}
        />
        <label
          className={cn(
            "pointer-events-none absolute left-4 top-4 origin-left text-sm transition-all duration-200",
            "text-[var(--c-fg-muted)]",
            (focused || hasValue) && "translate-y-[-10px] scale-[0.8] text-[var(--c-accent)]",
            "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100",
            "peer-focus:translate-y-[-10px] peer-focus:scale-[0.8] peer-focus:text-[var(--c-accent)]"
          )}
        >
          {label}
        </label>
        {error && <p className="mt-1 text-xs text-[var(--c-accent)]">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
