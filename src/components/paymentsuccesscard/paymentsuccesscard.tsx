"use client";

import * as React from "react";
import Link from "next/link";
import { getSubscriptionPaymentStatusAPI } from "@/api/subscription.api";

type PlanInfo = {
  _id: string;
  name: string;
  monthly_price: number;
  setup_fee: number;
};

type PaymentStatusData = {
  status: string;
  subscription_status: string;
  customer_name: string;
  customer_email: string;
  subscription_start_date: string;
  paid_amount: number;
  plan: PlanInfo;
};

type SubscriptionPaymentStatusResponse = {
  success: boolean;
  status: number;
  message: string;
  data: PaymentStatusData;
};

type Props = {
  subscriptionId: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatAmount(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export default function PaymentSuccess({ subscriptionId }: Props) {
  const [data, setData] = React.useState<PaymentStatusData | null>(null);
  const [status, setStatus] = React.useState<"loading" | "success" | "error">(
    "loading"
  );

  React.useEffect(() => {
    let cancelled = false;

    async function fetchStatus() {
      try {
        const res = await getSubscriptionPaymentStatusAPI(subscriptionId);
        if (cancelled) return;

        if (res.success && res.data) {
          setData(res.data);
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    fetchStatus();
    return () => {
      cancelled = true;
    };
  }, [subscriptionId]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-radial-soft px-5 py-8">
        <div className="w-full max-w-md rounded-2xl bg-card shadow-lift px-9 py-11 text-center">
          <p className="text-sm text-muted-foreground">
            Confirming your payment…
          </p>
        </div>
      </div>
    );
  }

  if (status === "error" || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-radial-soft px-5 py-8">
        <div className="w-full max-w-md rounded-2xl bg-card shadow-lift px-9 py-11 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            We couldn&apos;t confirm your payment status. If you were
            charged, contact support and we&apos;ll sort it out.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-surface-muted hover:text-card-foreground"
          >
            Back to Home Page
          </Link>
        </div>
      </div>
    );
  }

  const isSuccess = data.status === "SUCCESS";

  return (
    <div className="min-h-screen flex items-center justify-center bg-radial-soft px-5 py-8">
      <div className="animate-pop-in w-full max-w-md rounded-2xl bg-card shadow-lift overflow-hidden">
        <div className="px-9 pt-11 pb-4 text-center">
          <div className="relative mx-auto mb-6 flex h-17 w-17 items-center justify-center rounded-full bg-success-soft">
            <span className="animate-ring-pulse absolute inset-0 rounded-full" />
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
              <path
                className="animate-draw-check"
                d="M4 12.5L9.5 18L20 6"
                stroke="var(--color-success)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="mb-1.5 text-[0.8125rem] font-medium tracking-wide text-success">
            {isSuccess ? "Payment successful" : data.status}
          </p>
          <h1 className="mb-5 text-[1.375rem] font-semibold tracking-tight text-card-foreground">
            {data.customer_name
              ? `Welcome, ${data.customer_name.split(" ")[0]}`
              : "You're all set"}
          </h1>

          <div className="mb-1 font-display text-5xl leading-none text-card-foreground">
            {formatAmount(data.paid_amount)}
          </div>
          <p className="mb-2 text-[0.8125rem] text-muted-foreground">
            {data.plan.name} plan · billed to {data.customer_email}
          </p>
        </div>

        <hr className="border-t border-dashed border-border" />

        <div className="flex flex-col gap-3 px-9 py-6 text-left text-sm">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-muted-foreground">Plan</span>
            <span className="font-medium text-card-foreground">
              {data.plan.name}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-muted-foreground">Amount paid</span>
            <span className="font-medium text-card-foreground">
              {formatAmount(data.paid_amount)}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-muted-foreground">Subscription status</span>
            <span className="font-medium capitalize text-card-foreground">
              {data.subscription_status}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-muted-foreground">Started</span>
            <span className="font-medium text-card-foreground">
              {formatDate(data.subscription_start_date)}
            </span>
          </div>
        </div>

        <div className="receipt-tear h-3" />

        <div className="flex flex-col gap-2.5 px-9 pb-9 pt-6">
          <Link
            href="/"
            className="rounded-lg px-4 py-3 text-center text-sm font-medium text-muted-foreground transition hover:bg-surface-muted hover:text-card-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Back to Home page
          </Link>
        </div>
      </div>
    </div>
  );
}