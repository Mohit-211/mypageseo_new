"use client";

import { useSearchParams } from "next/navigation";
import PaymentSuccess from "@/components/paymentsuccesscard/paymentsuccesscard";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();

  const subscriptionId = searchParams.get("subscription_id");
  const baToken = searchParams.get("ba_token");
  const token = searchParams.get("token");

  if (!subscriptionId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-radial-soft px-5 py-8">
        <p className="text-sm text-muted-foreground">
          Missing subscription reference. Please check the link and try again.
        </p>
      </div>
    );
  }

  return <PaymentSuccess subscriptionId={subscriptionId} />;
}