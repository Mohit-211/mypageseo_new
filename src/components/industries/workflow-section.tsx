"use client";

import { workflow } from "@/components/industries/industries-data";
import { WorkflowStep } from "@/components/industries/workflow-step";

export function WorkflowSection() {
  return (
    <section className="container-page py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Our approach
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          How we customize every Local SEO campaign.
        </h2>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          A repeatable methodology, tuned to your industry's realities. Every
          campaign moves through the same seven steps. The depth and emphasis
          change based on category.
        </p>
      </div>

      <div className="relative mt-14">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-7">
          {workflow.map((w, i) => (
            <WorkflowStep key={w.title} step={w} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
