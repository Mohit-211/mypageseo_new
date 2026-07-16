import type { Metadata } from "next";
import { services } from "@/components/services/services-data";
import { ServicesOverview } from "@/components/services/services-overview";
import { ServiceSection } from "@/components/services/service-section";
import { CtaSection } from "@/components/services/cta-section";

export const metadata: Metadata = {
  title: "Product Ecosystem — MyPageSEO",
  description:
    "The MyPageSEO product ecosystem — proprietary software for Local SEO, ads, social, reputation, content, and websites.",
  openGraph: {
    title: "MyPageSEO Product Ecosystem",
    description: "Six integrated products built for businesses that live and die by local search.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div id="top" className="bg-background">
      <ServicesOverview />

      {services.map((service) => (
        <ServiceSection key={service.slug} service={service} />
      ))}

      <CtaSection />
    </div>
  );
}
