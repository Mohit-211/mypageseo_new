"use client";

import { useState } from "react";
import { industries } from "@/components/industries/industries-data";
import { IndustryCard } from "@/components/industries/industry-card";

export function IndustryFilterGrid() {
  const groups = Array.from(new Set(industries.map((i) => i.group)));
  const [filter, setFilter] = useState<string>("All");
  const shown = filter === "All" ? industries : industries.filter((i) => i.group === filter);

  return (
    <section className="container-page pb-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Industries</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            The categories we know inside and out.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", ...groups].map((g) => (
            <button
              key={g}
              onClick={() => setFilter(g)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                filter === g
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border/70 bg-background text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shown.map((ind, i) => (
          <IndustryCard key={ind.name} industry={ind} delay={(i % 12) * 30} />
        ))}
      </div>
    </section>
  );
}
