"use client";

import { PricingCard } from "./pricing-card";
import { plans } from "./pricing-data";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="container-page pt-10 pb-20 md:pt-14 md:pb-24"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard key={plan.id} plan={plan} delay={index * 80} />
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-card p-6 text-center shadow-card ring-soft">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Pricing is displayed in your local currency automatically. Every plan
          includes full access to the MyPageSEO reporting platform, ongoing
          Local SEO optimization, and expert guidance from our team.
        </p>
      </div>
    </section>
  );
}
