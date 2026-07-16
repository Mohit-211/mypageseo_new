"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { PricingCard } from "./pricing-card";
import { plans } from "./pricing-data";

export function PricingHeroAndCards() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface via-background to-background" />
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[480px] opacity-60"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 12%, transparent), transparent 70%)",
          }}
        />
        <div className="container-page pt-24 pb-16 md:pt-32 md:pb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Transparent Local SEO pricing
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-foreground max-w-4xl mx-auto">
            Simple Local SEO plans that grow with your business.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you serve one neighborhood or hundreds of markets, MyPageSEO offers plans that scale to your local
            visibility goals — backed by proprietary reporting software and real strategists.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border/70 bg-background p-1 shadow-card">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                !yearly ? "bg-primary text-primary-foreground shadow-card" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${
                yearly ? "bg-primary text-primary-foreground shadow-card" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                Coming soon
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} yearly={yearly} delay={i * 60} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Prices in USD. Canadian pricing available on request. All plans include MyPageSEO Software access.
        </p>
      </section>
    </>
  );
}
