import type { Metadata } from "next";
import { InsightsPage } from "@/components/blog/insights-page";

export const metadata: Metadata = {
  title: "Insights — Local SEO, Google Business Profile & More | MyPageSEO",
  description:
    "Practical Local SEO knowledge, GBP strategies, case studies, software updates and actionable guides for businesses across the U.S. and Canada.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "MyPageSEO Insights",
    description: "Insights for businesses that want to win local search.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function BlogPage() {
  return <InsightsPage />;
}
