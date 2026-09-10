import type { Metadata } from "next";
import { MypageseoIntro } from "@/components/services/mypageseo/mypageseo-intro";
import { PricingSection } from "@/components/services/mypageseo/pricing-section";
import { BonusBanner } from "@/components/services/mypageseo/bonus-banner";
import { ServiceComparisonTable } from "@/components/services/mypageseo/service-comparison-table";
import { PricingFaq } from "@/components/services/mypageseo/pricing-faq";
import { CtaSection } from "@/components/services/cta-section";

export const metadata: Metadata = {
  title: "MyPageSEO — Local SEO Pricing & Plans",
  description:
    "Simple, transparent Local SEO pricing. Every MyPageSEO plan includes Google Business Profile posting, automatic review replies, citation management, and our proprietary reporting software — no long-term contract.",
  openGraph: {
    title: "MyPageSEO — Local SEO Pricing & Plans",
    description:
      "Transparent Local SEO pricing for businesses across the US and Canada. No contracts, no hidden fees.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/services/mypageseo" },
};

export default function MyPageSeoPage() {
  return (
    <div id="top" className="bg-background">
      <MypageseoIntro />
      <PricingSection />
      <BonusBanner />
      <ServiceComparisonTable />
      <PricingFaq />
      <CtaSection />
    </div>
  );
}
