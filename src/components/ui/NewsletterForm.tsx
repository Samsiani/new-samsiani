"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "./Toast";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("გთხოვთ შეიყვანოთ სწორი ელ-ფოსტა");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setEmail("");
    toast("წარმატებით გამოიწერეთ!", "success");
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex gap-2", className)}>
      <div className="relative flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ელ-ფოსტა"
          className={cn(
            "w-full rounded-full border bg-transparent px-4 py-2.5 text-base outline-none transition-colors form-input-hover",
            error ? "border-[var(--c-accent)]" : "border-[var(--c-border)] focus:border-[var(--c-accent)]"
          )}
        />
        {error && <p className="absolute mt-1 text-xs text-[var(--c-accent)]">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--c-accent)] text-white transition-colors hover:bg-[var(--c-accent-hover)] disabled:opacity-50 cursor-pointer"
        aria-label="Subscribe"
      >
        {loading ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <Send size={14} />
        )}
      </button>
    </form>
  );
}
