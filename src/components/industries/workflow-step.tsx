"use client";

import { useReveal } from "@/hooks/use-reveal";
import type { workflow } from "@/components/industries/industries-data";

export function WorkflowStep({ step, index }: { step: (typeof workflow)[number]; index: number }) {
  const { ref, shown: visible } = useReveal<HTMLLIElement>(0.1);
  const Icon = step.icon;
  return (
    <li
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`relative rounded-2xl border border-border/70 bg-background p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Step {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-4 text-sm font-semibold text-foreground">{step.title}</h3>
      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.copy}</p>
    </li>
  );
}
