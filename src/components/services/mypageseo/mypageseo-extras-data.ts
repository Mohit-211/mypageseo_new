import { CalendarCheck2, MessageSquare, type LucideIcon } from "lucide-react";

/**
 * "Us vs. others" comparison table rows for the /services/mypageseo page.
 *
 * NOTE: these are placeholder/illustrative claims modeled on the competitor
 * layout Mohit shared (PagePros' RankPRO page). Verify each row against
 * what MyPageSEO actually delivers before this goes live — competitive
 * claims should be accurate and defensible.
 */
export const serviceCompareRows: {
  label: string;
  ours: string;
  others: string;
}[] = [
  {
    label: "Contract terms",
    ours: "Month-to-month, no contract",
    others: "3–12 month contracts",
  },
  {
    label: "Google Business Profile posting",
    ours: "Included, every month",
    others: "Often a paid add-on",
  },
  {
    label: "Review replies",
    ours: "Automatic, every review",
    others: "Manual, or not offered",
  },
  {
    label: "Citation submissions",
    ours: "Full directory network",
    others: "Limited directory lists",
  },
  {
    label: "Reporting software",
    ours: "Included proprietary dashboard",
    others: "Licensed or unavailable",
  },
  {
    label: "Strategy support",
    ours: "Dedicated Local SEO strategist",
    others: "Shared account managers",
  },
];

/**
 * The two "included free" bonuses highlighted in the sales banner —
 * regular GBP posting and automatic review replies. Content can be
 * updated later without touching the banner component itself.
 */
export type BonusPoint = { icon: LucideIcon; title: string; copy: string };

export const bonusPoints: BonusPoint[] = [
  {
    icon: CalendarCheck2,
    title: "Regular Google Business Profile Posting",
    copy: "Fresh, locally-optimized posts published to your profile on a consistent schedule — done for you, every month.",
  },
  {
    icon: MessageSquare,
    title: "Automatic Review Replies",
    copy: "Every new Google review gets a thoughtful, on-brand response — so no customer ever feels ignored.",
  },
];
