export function BrowserFrame({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-card ring-soft shadow-lift overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-muted">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="mx-auto text-xs text-muted-foreground font-medium truncate">{title}</div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function ScoreRing({ value, label, size = 96 }: { value: number; label: string; size?: number }) {
  const r = size / 2 - 8;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth="8" className="stroke-primary-soft" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={off}
          className="stroke-primary transition-all duration-1000"
        />
      </svg>
      <div>
        <div className="text-3xl font-semibold text-primary">
          {value}
          <span className="text-base text-muted-foreground">/100</span>
        </div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

export function Bar({ label, value, tone = "primary" }: { label: string; value: number; tone?: "primary" | "accent" }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-foreground/80">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-primary-soft overflow-hidden">
        <div
          className={`h-full rounded-full ${tone === "accent" ? "bg-accent" : "bg-primary"}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function HeatGrid() {
  const cells = Array.from({ length: 49 }, (_, i) => {
    const x = i % 7,
      y = Math.floor(i / 7);
    const cx = 3,
      cy = 3;
    const d = Math.hypot(x - cx, y - cy);
    const v = Math.max(1, 10 - Math.round(d * 1.8));
    return v;
  });
  const color = (v: number) =>
    v >= 8 ? "bg-emerald-500" : v >= 5 ? "bg-amber-400" : v >= 3 ? "bg-orange-400" : "bg-rose-500/80";
  return (
    <div className="grid grid-cols-7 gap-1.5">
      {cells.map((v, i) => (
        <div
          key={i}
          className={`aspect-square rounded ${color(v)} text-[10px] text-white flex items-center justify-center font-semibold`}
        >
          {v}
        </div>
      ))}
    </div>
  );
}

export function Sparkline({ points, tone = "primary" }: { points: number[]; tone?: "primary" | "accent" }) {
  const w = 240,
    h = 60,
    max = Math.max(...points),
    min = Math.min(...points);
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min || 1)) * (h - 8) - 4;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
  const stroke = tone === "accent" ? "stroke-accent" : "stroke-primary";
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-14">
      <path d={d} fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={stroke} />
    </svg>
  );
}
