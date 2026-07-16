import type { ArtKind } from "./blog-data";

interface ArtProps {
  kind: ArtKind;
  className?: string;
}

export function Art({ kind, className = "" }: ArtProps) {
  const common = "w-full h-full";
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {kind === "map" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="g-map" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.94 0.014 220)" />
              <stop offset="100%" stopColor="oklch(0.88 0.02 220)" />
            </linearGradient>
          </defs>
          <rect width="400" height="240" fill="url(#g-map)" />
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={"h" + i} d={`M0 ${i * 22} Q200 ${i * 22 - 8} 400 ${i * 22}`} stroke="oklch(0.36 0.036 220 / 0.08)" fill="none" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={"v" + i} d={`M${i * 55} 0 Q${i * 55 + 10} 120 ${i * 55} 240`} stroke="oklch(0.36 0.036 220 / 0.08)" fill="none" />
          ))}
          {[[120, 90], [220, 130], [280, 80], [180, 170], [310, 180]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="18" fill="oklch(0.55 0.19 27 / 0.15)" />
              <circle cx={x} cy={y} r="9" fill="oklch(0.55 0.19 27)" />
              <circle cx={x} cy={y} r="3" fill="white" />
            </g>
          ))}
        </svg>
      )}
      {kind === "gbp" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          <rect x="30" y="30" width="340" height="180" rx="14" fill="white" stroke="oklch(0.92 0.008 220)" />
          <rect x="50" y="52" width="90" height="90" rx="10" fill="oklch(0.36 0.036 220)" />
          <text x="95" y="105" textAnchor="middle" fill="white" fontSize="34" fontWeight="700">B</text>
          <rect x="160" y="58" width="180" height="10" rx="5" fill="oklch(0.36 0.036 220)" />
          <rect x="160" y="78" width="140" height="6" rx="3" fill="oklch(0.36 0.036 220 / 0.3)" />
          <g transform="translate(160,100)">
            {[0, 1, 2, 3, 4].map((i) => (
              <path key={i} transform={`translate(${i * 18} 0)`} d="M8 0l2.5 5.2 5.7.8-4.1 4 1 5.6L8 12.9 2.9 15.6l1-5.6L-.2 6l5.7-.8z" fill="oklch(0.55 0.19 27)" />
            ))}
          </g>
          {[0, 1, 2].map((i) => (
            <rect key={i} x={50 + i * 100} y="160" width="80" height="34" rx="8" fill="oklch(0.94 0.014 220)" />
          ))}
        </svg>
      )}
      {kind === "chart" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          {[40, 80, 120, 160, 200].map((y) => (
            <line key={y} x1="30" y1={y} x2="370" y2={y} stroke="oklch(0.92 0.008 220)" />
          ))}
          <path d="M30 180 L80 160 L130 170 L180 130 L230 110 L280 90 L330 60 L370 40" fill="none" stroke="oklch(0.36 0.036 220)" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 180 L80 160 L130 170 L180 130 L230 110 L280 90 L330 60 L370 40 L370 210 L30 210 Z" fill="oklch(0.36 0.036 220 / 0.08)" />
          <path d="M30 200 L80 195 L130 185 L180 180 L230 165 L280 155 L330 140 L370 130" fill="none" stroke="oklch(0.55 0.19 27)" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
          {[80, 180, 280, 370].map((x, i) => (
            <circle key={i} cx={x} cy={[160, 130, 90, 40][i]} r="5" fill="oklch(0.36 0.036 220)" />
          ))}
        </svg>
      )}
      {kind === "reviews" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${40 + i * 40}, ${50 + i * 30})`}>
              <rect width="260" height="60" rx="12" fill="white" stroke="oklch(0.92 0.008 220)" />
              <circle cx="26" cy="30" r="14" fill="oklch(0.36 0.036 220)" />
              <rect x="50" y="18" width="120" height="7" rx="3" fill="oklch(0.36 0.036 220)" />
              <g transform="translate(50,32)">
                {[0, 1, 2, 3, 4].map((j) => (
                  <path key={j} transform={`translate(${j * 14} 0)`} d="M6 0l1.9 3.9 4.3.6-3.1 3 .7 4.2L6 9.7 2.2 11.7l.7-4.2L-.2 4.5l4.3-.6z" fill="oklch(0.55 0.19 27)" />
                ))}
              </g>
            </g>
          ))}
        </svg>
      )}
      {kind === "citations" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          <circle cx="200" cy="120" r="34" fill="oklch(0.36 0.036 220)" />
          <text x="200" y="128" textAnchor="middle" fill="white" fontSize="24" fontWeight="700">NAP</text>
          {[[80, 60], [320, 60], [60, 180], [340, 180], [200, 40], [200, 210]].map(([x, y], i) => (
            <g key={i}>
              <line x1="200" y1="120" x2={x} y2={y} stroke="oklch(0.36 0.036 220 / 0.25)" strokeDasharray="3 3" />
              <rect x={x - 26} y={y - 12} width="52" height="24" rx="6" fill="white" stroke="oklch(0.92 0.008 220)" />
              <circle cx={x - 16} cy={y} r="3" fill={i % 3 === 0 ? "oklch(0.55 0.19 27)" : "oklch(0.65 0.15 155)"} />
            </g>
          ))}
        </svg>
      )}
      {kind === "growth" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          {[40, 80, 120, 160, 200, 240, 280, 320].map((x, i) => {
            const h = 30 + i * 18;
            return <rect key={x} x={x} y={210 - h} width="32" height={h} rx="6" fill={i === 7 ? "oklch(0.55 0.19 27)" : "oklch(0.36 0.036 220)"} opacity={0.3 + i * 0.09} />;
          })}
          <path d="M56 180 L96 165 L136 150 L176 135 L216 115 L256 95 L296 70 L336 40" fill="none" stroke="oklch(0.55 0.19 27)" strokeWidth="3" />
        </svg>
      )}
      {kind === "news" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          <rect x="40" y="40" width="320" height="160" rx="12" fill="white" stroke="oklch(0.92 0.008 220)" />
          <rect x="60" y="60" width="200" height="12" rx="4" fill="oklch(0.36 0.036 220)" />
          <rect x="60" y="82" width="140" height="8" rx="4" fill="oklch(0.36 0.036 220 / 0.4)" />
          {[110, 128, 146, 164].map((y) => <rect key={y} x="60" y={y} width="280" height="5" rx="2" fill="oklch(0.36 0.036 220 / 0.15)" />)}
          <rect x="280" y="60" width="60" height="34" rx="6" fill="oklch(0.55 0.19 27)" />
          <text x="310" y="82" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">NEW</text>
        </svg>
      )}
      {kind === "guide" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          <rect x="120" y="40" width="160" height="160" rx="10" fill="white" stroke="oklch(0.92 0.008 220)" />
          <rect x="120" y="40" width="10" height="160" fill="oklch(0.55 0.19 27)" />
          <rect x="150" y="65" width="100" height="8" rx="3" fill="oklch(0.36 0.036 220)" />
          {[90, 108, 126, 144, 162, 180].map((y) => <rect key={y} x="150" y={y} width={y % 3 === 0 ? 110 : 80} height="4" rx="2" fill="oklch(0.36 0.036 220 / 0.2)" />)}
          <circle cx="80" cy="120" r="30" fill="oklch(0.36 0.036 220 / 0.1)" />
          <circle cx="320" cy="120" r="30" fill="oklch(0.55 0.19 27 / 0.1)" />
        </svg>
      )}
      {kind === "software" && (
        <svg viewBox="0 0 400 240" className={common} preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="240" fill="oklch(0.985 0.005 220)" />
          <rect x="50" y="40" width="300" height="160" rx="12" fill="white" stroke="oklch(0.92 0.008 220)" />
          <rect x="50" y="40" width="300" height="30" rx="12" fill="oklch(0.94 0.014 220)" />
          <circle cx="68" cy="55" r="4" fill="oklch(0.55 0.19 27)" />
          <circle cx="82" cy="55" r="4" fill="oklch(0.75 0.14 85)" />
          <circle cx="96" cy="55" r="4" fill="oklch(0.65 0.15 155)" />
          <rect x="70" y="90" width="120" height="90" rx="8" fill="oklch(0.94 0.014 220)" />
          <rect x="210" y="90" width="120" height="40" rx="8" fill="oklch(0.36 0.036 220)" />
          <rect x="210" y="140" width="120" height="40" rx="8" fill="oklch(0.55 0.19 27 / 0.15)" />
        </svg>
      )}
    </div>
  );
}
