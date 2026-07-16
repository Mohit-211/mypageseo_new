import {
  MapPin,
  Star,
  Search,
  Navigation,
  Phone,
  TrendingUp,
} from "lucide-react";

export function HeroDashboard() {
  return (
    <div className="relative w-full">
      {/* soft glow */}
      <div
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-2xl"
        aria-hidden
      />

      {/* main dashboard card */}
      <div className="relative rounded-3xl border border-border bg-card shadow-lift overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <div className="ml-4 flex items-center gap-2 rounded-md bg-background px-2.5 py-1 text-xs text-muted-foreground border border-border">
            <MapPin className="h-3 w-3 text-accent" />
            app.mypageseo.com / overview
          </div>
        </div>

        <div className="p-5 grid grid-cols-6 gap-4">
          {/* GBP Score */}
          <div className="col-span-3 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-5">
            <div className="flex items-center justify-between text-xs uppercase tracking-wider text-primary-foreground/70">
              <span>Google Business Profile</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/20 px-2 py-0.5 text-emerald-200 text-[10px]">
                <TrendingUp className="h-3 w-3" /> +6.2%
              </span>
            </div>
            <div className="mt-3 flex items-end gap-3">
              <div className="font-display text-6xl leading-none">94</div>
              <div className="text-primary-foreground/70 pb-1.5 text-sm">
                / 100 health
              </div>
            </div>
            <div className="mt-4 space-y-2 text-[11px]">
              {[
                ["Categories", 100],
                ["Services", 92],
                ["Photos", 88],
                ["Posts", 76],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <div className="flex justify-between text-primary-foreground/70">
                    <span>{k}</span>
                    <span>{v}%</span>
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full"
                      style={{ width: `${v}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Local Rankings */}
          <div className="col-span-3 rounded-2xl bg-surface p-5 ring-soft">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Local Keyword Rankings
              </div>
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <ul className="mt-3 space-y-2.5 text-sm">
              {[
                ["dentist near me", 2, "up"],
                ["emergency dentist calgary", 1, "up"],
                ["invisalign specialist", 3, "same"],
                ["dental implants downtown", 5, "up"],
              ].map(([kw, rank, dir]) => (
                <li
                  key={kw as string}
                  className="flex items-center justify-between"
                >
                  <span className="text-foreground truncate mr-2">{kw}</span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-semibold ${
                      (rank as number) <= 3
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    #{rank}
                    {dir === "up" && <TrendingUp className="h-3 w-3" />}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Citation Health */}
          <div className="col-span-2 rounded-2xl bg-surface p-4 ring-soft">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Citations
            </div>
            <div className="mt-2 font-display text-3xl text-foreground">
              142<span className="text-sm text-muted-foreground">/150</span>
            </div>
            <div className="mt-3 flex gap-1 flex-wrap">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-3 rounded-full ${
                    i < 22 ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              NAP consistent
            </div>
          </div>

          {/* Reviews */}
          <div className="col-span-2 rounded-2xl bg-surface p-4 ring-soft">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Reviews
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-3xl">4.9</span>
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </div>
            <div className="mt-1 text-xs text-muted-foreground">312 total</div>
            <div className="mt-3 flex items-end gap-1 h-8">
              {[3, 5, 7, 6, 9, 11, 14].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-accent/70"
                  style={{ height: `${h * 6}%` }}
                />
              ))}
            </div>
          </div>

          {/* Heat map / Grid */}
          <div className="col-span-2 rounded-2xl bg-surface p-4 ring-soft">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Map visibility
              </div>
              <Navigation className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <div className="mt-3 grid grid-cols-5 gap-1">
              {Array.from({ length: 25 }).map((_, i) => {
                const rank = ((i * 3) % 15) + 1;
                const bg =
                  rank <= 3
                    ? "bg-emerald-400"
                    : rank <= 8
                    ? "bg-amber-300"
                    : "bg-rose-300";
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm ${bg} grid place-items-center text-[8px] font-bold text-primary/80`}
                  >
                    {rank}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating card 1 — direction requests */}
      <div className="absolute -left-4 md:-left-10 top-40 rounded-2xl border border-border bg-card/90 backdrop-blur-xl shadow-lift p-4 w-56 animate-float hidden sm:block">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Navigation className="h-3.5 w-3.5 text-accent" />
          Direction requests
        </div>
        <div className="mt-2 font-display text-3xl">+184</div>
        <div className="mt-1 text-xs text-emerald-600 font-medium inline-flex items-center gap-1">
          <TrendingUp className="h-3 w-3" /> this week
        </div>
      </div>

      {/* Floating card 2 — phone calls */}
      <div
        className="absolute -right-4 md:-right-10 bottom-16 rounded-2xl border border-border bg-card/90 backdrop-blur-xl shadow-lift p-4 w-56 hidden sm:block"
        style={{ animation: "float 7s ease-in-out infinite 1s" }}
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Phone className="h-3.5 w-3.5 text-accent" />
          Calls from GBP
        </div>
        <div className="mt-2 font-display text-3xl">+82%</div>
        <div className="mt-1 text-xs text-muted-foreground">
          vs last 30 days
        </div>
      </div>
    </div>
  );
}
