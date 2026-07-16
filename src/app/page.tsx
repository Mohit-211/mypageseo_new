import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { CredibilitySection } from "@/components/home/credibility-section";
import { LifestyleSection } from "@/components/home/lifestyle-section";
import { CustomerJourneySection } from "@/components/home/customer-journey-section";
import { SeoComparisonSection } from "@/components/home/seo-comparison-section";
import { ServicesSection } from "@/components/home/services-section";
import { SoftwareShowcaseSection } from "@/components/home/software-showcase-section";
import { HowWeWorkSection } from "@/components/home/how-we-work-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { ResultsSection } from "@/components/home/results-section";

export const metadata: Metadata = {
  title: "MyPageSEO — Local SEO Specialists for North American Businesses",
  description:
    "Rank higher on Google Maps and Google Business Profile. Expert Local SEO for law firms, dentists, contractors, restaurants and service businesses across the US and Canada.",
  openGraph: {
    title: "MyPageSEO — Local SEO Specialists",
    description:
      "Expert Local SEO plus proprietary auditing software. Win more customers from your service area.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CredibilitySection />
      <LifestyleSection />
      <CustomerJourneySection />
      <SeoComparisonSection />
      <ServicesSection />
      <SoftwareShowcaseSection />
      <HowWeWorkSection />
      <IndustriesSection />
      <ResultsSection />
    </div>
  );
}
