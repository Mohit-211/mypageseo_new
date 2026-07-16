"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import type { Industry } from "@/components/industries/industries-data";

export function IndustryCard({ industry, delay }: { industry: Industry; delay: number }) {
  const { ref, shown: visible } = useReveal<HTMLAnchorElement>(0.1);
  const Icon = industry.icon;
  return (
    <Link
      ref={ref}
      href="/contact"
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex flex-col rounded-2xl border border-border/70 bg-background p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift hover:border-accent/30 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
          {industry.group}
        </span>
      </div>
      <h3 className="mt-5 text-sm font-semibold text-foreground leading-snug">{industry.name}</h3>
      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{industry.blurb}</p>
      <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Learn more <ArrowRight className="h-3 w-3" />
      </div>
    </Link>
  );
}
