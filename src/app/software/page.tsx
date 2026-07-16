import type { Metadata } from "next";
import { HeroSection } from "@/components/software/hero-section";
import { FeaturesSection } from "@/components/software/features-section";
import { ShowcaseSection } from "@/components/software/showcase-section";
import { WorkflowSection } from "@/components/software/workflow-section";
import { ReportsSection } from "@/components/software/reports-section";
import { IntelligenceSection } from "@/components/software/intelligence-section";
import { ComparisonSection } from "@/components/software/comparison-section";
import { AudiencesSection } from "@/components/software/audiences-section";
import { StatsSection } from "@/components/software/stats-section";
import { FaqSection } from "@/components/software/faq-section";
import { CtaSection } from "@/components/software/cta-section";

export const metadata: Metadata = {
  title: "MyPageSEO Software — Local SEO Reporting & Auditing Platform",
  description:
    "Intelligent Local SEO software that turns Google Business Profile, citations, rankings and review data into clear, actionable reports.",
  openGraph: {
    title: "MyPageSEO Software — Local SEO Reporting Platform",
    description:
      "Better Local SEO decisions begin with better data. Purpose-built reporting for local businesses and agencies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/software",
  },
};

export default function SoftwarePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <WorkflowSection />
      <ReportsSection />
      <IntelligenceSection />
      <ComparisonSection />
      <AudiencesSection />
      <StatsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
