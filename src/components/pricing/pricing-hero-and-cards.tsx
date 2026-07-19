"use client";

import { Sparkles } from "lucide-react";
import { PricingCard } from "./pricing-card";
import { plans } from "./pricing-data";

export function PricingHeroAndCards() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-primary ring-soft">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Transparent Local SEO Pricing
            </span>

            <h1 className="mt-6 text-4xl font-display leading-[1.05] text-foreground md:text-6xl">
              Simple pricing.
              <br />
              <span className="text-gradient">Serious Local SEO results.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Whether you're growing one location or expanding across multiple
              markets, every plan includes Local SEO experts, proprietary
              reporting software, and a proven strategy designed to increase
              calls, visibility, and revenue.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <div className="rounded-xl bg-card px-5 py-3 shadow-card ring-soft">
                <div className="text-sm font-semibold text-foreground">
                  Monthly Billing
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  No yearly commitments
                </div>
              </div>

              <div className="rounded-xl bg-card px-5 py-3 shadow-card ring-soft">
                <div className="text-sm font-semibold text-foreground">
                  One-Time Setup
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Complete onboarding included
                </div>
              </div>

              <div className="rounded-xl bg-card px-5 py-3 shadow-card ring-soft">
                <div className="text-sm font-semibold text-foreground">
                  No Hidden Fees
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Transparent pricing from day one
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="container-page mt-24 pb-24 relative z-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} delay={index * 80} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-card p-6 text-center shadow-card ring-soft">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Pricing is displayed in your local currency whenever available.
            Every plan includes full access to the MyPageSEO reporting platform,
            ongoing Local SEO optimization, and expert guidance from our team.
          </p>
        </div>
      </section>
    </>
  );
}
