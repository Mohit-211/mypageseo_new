import type { Metadata } from "next";
import { HeroSection } from "@/components/industries/hero-section";
import { PhotosBandSection } from "@/components/industries/photos-band-section";
import { IndustryFilterGrid } from "@/components/industries/industry-filter-grid";
import { ChallengesSection } from "@/components/industries/challenges-section";
import { WorkflowSection } from "@/components/industries/workflow-section";
import { ServicesSection } from "@/components/industries/services-section";
import { MapSection } from "@/components/industries/map-section";
import { FaqSection } from "@/components/industries/faq-section";
import { CtaSection } from "@/components/industries/cta-section";

export const metadata: Metadata = {
  title: "Industries We Serve — Local SEO by Industry | MyPageSEO",
  description:
    "MyPageSEO builds industry-specific Local SEO campaigns for medical, legal, home services, retail, hospitality, and more across the US and Canada.",
  openGraph: {
    title: "Industries We Serve — MyPageSEO",
    description:
      "Local SEO strategies tailored to your industry — from dentists and law firms to HVAC, restaurants, and multi-location brands.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <PhotosBandSection />
      <IndustryFilterGrid />
      <ChallengesSection />
      <WorkflowSection />
      <ServicesSection />
      <MapSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
