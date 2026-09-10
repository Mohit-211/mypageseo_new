"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { getCurrency } from "@/lib/getCurrency";
import { PLAN_PRICING } from "@/lib/pricing";
import type { Plan } from "./pricing-data";

export function PricingCard({ plan, delay }: { plan: Plan; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = plan.icon;

  const currency = getCurrency() === "CAD" ? "CAD" : "USD";
  const pricing = PLAN_PRICING[currency][plan.id];

  const symbol = currency === "CAD" ? "C$" : "$";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative flex h-full flex-col rounded-2xl border bg-background p-6 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${
        plan.popular
          ? "border-accent shadow-lift ring-2 ring-accent/15 md:scale-[1.02]"
          : "border-border/70 shadow-card hover:-translate-y-1 hover:shadow-lift"
      }`}
    >
      {plan.popular && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground shadow-card">
          Most Popular
        </span>
      )}

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/5 text-primary">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>

          <p className="mt-0.5 text-sm text-muted-foreground">{plan.tagline}</p>
        </div>
      </div>

      {/* Price */}
      <div className="mt-6 border-y border-border/60 py-5">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold tracking-tight text-foreground">
            {symbol}
            {pricing.monthly}
          </span>

          <span className="mb-1 text-sm text-muted-foreground">/month</span>
        </div>

        <span className="mt-3 inline-flex rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
          One-time setup: {symbol}
          {pricing.setup}
        </span>
      </div>

      {/* CTA */}
      <Link
        href="/checkout"
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
          plan.popular
            ? "bg-accent text-accent-foreground hover:-translate-y-0.5 hover:shadow-lift"
            : "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-lift"
        }`}
      >
        {plan.cta}
        <ArrowRight className="h-4 w-4" />
      </Link>

      {/* Features */}
      <div className="mt-6 flex-1 border-t border-border/60 pt-6">
        <ul className="space-y-2.5">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-[13px] text-foreground"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                strokeWidth={3}
              />

              <span className="leading-5">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-border/60 pt-4">
        <p className="text-center text-[11px] text-muted-foreground">
          Dedicated Strategist • Software Included • Flexible Billing
        </p>
      </div>
    </div>
  );
}
