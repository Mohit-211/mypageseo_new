import { MapPinned, ShieldCheck } from "lucide-react";

const perfBars = [35, 48, 42, 58, 52, 66, 72, 68, 82, 88, 91, 97];
const perfStats: [string, string][] = [
  ["Calls", "+82%"],
  ["Directions", "+184"],
  ["GBP Score", "94"],
];
const teamAvatars = [
  { c: "bg-primary", i: "AC" },
  { c: "bg-accent", i: "MK" },
  { c: "bg-primary/80", i: "JR" },
];

export function TeamIllustration() {
  return (
    <div className="relative w-full">
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-2xl" aria-hidden />

      {/* Office frame */}
      <div className="relative rounded-3xl border border-border bg-surface shadow-lift p-6 md:p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-surface-muted" aria-hidden />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" aria-hidden />

        <div className="relative">
          {/* Big monitor */}
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card shadow-lift overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-amber-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-[10px] text-muted-foreground">Local performance — Q3</span>
            </div>
            <div className="p-4">
              <div className="flex items-end gap-1.5 h-24">
                {perfBars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-primary/40" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
                {perfStats.map(([k, v]) => (
                  <div key={k} className="rounded-md bg-surface-muted p-2">
                    <div className="text-muted-foreground">{k}</div>
                    <div className="mt-0.5 font-semibold text-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desk */}
          <div className="mt-4 h-3 rounded-full bg-border/70" />

          {/* Team row */}
          <div className="mt-6 flex justify-center gap-4 md:gap-8">
            {teamAvatars.map((p, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className={`h-9 w-9 rounded-full ${p.c} text-white grid place-items-center text-[11px] font-semibold`}>{p.i}</div>
                <div className="mt-2 w-14 h-8 rounded-t-md bg-card border border-border grid place-items-center">
                  <div className="h-4 w-10 rounded-sm bg-primary/10" />
                </div>
                <div className="w-16 h-1 rounded-b-md bg-border" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating map card */}
      <div className="absolute -left-4 md:-left-10 top-24 rounded-2xl border border-border bg-card/90 backdrop-blur-xl shadow-lift p-4 w-52 animate-float hidden sm:block">
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
          <MapPinned className="h-3 w-3 text-accent" /> Local grid
        </div>
        <div className="mt-2 grid grid-cols-5 gap-1">
          {Array.from({ length: 20 }).map((_, i) => {
            const r = ((i * 3) % 12) + 1;
            const c = r <= 3 ? "bg-emerald-400" : r <= 7 ? "bg-amber-300" : "bg-rose-300/80";
            return <div key={i} className={`aspect-square rounded-sm ${c}`} />;
          })}
        </div>
      </div>

      {/* Floating GBP card */}
      <div
        className="absolute -right-4 md:-right-10 bottom-16 rounded-2xl border border-border bg-card/90 backdrop-blur-xl shadow-lift p-4 w-56 hidden sm:block"
        style={{ animation: "float 7s ease-in-out infinite 1s" }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">GBP Audit</div>
          <ShieldCheck className="h-3.5 w-3.5 text-accent" />
        </div>
        <div className="mt-2 font-display text-3xl">
          94<span className="text-sm text-muted-foreground">/100</span>
        </div>
        <div className="mt-2 h-1 rounded-full bg-surface-muted overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: "94%" }} />
        </div>
      </div>
    </div>
  );
}
