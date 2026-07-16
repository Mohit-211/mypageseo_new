import type { CoverKind } from "./article-data";

interface ArticleCoverProps {
  kind: CoverKind;
  className?: string;
}

export function ArticleCover({ kind, className = "" }: ArticleCoverProps) {
  const common = "w-full h-full";
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {kind === "map" && (
        <svg viewBox="0 0 800 400" className={common} preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="cov-map" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.96 0.014 220)" />
              <stop offset="100%" stopColor="oklch(0.88 0.02 220)" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#cov-map)" />
          {Array.from({ length: 18 }).map((_, i) => (
            <path key={"h" + i} d={`M0 ${i * 24} Q400 ${i * 24 - 10} 800 ${i * 24}`} stroke="oklch(0.36 0.036 220 / 0.08)" fill="none" />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <path key={"v" + i} d={`M${i * 60} 0 Q${i * 60 + 12} 200 ${i * 60} 400`} stroke="oklch(0.36 0.036 220 / 0.08)" fill="none" />
          ))}
          {[[220, 140], [420, 200], [560, 130], [340, 280], [620, 300], [180, 260]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="30" fill="oklch(0.55 0.19 27 / 0.14)" />
              <circle cx={x} cy={y} r="15" fill="oklch(0.55 0.19 27)" />
              <circle cx={x} cy={y} r="5" fill="white" />
            </g>
          ))}
        </svg>
      )}
      {kind === "gbp" && (
        <svg viewBox="0 0 800 400" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="400" fill="oklch(0.985 0.005 220)" />
          <rect x="60" y="50" width="680" height="300" rx="18" fill="white" stroke="oklch(0.92 0.008 220)" />
          <rect x="90" y="82" width="150" height="150" rx="14" fill="oklch(0.36 0.036 220)" />
          <text x="165" y="178" textAnchor="middle" fill="white" fontSize="60" fontWeight="700">B</text>
          <rect x="270" y="92" width="360" height="16" rx="6" fill="oklch(0.36 0.036 220)" />
          <rect x="270" y="122" width="260" height="10" rx="4" fill="oklch(0.36 0.036 220 / 0.35)" />
          <g transform="translate(270,150)">
            {[0, 1, 2, 3, 4].map((i) => (
              <path key={i} transform={`translate(${i * 32} 0)`} d="M14 0l4.4 9 9.9 1.5-7.1 7 1.7 9.8L14 22.5 5.1 27.3l1.7-9.8L-.3 10.5l9.9-1.5z" fill="oklch(0.55 0.19 27)" />
            ))}
            <text x="180" y="26" fill="oklch(0.36 0.036 220 / 0.7)" fontSize="16">4.8 · 1,284 reviews</text>
          </g>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={90 + i * 155} y="260" width="135" height="60" rx="12" fill="oklch(0.94 0.014 220)" />
          ))}
        </svg>
      )}
      {kind === "chart" && (
        <svg viewBox="0 0 800 400" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="400" fill="oklch(0.985 0.005 220)" />
          {[80, 160, 240, 320].map((y) => <line key={y} x1="50" y1={y} x2="750" y2={y} stroke="oklch(0.92 0.008 220)" />)}
          <path d="M50 300 L150 260 L250 280 L350 200 L450 160 L550 130 L650 80 L750 60" fill="none" stroke="oklch(0.36 0.036 220)" strokeWidth="4" strokeLinecap="round" />
          <path d="M50 300 L150 260 L250 280 L350 200 L450 160 L550 130 L650 80 L750 60 L750 350 L50 350 Z" fill="oklch(0.36 0.036 220 / 0.08)" />
        </svg>
      )}
      {kind === "reviews" && (
        <svg viewBox="0 0 800 400" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="400" fill="oklch(0.985 0.005 220)" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${100 + i * 80}, ${80 + i * 60})`}>
              <rect width="520" height="100" rx="16" fill="white" stroke="oklch(0.92 0.008 220)" />
              <circle cx="50" cy="50" r="24" fill="oklch(0.36 0.036 220)" />
              <rect x="90" y="30" width="200" height="12" rx="4" fill="oklch(0.36 0.036 220)" />
              <g transform="translate(90,54)">
                {[0, 1, 2, 3, 4].map((j) => (
                  <path key={j} transform={`translate(${j * 22} 0)`} d="M10 0l3.1 6.4 7 1-5.1 5 1.2 6.9L10 16l-6.2 3.3 1.2-6.9L-.1 7.4l7-1z" fill="oklch(0.55 0.19 27)" />
                ))}
              </g>
            </g>
          ))}
        </svg>
      )}
      {kind === "citations" && (
        <svg viewBox="0 0 800 400" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="400" fill="oklch(0.985 0.005 220)" />
          <circle cx="400" cy="200" r="60" fill="oklch(0.36 0.036 220)" />
          <text x="400" y="212" textAnchor="middle" fill="white" fontSize="34" fontWeight="700">NAP</text>
          {[[160, 100], [640, 100], [140, 300], [660, 300], [400, 60], [400, 340]].map(([x, y], i) => (
            <g key={i}>
              <line x1="400" y1="200" x2={x} y2={y} stroke="oklch(0.36 0.036 220 / 0.25)" strokeDasharray="4 4" />
              <rect x={x - 50} y={y - 22} width="100" height="44" rx="10" fill="white" stroke="oklch(0.92 0.008 220)" />
              <circle cx={x - 32} cy={y} r="5" fill={i % 3 === 0 ? "oklch(0.55 0.19 27)" : "oklch(0.65 0.15 155)"} />
              <rect x={x - 20} y={y - 4} width="50" height="8" rx="2" fill="oklch(0.36 0.036 220 / 0.35)" />
            </g>
          ))}
        </svg>
      )}
    </div>
  );
}
