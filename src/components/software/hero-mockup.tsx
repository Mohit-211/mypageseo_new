import { MapPin, Star, Radar } from "lucide-react";
import {
  BrowserFrame,
  ScoreRing,
  Bar,
  HeatGrid,
  Sparkline,
} from "@/components/software/ui-primitives";

export function HeroMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-8 bg-radial-soft rounded-[3rem] blur-2xl opacity-70"
      />
      <BrowserFrame title="app.mypageseo.com/dashboard" className="relative">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">
                  Local SEO Score
                </div>
                <div className="text-sm font-semibold text-foreground">
                  Downtown Location
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 font-medium">
                +12 this month
              </span>
            </div>
            <ScoreRing value={87} label="Overall local performance" />
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl bg-surface-muted p-3">
                <div className="text-[10px] text-muted-foreground">
                  GBP Health
                </div>
                <div className="text-lg font-semibold text-primary">94</div>
              </div>
              <div className="rounded-xl bg-surface-muted p-3">
                <div className="text-[10px] text-muted-foreground">
                  Citations
                </div>
                <div className="text-lg font-semibold text-primary">78</div>
              </div>
              <div className="rounded-xl bg-surface-muted p-3">
                <div className="text-[10px] text-muted-foreground">Reviews</div>
                <div className="text-lg font-semibold text-primary">4.7★</div>
              </div>
            </div>
            <div className="rounded-xl bg-surface-muted p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-foreground">
                  Local Visibility (30d)
                </span>
                <span className="text-[10px] text-emerald-700">▲ 18.4%</span>
              </div>
              <Sparkline
                points={[40, 45, 43, 52, 58, 55, 62, 68, 66, 74, 78, 82]}
              />
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-medium text-foreground flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" /> Visibility Heatmap
            </div>
            <HeatGrid />
            <div className="text-[10px] text-muted-foreground">
              Grid ranks for "dentist near me"
            </div>
          </div>
        </div>
      </BrowserFrame>

      <div className="hidden md:block absolute -left-8 top-24 w-56 rounded-2xl bg-card ring-soft shadow-lift p-4 animate-float">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <Star className="w-4 h-4 text-accent" />
          </div>
          <div>
            <div className="text-xs font-semibold">Reviews This Week</div>
            <div className="text-[10px] text-muted-foreground">
              Avg 4.8 · 12 new
            </div>
          </div>
        </div>
        <div className="flex items-end gap-1 h-12">
          {[6, 8, 5, 9, 12, 10, 14].map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-primary/80"
              style={{ height: `${(v / 14) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div
        className="hidden md:block absolute -right-6 bottom-16 w-64 rounded-2xl bg-card ring-soft shadow-lift p-4 animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="text-xs font-semibold mb-3 flex items-center gap-1.5">
          <Radar className="w-3.5 h-3.5 text-primary" /> Competitor Snapshot
        </div>
        <div className="space-y-2">
          <Bar label="Your business" value={87} />
          <Bar label="Competitor A" value={72} tone="accent" />
          <Bar label="Competitor B" value={64} tone="accent" />
        </div>
      </div>
    </div>
  );
}
