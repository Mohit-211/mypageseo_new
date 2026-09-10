import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  services,
  getServiceBySlug,
} from "@/components/services/services-data";
import { ServiceSection } from "@/components/services/service-section";
import { CtaSection } from "@/components/services/cta-section";

type Props = { params: Promise<{ slug: string }> };

// "mypageseo" has its own static route at app/services/mypageseo/page.tsx
// with a bespoke layout (pricing embedded, no generic ServiceSection).
// Next.js always matches the static route over this dynamic one for the
// same path, so this exclusion is mainly to avoid generating a redundant
// param and keep generateStaticParams() honest about what this template
// actually renders.
const genericServices = services.filter((s) => s.slug !== "mypageseo");

export function generateStaticParams() {
  return genericServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} — MyPageSEO`,
    description: service.tagline,
    openGraph: {
      title: `${service.name} — MyPageSEO`,
      description: service.tagline,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  // Defense-in-depth: mypageseo should never actually render through this
  // template, since app/services/mypageseo/page.tsx takes priority.
  if (slug === "mypageseo") notFound();

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div id="top" className="bg-background">
      <ServiceSection service={service} />
      <CtaSection />
    </div>
  );
}
