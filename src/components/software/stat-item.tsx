"use client";

import { useReveal } from "@/hooks/use-reveal";
import { useCountUp } from "@/hooks/use-count-up";

export function StatItem({ n, s, l }: { n: number; s: string; l: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const v = useCountUp(n, shown);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display text-primary tabular-nums">
        {v.toLocaleString()}
        {s}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{l}</div>
    </div>
  );
}
