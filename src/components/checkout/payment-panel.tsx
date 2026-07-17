"use client";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Info } from "lucide-react";
import { Panel } from "./panel";
import { validateCouponAPI } from "@/api/coupon.api";
import { AppliedCoupon, PlanId } from "./plans-data";

export function PaymentPanel({
  isCustom,
  submitting,
  applied,
  onApplyCoupon,
  planId,
}: {
  isCustom: boolean;
  submitting: boolean;
  applied: AppliedCoupon | null;
  onApplyCoupon: (coupon: AppliedCoupon | null) => void;
  planId?: PlanId | null;
}) {
  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState<string | null>(null);
  const [validating, setValidating] = useState(false);

  async function applyCoupon() {
    const code = couponInput.trim().toUpperCase();
    if (!code) return;

    if (!planId) {
      setCouponError("Please select a plan first.");
      return;
    }

    setValidating(true);
    setCouponError(null);

    try {
      const res = await validateCouponAPI({ coupon_code: code, plan_id: planId });

      if (!res.success || !res.data?.valid) {
        onApplyCoupon(null);
        setCouponError(res.message || "That code isn't valid. Please try another.");
        return;
      }

      const { original_amount, discount_amount, final_amount,monthly_amount } = res.data;

      if (
        typeof original_amount !== "number" ||
        typeof discount_amount !== "number" ||
        typeof final_amount !== "number"||
        typeof monthly_amount !=="number"

      ) {
        onApplyCoupon(null);
        setCouponError("Couldn't validate coupon. Please try again.");
        return;
      }

      onApplyCoupon({
        code,
        label: `Save $${discount_amount.toLocaleString()}`,
        originalAmount: original_amount,
        discountAmount: discount_amount,
        finalAmount: final_amount,
        monthlyAmount:monthly_amount,

      });
    } catch (err: any) {
      onApplyCoupon(null);
      setCouponError(
        err?.response?.data?.message ?? "Couldn't validate coupon. Please try again."
      );
    } finally {
      setValidating(false);
    }
  }

  return (
    <Panel step="3" title="Payment" subtitle="Encrypted end-to-end. Cancel anytime after your foundation period.">
      <div className="mb-6">
        <div className="animate-fade-in">
          <label className="text-xs font-medium text-muted-foreground">
            Coupon code
          </label>
          <div className="mt-2 flex gap-2">
            <input
              value={couponInput}
              onChange={(e) => {
                setCouponInput(e.target.value);
                setCouponError(null);
              }}
              placeholder="Enter code"
              disabled={validating}
              className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm uppercase tracking-wider text-foreground placeholder:normal-case placeholder:tracking-normal placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
            />
            <button
              type="button"
              onClick={applyCoupon}
              disabled={validating}
              className="rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {validating ? "Checking…" : "Apply"}
            </button>
          </div>
          {applied && (
            <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-accent animate-fade-in">
              <BadgeCheck className="h-3.5 w-3.5" /> {applied.label} applied
            </p>
          )}
          {couponError && (
            <p className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
              <Info className="h-3.5 w-3.5" /> {couponError}
            </p>
          )}
        </div>
      </div>
      <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
        By proceeding, you agree to our{" "}
        <a href="#" className="text-primary underline-offset-4 hover:underline">
          Terms &amp; Conditions
        </a>{" "}
        and{" "}
        <a href="#" className="text-primary underline-offset-4 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
      <button
        type="submit"
        disabled={submitting || isCustom}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground shadow-lift transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {submitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground" />
            Processing…
          </>
        ) : isCustom ? (
          <>
            Contact sales for Enterprise pricing <ArrowRight className="h-4 w-4" />
          </>
        ) : (
          <>
            Start My Local SEO Journey <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      {isCustom && (
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Enterprise plans are custom-scoped. Our team will reach out within one business day.
        </p>
      )}
    </Panel>
  );
}