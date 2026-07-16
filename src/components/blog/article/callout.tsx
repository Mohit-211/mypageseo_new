import type { ReactNode } from "react";
import { Lightbulb, AlertTriangle, Info, CheckCircle2, type LucideIcon } from "lucide-react";

type CalloutKind = "tip" | "mistake" | "fact" | "practice";

interface CalloutProps {
  kind: CalloutKind;
  title: string;
  children: ReactNode;
}

const calloutStyles: Record<
  CalloutKind,
  { icon: LucideIcon; bg: string; ring: string; text: string; label: string }
> = {
  tip: { icon: Lightbulb, bg: "bg-amber-50", ring: "ring-amber-200", text: "text-amber-900", label: "text-amber-700" },
  mistake: { icon: AlertTriangle, bg: "bg-rose-50", ring: "ring-rose-200", text: "text-rose-900", label: "text-rose-700" },
  fact: { icon: Info, bg: "bg-sky-50", ring: "ring-sky-200", text: "text-sky-900", label: "text-sky-700" },
  practice: { icon: CheckCircle2, bg: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-900", label: "text-emerald-700" },
};

export function Callout({ kind, title, children }: CalloutProps) {
  const map = calloutStyles[kind];
  const Icon = map.icon;
  return (
    <aside className={`not-prose my-8 rounded-2xl p-5 md:p-6 ${map.bg} ring-1 ${map.ring}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${map.label}`} />
        <div className="min-w-0">
          <div className={`text-xs font-bold uppercase tracking-wider ${map.label} mb-1`}>{title}</div>
          <div className={`text-sm leading-relaxed ${map.text}`}>{children}</div>
        </div>
      </div>
    </aside>
  );
}
