import type { Metadata } from "next";
import { ServicesOverview } from "@/components/services/services-overview";
import { WhySection } from "@/components/services/why-section";
import { CtaSection } from "@/components/services/cta-section";

export const metadata: Metadata = {
  title: "Services — MyPageSEO",
  description:
    "MyPageSEO's Local SEO services — search, advertising, social, reputation, content, and web, delivered by one team.",
  openGraph: {
    title: "MyPageSEO Services",
    description: "Six Local SEO services, delivered by one dedicated team.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <ServicesOverview />
      <WhySection />
      <CtaSection />
    </div>
  );
}
