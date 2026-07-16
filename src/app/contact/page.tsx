import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfoCards } from "@/components/contact/contact-info-cards";
import { HelpCards } from "@/components/contact/help-cards";
import { ProcessSteps } from "@/components/contact/process-steps";
import { ServiceAreaMap } from "@/components/contact/service-area-map";
import { TrustSection } from "@/components/contact/trust-section";
import { LifestyleBand } from "@/components/contact/lifestyle-band";
import { FaqSection } from "@/components/contact/faq-section";
import { ContactCTA } from "@/components/contact/contact-cta";

export const metadata: Metadata = {
  title: "Contact MyPageSEO — Let's Talk About Local SEO",
  description:
    "Talk to the MyPageSEO team about Local SEO services, Google Business Profile optimization, or a software demo. Most inquiries answered within one business day.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact MyPageSEO",
    description: "Start a conversation about growing your local visibility.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactHero />

      {/* FORM + CONTACT INFO */}
      <section className="py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
          <ContactForm />
          <ContactInfoCards />
        </div>
      </section>

      <HelpCards />
      <ProcessSteps />
      <ServiceAreaMap />
      <TrustSection />
      <LifestyleBand />
      <FaqSection />
      <ContactCTA />
    </div>
  );
}
