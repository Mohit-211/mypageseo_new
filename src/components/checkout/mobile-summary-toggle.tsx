"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { OrderSummary } from "./order-summary";
import type { AppliedCoupon, Plan, Pricing } from "./plans-data";

export function MobileSummaryToggle({
  plan,
  pricing,
  applied,
}: {
  plan: Plan;
  pricing: Pricing;
  applied: AppliedCoupon | null;
}) {
  const [summaryOpen, setSummaryOpen] = useState(false);
  const isCustom = plan.price === null;

  return (
    <div className="container-page lg:hidden">
      <button
        onClick={() => setSummaryOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-2xl border border-border/70 bg-background px-5 py-4 shadow-card"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/5 text-primary">
            <plan.icon className="h-4 w-4" />
          </span>
          <div className="text-left">
            <p className="text-xs text-muted-foreground">Order summary</p>
            <p className="text-sm font-semibold text-foreground">
              {plan.name} — {isCustom ? "Custom" : `$${pricing.total.toLocaleString()} today`}
            </p>
          </div>
        </div>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${summaryOpen ? "rotate-180" : ""}`} />
      </button>
      {summaryOpen && (
        <div className="mt-3 animate-fade-in">
          <OrderSummary plan={plan} pricing={pricing} applied={applied} />
        </div>
      )}
    </div>
  );
}
