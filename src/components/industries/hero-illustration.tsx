import { UtensilsCrossed, Scale, HeartPulse, HardHat, MapPin, Home, ShoppingBag, Star, BarChart3, type LucideIcon } from "lucide-react";

function MiniPanel({ icon: Icon, label, value, delta }: { icon: LucideIcon; label: string; value: string; delta: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-surface/50 p-3">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-accent" />
        <span className="text-[10px] font-medium">{label}</span>
      </div>
      <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
      <p className="text-[10px] font-semibold text-accent">{delta}</p>
    </div>
  );
}

export function HeroIllustration() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl -z-10" />
      <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-lift">
        {/* Map surface */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface/60">
          <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-border" />
              </pattern>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="300" fill="url(#grid)" />
            {/* Roads */}
            <path d="M0 210 Q 120 180 200 200 T 400 190" stroke="currentColor" className="text-border" strokeWidth="1.5" fill="none" />
            <path d="M60 0 Q 80 120 130 180 T 200 300" stroke="currentColor" className="text-border" strokeWidth="1.5" fill="none" />
            <path d="M400 90 Q 300 100 250 140 T 120 260" stroke="currentColor" className="text-border" strokeWidth="1.5" fill="none" />
            {/* Glow circles */}
            <circle cx="140" cy="150" r="70" fill="url(#glow)" />
            <circle cx="280" cy="180" r="60" fill="url(#glow)" />
          </svg>

          {/* Business pins */}
          {[
            { x: "22%", y: "38%", icon: UtensilsCrossed },
            { x: "58%", y: "28%", icon: Scale },
            { x: "72%", y: "58%", icon: HeartPulse },
            { x: "38%", y: "62%", icon: HardHat },
            { x: "50%", y: "44%", icon: MapPin, primary: true },
            { x: "18%", y: "72%", icon: Home },
            { x: "82%", y: "38%", icon: ShoppingBag },
          ].map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-fade-in"
                style={{ left: p.x, top: p.y, animationDelay: `${i * 120}ms` }}
              >
                <div
                  className={`relative grid place-items-center h-10 w-10 rounded-full shadow-lift ${
                    p.primary ? "bg-accent text-accent-foreground" : "bg-background text-primary border border-border/70"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                  {p.primary && <span className="absolute inset-0 rounded-full ring-4 ring-accent/30 animate-ping" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mini panels */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <MiniPanel icon={Star} label="Reviews" value="4.9" delta="+38" />
          <MiniPanel icon={MapPin} label="Map rank" value="#2" delta="+6" />
          <MiniPanel icon={BarChart3} label="Calls" value="482" delta="+63%" />
        </div>
      </div>
    </div>
  );
}
