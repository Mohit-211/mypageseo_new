import { services } from "@/components/services/services-data";

/**
 * Static navigation — matches the actual routes under /app.
 * "Services" carries a dropdown of the six individual service routes
 * (/services/[slug]), generated from services-data.ts so it can never
 * drift out of sync with the actual service pages.
 *
 * Kept deliberately short: Home, Services, Software, Contact Us. "Get
 * Started" is rendered as a standalone CTA button in header.tsx, not a
 * nav item. Everything else the site has — About, Industries, Blog,
 * Legal, Pricing — lives in the footer instead of the top nav.
 *
 * There is no standalone "Pricing" nav item — pricing now lives on the
 * MyPageSEO service page itself (/services/mypageseo). The old /pricing
 * route permanently redirects there.
 */
export type NavChild = { to: string; label: string };
export type NavItem = { to: string; label: string; children?: NavChild[] };

export const staticNav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/services",
    label: "Services",
    children: services.map((s) => ({
      to: `/services/${s.slug}`,
      label: s.name,
    })),
  },
  { to: "/software", label: "Software" },
  { to: "/contact", label: "Contact Us" },
];
