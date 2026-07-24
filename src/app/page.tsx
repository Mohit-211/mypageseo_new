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
  title: "Local SEO Experts for Businesses Across the US & Canada | MyPageSEO",

  description:
    "Grow your business with Local SEO that delivers measurable results. MyPageSEO helps businesses across the United States and Canada improve Google Maps rankings, optimize Google Business Profiles, manage citations, build online reputation, and generate more local customers.",

  keywords: [
    "Local SEO",
    "Local SEO Company",
    "Local SEO Agency",
    "Google Business Profile",
    "Google Business Profile Optimization",
    "Google Maps SEO",
    "Google Maps Ranking",
    "Citation Management",
    "Reputation Management",
    "Local Search Marketing",
    "Multi Location SEO",
    "Restaurant SEO",
    "Dentist SEO",
    "Law Firm SEO",
    "Contractor SEO",
    "Healthcare SEO",
    "Home Services SEO",
    "Small Business SEO",
    "US Local SEO",
    "Canada Local SEO",
    "MyPageSEO",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "MyPageSEO",
    title:
      "Local SEO Experts for Businesses Across the US & Canada | MyPageSEO",
    description:
      "Expert Local SEO, Google Business Profile optimization, citation management, reputation management, and intelligent reporting software for businesses across North America.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyPageSEO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Local SEO Experts | MyPageSEO",
    description:
      "Generate more customers with Local SEO, Google Maps optimization, and intelligent reporting software.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* <CredibilitySection /> */}
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
