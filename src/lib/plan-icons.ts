import {
  Rocket,
  Zap,
  TrendingUp,
  Building2,
  Star,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// Order matters — first match wins. Add new rules as new plan names appear.
const ICON_RULES: { match: RegExp; icon: LucideIcon }[] = [
  { match: /starter|basic|launch/i, icon: Rocket },
  { match: /standard|growth|core/i, icon: Zap },
  { match: /pro|premium|scale/i, icon: TrendingUp },
  { match: /enterprise|custom/i, icon: Building2 },
  { match: /elite|vip/i, icon: Star },
];

export function resolvePlanIcon(name: string): LucideIcon {
  const rule = ICON_RULES.find((r) => r.match.test(name));
  return rule ? rule.icon : Sparkles; // fallback
}