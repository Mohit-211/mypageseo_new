"use client";

import { useReveal } from "@/hooks/use-reveal";
import type { features } from "@/components/software/software-data";

export function FeatureCard({
  f,
  i,
}: {
  f: (typeof features)[number];
  i: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group rounded-2xl bg-card ring-soft p-6 transition-all duration-500 hover:shadow-lift hover:-translate-y-1 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${(i % 4) * 60}ms` }}
    >
      <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <f.icon className="w-5 h-5" />
      </div>
      <h3 className="font-semibold text-foreground mb-1.5">{f.t}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
    </div>
  );
}
