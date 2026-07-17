"use client";

import { useMemo, useState, type FormEvent } from "react";
import { MobileSummaryToggle } from "./mobile-summary-toggle";
import { PlanSelector } from "./plan-selector";
import { BusinessInfoPanel } from "./business-info-panel";
import { PaymentPanel } from "./payment-panel";
import { OrderSummary } from "./order-summary";
import { computePricing, type AppliedCoupon, type PlanId } from "./plans-data";
import { useSubscriptionPlans } from "@/hooks/use-subscription-plans";
import { BusinessDetails, createSubscriptionAPI } from "@/api/subscription.api";
import { useCountry } from "@/context/CountryContext";
import { PlanSelectorSkeleton } from "../services/plan-selector-skeleton";

const emptyBusinessDetails: BusinessDetails = {
  business_name: "",
  website_url: "",
  primary_business_location: "",
  additional_locations: "",
  industry_category: "",
  company_size: "",
  full_name: "",
  business_email: "",
  phone_number: "",
};

export function CheckoutForm() {
  const detectedCountry = useCountry();
  const country = detectedCountry === "CANADA" ? "CANADA" : "USA";

  // plans always come from the API — no local/static fallback list
  const { plans, loading, error, refetch } = useSubscriptionPlans(country);

  const [planId, setPlanId] = useState<PlanId | null>(null);
  const [applied, setApplied] = useState<AppliedCoupon | null>(null);
  const [business, setBusiness] = useState<BusinessDetails>(emptyBusinessDetails);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // default to the first plan once plans load, if nothing's selected yet
  const activePlanId = planId ?? plans[0]?.id ?? null;
  const plan = plans.find((p) => p.id === activePlanId) ?? null;
  const isCustom = plan?.price === null;

  const pricing = useMemo(
    () => (plan ? computePricing(plan, applied) : null),
    [plan, applied]
  );

  function updateBusiness(patch: Partial<BusinessDetails>) {
    setBusiness((prev) => ({ ...prev, ...patch }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!plan || isCustom || submitting) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      const response = await createSubscriptionAPI({
        plan_id: plan.id,
        coupon_code: applied?.code,
        business_details: business,
      });

      const approveUrl = response?.data?.approve_url;
      if (approveUrl) {
        // send the user to PayPal to approve the subscription
        window.location.href = approveUrl;
        return; // keep submitting=true — we're navigating away, no need to reset state
      }

      setSubmitError("Subscription was created, but no approval link was returned. Please contact support.");
      setSubmitting(false);
    } catch (err: any) {
      setSubmitError(err?.message ?? "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }
  return (
    <>
      {plan && pricing && (
        <MobileSummaryToggle plan={plan} pricing={pricing} applied={applied} />
      )}

      <section className="container-page py-8 md:py-12 grid gap-10 lg:grid-cols-[1fr_400px] items-start">
        
        <form onSubmit={handleSubmit} className="space-y-10">
          <PlanSelector
            plans={plans}
            planId={activePlanId}
            loading={loading}
            error={error}
            onSelect={setPlanId}
          />
          {error && (
            <button
              type="button"
              onClick={refetch}
              className="text-xs font-medium text-accent underline underline-offset-4"
            >
              Retry loading plans
            </button>
          )}

          <BusinessInfoPanel values={business} onChange={updateBusiness} />
          <PaymentPanel
            isCustom={!!isCustom}
            submitting={submitting}
            applied={applied}
            onApplyCoupon={setApplied}
            planId={activePlanId}
          />
          {submitError && (
            <p className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
              {submitError}
            </p>
          )}
        </form>

        <aside className="hidden lg:block sticky top-24">
  {plan && pricing ? (
    <OrderSummary plan={plan} pricing={pricing} applied={applied} />
  ) : (
    loading && <PlanSelectorSkeleton />
  )}
</aside>
      </section>
    </>
  );
}