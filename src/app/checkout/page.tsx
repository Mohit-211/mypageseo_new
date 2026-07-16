import type { Metadata } from "next";
import { CheckoutHeader } from "@/components/checkout/checkout-header";
import { CheckoutIntro } from "@/components/checkout/checkout-intro";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { TrustBadges } from "@/components/checkout/trust-badges";
import { CheckoutFaq } from "@/components/checkout/checkout-faq";
import { CheckoutFooter } from "@/components/checkout/checkout-footer";

export const metadata: Metadata = {
  title: "Secure Checkout — MyPageSEO",
  description:
    "Complete your MyPageSEO onboarding and start winning in local search.",
  robots: "noindex",
};

export default function CheckoutPage() {
  return (
    <div className="min-h-dvh bg-surface/40">
      <CheckoutHeader />
      <CheckoutIntro />
      <CheckoutForm />
      <TrustBadges />
      <CheckoutFaq />
      <CheckoutFooter />
    </div>
  );
}
