import { CheckCircle2, MapPin, MessageSquare } from "lucide-react";

export function HeroArt() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[3rem] bg-radial-soft blur-2xl opacity-70" />
      <div className="relative rounded-2xl bg-card ring-soft shadow-lift overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-muted">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <div className="mx-auto text-xs text-muted-foreground font-medium">Customer Success · Live Session</div>
        </div>
        <div className="p-6 grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">CS</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-foreground">Casey — Success Specialist</div>
                <div className="text-[10px] text-muted-foreground">Reviewing your Local SEO snapshot</div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 font-medium">Live</span>
            </div>
            <div className="rounded-xl bg-surface-muted p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-foreground">Local Visibility (30d)</span>
                <span className="text-[10px] text-emerald-700">▲ 22.6%</span>
              </div>
              <svg viewBox="0 0 240 60" className="w-full h-12">
                <path d="M0 50 L20 44 L40 46 L60 38 L80 34 L100 30 L120 22 L140 26 L160 18 L180 14 L200 10 L220 8 L240 4" fill="none" stroke="oklch(0.36 0.036 220)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M0 50 L20 44 L40 46 L60 38 L80 34 L100 30 L120 22 L140 26 L160 18 L180 14 L200 10 L220 8 L240 4 L240 60 L0 60 Z" fill="oklch(0.36 0.036 220 / 0.08)" />
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "GBP Health", v: "94" },
                { l: "Rankings", v: "+18" },
                { l: "Reviews", v: "4.8★" },
              ].map((x) => (
                <div key={x.l} className="rounded-xl bg-surface-muted p-3">
                  <div className="text-[10px] text-muted-foreground">{x.l}</div>
                  <div className="text-lg font-semibold text-primary">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-medium text-foreground flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" /> Maps visibility
            </div>
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: 25 }).map((_, i) => {
                const x = i % 5, y = Math.floor(i / 5);
                const d = Math.hypot(x - 2, y - 2);
                const v = Math.max(1, 10 - Math.round(d * 2));
                const color = v >= 8 ? "bg-emerald-500" : v >= 5 ? "bg-amber-400" : v >= 3 ? "bg-orange-400" : "bg-rose-500/80";
                return <div key={i} className={`aspect-square rounded ${color} text-[9px] text-white flex items-center justify-center font-semibold`}>{v}</div>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute -left-6 bottom-10 w-56 rounded-2xl bg-card ring-soft shadow-lift p-4 animate-float">
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-4 h-4 text-accent" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-foreground">Hi Sarah 👋</div>
            <div className="text-[11px] text-muted-foreground leading-snug">I pulled up your GBP audit — three quick wins to walk through.</div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute -right-6 top-16 w-52 rounded-2xl bg-card ring-soft shadow-lift p-4 animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-semibold">Response time</span>
        </div>
        <div className="text-[11px] text-muted-foreground">Avg reply · <span className="text-foreground font-medium">under 6 hours</span></div>
      </div>
    </div>
  );
}
