export function NorthAmericaMap() {
  const dots: [number, number][] = [
    [140, 130], [180, 145], [210, 160], [175, 180], [220, 190],
    [260, 200], [230, 225], [280, 235], [320, 245], [190, 240],
    [250, 275], [300, 285], [340, 275], [220, 105], [265, 120],
    [305, 145], [340, 180], [370, 210], [280, 90], [340, 100],
    [385, 130], [400, 165], [155, 210], [200, 285], [345, 300],
  ];
  return (
    <div className="relative rounded-3xl bg-card ring-soft p-8 md:p-10 overflow-hidden">
      <div aria-hidden className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <svg viewBox="0 0 500 360" className="w-full h-auto relative">
        {/* Stylized North America outline */}
        <path
          d="M60 130 Q90 90 140 85 L200 70 Q260 60 320 70 L380 75 Q430 85 445 120 L455 165 Q460 205 445 235 L420 275 Q395 305 355 315 L295 320 Q245 322 205 310 L170 300 Q135 285 115 260 L90 225 Q70 195 62 165 Z"
          fill="oklch(0.94 0.014 220)"
          stroke="oklch(0.36 0.036 220 / 0.35)"
          strokeWidth="1.5"
        />
        {/* Great Lakes hint */}
        <path d="M280 190 Q300 185 320 195 Q315 210 290 210 Z" fill="oklch(0.985 0.005 220)" />
        {/* US/Canada border hint */}
        <path d="M110 155 Q220 170 340 155 L410 155" stroke="oklch(0.36 0.036 220 / 0.2)" strokeWidth="1" strokeDasharray="3 3" fill="none" />

        {dots.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="oklch(0.55 0.19 27 / 0.15)">
              <animate attributeName="r" values="6;12;6" dur="3s" begin={`${(i % 5) * 0.4}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" begin={`${(i % 5) * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={x} cy={y} r="3.5" fill="oklch(0.55 0.19 27)" />
          </g>
        ))}

        <text x="180" y="115" fill="oklch(0.36 0.036 220 / 0.5)" fontSize="11" fontWeight="600" letterSpacing="2">CANADA</text>
        <text x="230" y="255" fill="oklch(0.36 0.036 220 / 0.5)" fontSize="11" fontWeight="600" letterSpacing="2">UNITED STATES</text>
      </svg>
    </div>
  );
}
