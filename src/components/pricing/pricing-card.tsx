"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import type { Plan } from "./pricing-data";

export function PricingCard({ plan, yearly, delay }: { plan: Plan; yearly: boolean; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = plan.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative flex flex-col rounded-2xl border bg-background p-7 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${
        plan.popular
          ? "border-accent/60 shadow-lift md:scale-[1.02] ring-1 ring-accent/20"
          : "border-border/70 shadow-card hover:-translate-y-1 hover:shadow-lift"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground shadow-card">
          Most Popular
        </span>
      )}
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{plan.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed min-h-[3.5rem]">{plan.tagline}</p>

      <div className="mt-6 min-h-[92px]">
        {plan.price !== null ? (
          <>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-foreground">
                ${yearly ? Math.round(plan.price * 0.85) : plan.price}
              </span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            {plan.setup && <p className="mt-2 text-xs text-muted-foreground">{plan.setup}</p>}
          </>
        ) : (
          <>
            <div className="text-4xl font-semibold tracking-tight text-foreground">Custom</div>
            <p className="mt-2 text-xs text-muted-foreground">Tailored scope &amp; pricing</p>
          </>
        )}
      </div>

      <Link
        href={plan.price === null ? "/contact" : "/checkout"}
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
          plan.popular
            ? "bg-accent text-accent-foreground shadow-card hover:-translate-y-0.5 hover:shadow-lift"
            : "bg-primary text-primary-foreground shadow-card hover:-translate-y-0.5 hover:shadow-lift"
        }`}
      >
        {plan.cta} <ArrowRight className="h-4 w-4" />
      </Link>

      <div className="mt-7 border-t border-border/60 pt-6">
        {plan.inherits && (
          <p className="mb-4 text-xs font-medium text-muted-foreground">
            Everything in <span className="text-foreground font-semibold">{plan.inherits}</span>, plus:
          </p>
        )}
        <ul className="space-y-3">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-3 text-sm text-foreground/90">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
