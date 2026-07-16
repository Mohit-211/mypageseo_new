"use client";

import { useMemo, useState, type FormEvent } from "react";
import { MobileSummaryToggle } from "./mobile-summary-toggle";
import { PlanSelector } from "./plan-selector";
import { BusinessInfoPanel } from "./business-info-panel";
import { GrowthGoalsPanel } from "./growth-goals-panel";
import { PaymentPanel } from "./payment-panel";
import { OrderSummary } from "./order-summary";
import { plans, computePricing, type AppliedCoupon, type PlanId } from "./plans-data";

export function CheckoutForm() {
  const [planId, setPlanId] = useState<PlanId>("standard");
  const [applied, setApplied] = useState<AppliedCoupon | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const plan = plans.find((p) => p.id === planId)!;
  const isCustom = plan.price === null;
  const pricing = useMemo(() => computePricing(plan, applied), [plan, applied]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1400);
  }

  return (
    <>
      <MobileSummaryToggle plan={plan} pricing={pricing} applied={applied} />

      <section className="container-page py-8 md:py-12 grid gap-10 lg:grid-cols-[1fr_400px] items-start">
        <form onSubmit={handleSubmit} className="space-y-10">
          <PlanSelector planId={planId} onSelect={setPlanId} />
          <BusinessInfoPanel />
          <GrowthGoalsPanel />
          <PaymentPanel
            isCustom={isCustom}
            submitting={submitting}
            applied={applied}
            onApplyCoupon={setApplied}
          />
        </form>

        <aside className="hidden lg:block sticky top-24">
          <OrderSummary plan={plan} pricing={pricing} applied={applied} />
        </aside>
      </section>
    </>
  );
}
