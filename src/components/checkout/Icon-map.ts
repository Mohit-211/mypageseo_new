import {
  CreditCard,
  Shield,
  Zap,
  Building2,
  type LucideIcon,
} from "lucide-react";

// Central source of truth for mapping the API's `plan.icon` string
// to an actual lucide-react component. Add new entries here as new
// plan icons are introduced on the backend.
export const PLAN_ICONS: Record<string, LucideIcon> = {
  "credit-card": CreditCard,
  shield: Shield,
  zap: Zap,
  building: Building2,
};

const DEFAULT_ICON: LucideIcon = CreditCard;

export function getPlanIcon(name: string): LucideIcon {
  return PLAN_ICONS[name] ?? DEFAULT_ICON;
}