"use client";

import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Art } from "./blog-illustrations";
import type { Guide } from "./blog-data";

interface GuideCardProps {
  guide: Guide;
  index: number;
}

export function GuideCard({ guide, index }: GuideCardProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] rounded-2xl overflow-hidden bg-card ring-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-500 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
    >
      <Art kind={guide.art} className="h-full" />
      <div className="p-5 sm:p-7 flex flex-col justify-center">
        <div className="text-[11px] font-semibold text-accent uppercase tracking-wider mb-2">Guide · {guide.read}</div>
        <h3 className="font-display text-xl md:text-2xl text-foreground leading-snug group-hover:text-primary transition-colors">{guide.t}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{guide.d}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  );
}
