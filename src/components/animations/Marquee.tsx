"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function Marquee({ children, className, speed = 30 }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="animate-marquee flex w-max items-center gap-12"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
