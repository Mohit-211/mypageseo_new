import { Check } from "lucide-react";

const CITIES = [
  { x: 32, y: 42, label: "Vancouver" },
  { x: 58, y: 30, label: "Toronto" },
  { x: 62, y: 32, label: "Montréal" },
  { x: 20, y: 52, label: "Seattle" },
  { x: 22, y: 66, label: "SF Bay" },
  { x: 26, y: 76, label: "LA" },
  { x: 42, y: 78, label: "Dallas" },
  { x: 40, y: 62, label: "Denver" },
  { x: 56, y: 60, label: "Chicago" },
  { x: 70, y: 58, label: "NYC" },
  { x: 68, y: 72, label: "Atlanta" },
  { x: 66, y: 84, label: "Miami" },
  { x: 74, y: 66, label: "Boston" },
  { x: 34, y: 68, label: "Phoenix" },
  { x: 46, y: 70, label: "Austin" },
];

export function NorthAmericaMap() {
  return (
    <div className="mt-10 rounded-3xl border border-border/70 bg-gradient-to-b from-surface/40 to-background p-6 md:p-10 shadow-card">
      <div className="relative mx-auto aspect-[16/10] w-full max-w-4xl">
        <svg viewBox="0 0 100 62" className="absolute inset-0 h-full w-full">
          <defs>
            <radialGradient id="pin-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Stylized North America outline */}
          <path
            d="M8 20 Q 14 12 24 12 L 40 10 Q 52 8 62 12 L 74 14 Q 82 16 88 22 L 90 30 Q 88 36 82 40 L 74 42 L 70 50 Q 66 56 58 58 L 46 60 Q 36 60 30 54 L 22 46 Q 14 42 10 34 Z"
            fill="color-mix(in oklab, var(--color-primary) 6%, transparent)"
            stroke="var(--color-primary)"
            strokeOpacity="0.35"
            strokeWidth="0.4"
          />
          {/* Canada band */}
          <path
            d="M14 14 L 28 10 L 46 8 L 62 10 L 78 14 L 84 20"
            fill="none"
            stroke="var(--color-primary)"
            strokeOpacity="0.25"
            strokeWidth="0.3"
            strokeDasharray="1 1"
          />
          {CITIES.map((c, i) => (
            <g key={c.label}>
              <circle cx={c.x} cy={c.y} r="4" fill="url(#pin-glow)">
                <animate attributeName="r" values="3;5;3" dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={c.x} cy={c.y} r="0.9" fill="var(--color-accent)" />
            </g>
          ))}
        </svg>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" /> Active service markets
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5 text-accent" /> United States & Canada
        </span>
      </div>
    </div>
  );
}
