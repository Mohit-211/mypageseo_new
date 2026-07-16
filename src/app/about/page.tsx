import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { DifferentiatorsSection } from "@/components/about/differentiators-section";
import { SoftwareExtensionSection } from "@/components/about/software-extension-section";
import { PhilosophySection } from "@/components/about/philosophy-section";
import { ProcessSection } from "@/components/about/process-section";
import { IndustriesSection } from "@/components/about/industries-section";
import { TeamRolesSection } from "@/components/about/team-roles-section";
import { TransparencySection } from "@/components/about/transparency-section";
import { AboutFaq } from "@/components/about/about-faq";
import { AboutFinalCta } from "@/components/about/about-final-cta";

export const metadata: Metadata = {
  title: "About MyPageSEO — Local SEO Specialists Building Better Visibility",
  description:
    "MyPageSEO is a specialized Local SEO company combining experienced strategists with proprietary software to help North American businesses become the obvious choice in their local markets.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About MyPageSEO",
    description:
      "The story, philosophy and team behind MyPageSEO — the Local SEO company for North American businesses.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutStory />
      <DifferentiatorsSection />
      <SoftwareExtensionSection />
      <PhilosophySection />
      <ProcessSection />
      <IndustriesSection />
      <TeamRolesSection />
      <TransparencySection />
      <AboutFaq />
      <AboutFinalCta />
    </div>
  );
}
