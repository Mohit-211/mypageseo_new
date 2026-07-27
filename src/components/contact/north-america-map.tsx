// components/NorthAmericaMap.tsx
export function NorthAmericaMap() {
  // Coordinates tuned to the actual landmass path (viewBox 754x397)
  const canadaDots: [number, number][] = [
    [270, 138],
    [245, 108], // British Columbia / Alberta (was missing)
    [340, 90],
    [390, 65],
    [440, 50], // central/plains Canada
    [490, 82],
    [540, 55],
    [350, 160],
    [640, 118],
    [400, 125],
    [450, 112],
    [500, 132],
    [590, 190],
    [600, 138],
  ];

  const usDots: [number, number][] = [
    [300, 190],
    [296, 218],
    [650, 205],
    [325, 250],
    [340, 270], // West Coast (was missing)
    [345, 205],
    [395, 190],
    [435, 215],
    [480, 198],
    [520, 220],
    [560, 202],
    [595, 228],
    [365, 235],
    [405, 255],
    [445, 242],
    [485, 262],
    [525, 248],
    [575, 300],
    [385, 275],
    [425, 285],
    [465, 282],
  ];

  const allDots = [...canadaDots, ...usDots];

  return (
    <div className="relative rounded-3xl bg-card ring-soft p-8 md:p-10 overflow-hidden shadow-xl">
      {/* Decorative glows — pulled further outside the landmass footprint and softened
          so they no longer wash color across the map fill */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-accent/[0.06] blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-28 -left-28 w-72 h-72 rounded-full bg-primary/[0.06] blur-3xl pointer-events-none"
      />

      <svg
        viewBox="0 0 754 397"
        className="w-full h-auto relative"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="landGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.93 0.02 230)" />
            <stop offset="100%" stopColor="oklch(0.88 0.025 225)" />
          </linearGradient>
          <linearGradient id="dotGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="100%" stopColor="#ed1c24" />
          </linearGradient>
          <filter id="landShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodColor="oklch(0.36 0.036 220)"
              floodOpacity="0.12"
            />
          </filter>
        </defs>

        <g filter="url(#landShadow)">
          {/* Canada */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M303.36 165.86L272.57 153.6L269.79 143.55L261.21 140.7L251.79 126.98L255.33 119.52L243.94 115.26L218.69 93.57L205.44 99.49L181.68 90.1L181.76 27.07L211.8 32.52L272.49 22.61L283.82 28.62L312.53 26.5L363.28 35.87L389.77 38.67L415.2 33.18L427.35 38.42L466.85 40.01L495.06 31.38L480.06 24.54L488.52 12.27L536.7 34.42L553.44 25.93L581.86 30.76L581.15 44.5L549.78 51.57L533.59 64.68L502.27 78.58L492.41 91.41L508.04 111.67L517.41 110.35L556.86 123.63L575.21 124.66L581.05 144.7L591.02 151.07L599.81 141.99L596.31 131.41L613.62 115.38L600.38 100.16L608.29 93.14L603.13 76.61L631.72 75.78L648.25 84.53L660.2 85.04L662.22 99.14L682.9 100.41L693.75 89.9L715.11 112.47L727.35 124.29L742.33 128.16L752.9 137.25L753.39 144.78L724.24 157.54L681.58 157.63L690.58 164.31L694.49 184.37L717.5 190.89L688.52 202.42L676.63 191.75L672.26 178.82L662.56 176.27L647.37 192.61L624.84 192.67L611.75 201.86L574.09 214.95L576.12 202.25L573.35 190.34L557.76 179.94L534.3 170.54L512.44 171.63L488.86 165.86H303.36Z"
            fill="url(#landGradient)"
            stroke="oklch(0.4 0.04 220 / 0.3)"
            strokeWidth="1.25"
          />
          {/* Greenland */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M598.68 9.38L605.02 6.71L677.76 30.59L709.97 50.87L698.21 58.66L679.42 49.34L669.91 54.02L688.81 62.78L683.15 79.21L650.59 72.65L604.53 56.57L628.68 53.21L639.69 43.34L608.62 26.68L557.3 25.36L526.69 20.03L522.05 10.16L574.92 0L598.68 9.38Z"
            fill="oklch(0.95 0.01 220)"
            stroke="oklch(0.4 0.04 220 / 0.25)"
            strokeWidth="1"
          />
          {/* United States */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M303.36 165.86H488.86L512.44 171.63L534.3 170.54L557.76 179.94L573.35 190.34L576.12 202.25L574.09 214.95L611.75 201.86L624.84 192.67L647.37 192.61L662.56 176.27L672.26 178.82L676.63 191.75L656.67 201.49L653.16 216.29L630.77 221.97L629.45 228.12L619.11 240L619.07 255.99L614.81 260.96L600.13 267.31L581.49 283.53L580.45 288.3L590.06 314.09L582.59 325.34L571.31 307.35L565.58 293.61L556.2 295.63L547.55 290.51L528.92 291.07L527.39 298.82L512.53 295.35L492 296.67L474.04 310.74L472.97 321.06L462.98 317.51L450 297.34L439.8 294.8L426.55 296.06L412.81 281.43L401.19 284.19L382.55 284.24L357.14 276.26L341.64 276.2L332.31 266.2L319.93 263.39L297.42 233.2L292.92 224.08L292.02 207.64L296.27 189.16L290.98 171.33L303.36 165.86Z"
            fill="url(#landGradient)"
            stroke="oklch(0.4 0.04 220 / 0.3)"
            strokeWidth="1.25"
          />
          {/* Alaska */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M181.76 27.07L181.68 90.1L205.44 99.49L218.69 93.57L243.94 115.26L255.33 119.52L251.79 126.98L242.2 122.32L228.05 104.73L203.11 102.2L189.26 95.25L161.84 92.16L140.69 86.22L134.64 92.3L92.99 104.57L69.61 108.44L41.79 94.61L28.76 93.51L13.33 82.1L23.77 71.07L47.92 63.85L11.29 60.75L0 54.16L24.36 48.08L18.22 38.26L41.55 22.91L77.26 16.04L106.15 21.12L181.76 27.07Z"
            fill="oklch(0.95 0.01 220)"
            stroke="oklch(0.4 0.04 220 / 0.25)"
            strokeWidth="1"
          />
          {/* Mexico */}
          <path
            d="M341.64 276.2L357.14 276.26L382.55 284.24L401.19 284.19L412.81 281.43L426.55 296.06L439.8 294.8L450 297.34L462.98 317.51L472.97 321.06L470.67 343.82L475.25 355.94L483.89 368.05L493.77 372.63L518.26 365L521.56 353.5L543.18 349.86L534.82 370.25L529.17 374.89L516.72 374.82L520.32 386.54L511.71 386.56L508.5 396.8L491.99 385.66L479.49 389.33L450.86 379.16L432.96 371.64L422.96 364.78L416.02 341.61L400.11 325.54L394.15 317.02L374.47 300.19L368.3 285.34L357.4 281.13L358.08 292.1L378.57 315.55L387.43 337.21L374.78 328.45L373.99 319.91L359.48 312.34L361.51 302.8L352.42 296.16L341.64 276.2Z"
            fill="oklch(0.93 0.015 220)"
            stroke="oklch(0.4 0.04 220 / 0.25)"
            strokeWidth="1"
          />
        </g>

        {/* US / Canada border accent — reuses the shared edge coordinates exactly */}
        <line
          x1="303.36"
          y1="165.86"
          x2="488.86"
          y2="165.86"
          stroke="oklch(0.4 0.04 220 / 0.35)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Pulsing location dots */}
        {allDots.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="9" fill="#ed1c24" opacity="0.18">
              <animate
                attributeName="r"
                values="6;13;6"
                dur="2.8s"
                begin={`${(i % 6) * 0.35}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.75;0.15;0.75"
                dur="2.8s"
                begin={`${(i % 6) * 0.35}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={x}
              cy={y}
              r="4"
              fill="url(#dotGradient)"
              stroke="white"
              strokeWidth="1"
            />
          </g>
        ))}

        <text
          x="440"
          y="70"
          fill="oklch(0.36 0.036 220 / 0.6)"
          fontSize="13"
          fontWeight="700"
          letterSpacing="2.5"
        >
          CANADA
        </text>
        <text
          x="410"
          y="235"
          fill="oklch(0.36 0.036 220 / 0.6)"
          fontSize="13"
          fontWeight="700"
          letterSpacing="2.5"
        >
          UNITED STATES
        </text>
      </svg>
    </div>
  );
}
