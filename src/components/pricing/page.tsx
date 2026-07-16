import type { Metadata } from "next";
import { PricingHeroAndCards } from "@/components/pricing/pricing-hero-and-cards";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { IncludedFeatures } from "@/components/pricing/included-features";
import { SoftwareSpotlight } from "@/components/pricing/software-spotlight";
import { RoiCalculator } from "@/components/pricing/roi-calculator";
import { Testimonials } from "@/components/pricing/testimonials";
import { LifestyleStrip } from "@/components/pricing/lifestyle-strip";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { PricingCta } from "@/components/pricing/pricing-cta";

export const metadata: Metadata = {
  title: "Pricing — Local SEO Plans That Scale | MyPageSEO",
  description:
    "Transparent Local SEO pricing for single-location businesses to multi-location enterprises across the US and Canada.",
  alternates: {
    canonical: "/get-started",
  },
  openGraph: {
    title: "MyPageSEO Pricing — Local SEO Plans",
    description:
      "Simple, scalable Local SEO plans backed by proprietary reporting software. Base, Standard, Elite, and Enterprise.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function GetStartedPage() {
  return (
    <div className="bg-background">
      <PricingHeroAndCards />
      <ComparisonTable />
      <IncludedFeatures />
      <SoftwareSpotlight />
      <RoiCalculator />
      <Testimonials />
      <LifestyleStrip />
      <PricingFaq />
      <PricingCta />
    </div>
  );
}
