import { BadgeCheck, Cpu, Handshake, ShieldCheck, Users } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Secure payments" },
  { icon: BadgeCheck, label: "Transparent pricing" },
  { icon: Users, label: "Dedicated specialists" },
  { icon: Cpu, label: "Proprietary software" },
  { icon: Handshake, label: "Personalized onboarding" },
];

export function TrustBadges() {
  return (
    <section className="container-page py-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {trustItems.map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background p-4 shadow-card"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/5 text-primary">
              <t.icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="text-sm font-medium text-foreground">{t.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
