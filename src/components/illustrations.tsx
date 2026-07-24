/**
 * MyPageSEO illustration system.
 *
 * A shared library of premium SVG illustrations themed around Local SEO:
 * map results, storefronts, customer journeys, business scenes, review
 * signals, heat maps, mobile GBP cards, and workflow infographics.
 *
 * All illustrations use the site's design tokens (--color-primary,
 * --color-accent, --color-surface, --color-border) so they remain visually
 * consistent across every page without hard-coded palette drift.
 */

import type { ReactNode } from "react";

/* ------------ Shared frame ------------ */

type FrameProps = {
  children: ReactNode;
  className?: string;
  ratio?: string;
};

export function Frame({ children, ratio, className = "" }: FrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl" />

      <div
        className={`relative overflow-hidden rounded-3xl border border-border/70 bg-background shadow-lift ${
          ratio ?? ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ============================================================
 * 1. Local Pack — Google-style map + result list (not a dashboard)
 * ============================================================ */
export function LocalPackIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Frame className={className}>
      <div className="grid grid-cols-5 h-full">
        {/* Result list */}
        <div className="col-span-2 border-r border-border/60 bg-surface/40 p-4 space-y-3 overflow-hidden">
          <div className="flex items-center gap-2 rounded-full bg-background border border-border/60 px-3 py-1.5 text-[10px] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            dentist near me
          </div>
          {[
            {
              name: "Bright Smile Dental",
              rating: 4.9,
              reviews: 312,
              badge: "Sponsored",
            },
            { name: "Downtown Family Dentistry", rating: 4.8, reviews: 208 },
            { name: "Northside Dental Studio", rating: 4.6, reviews: 141 },
          ].map((b, i) => (
            <div
              key={b.name}
              className={`rounded-xl border p-3 transition-colors ${
                i === 0
                  ? "border-accent/40 bg-accent/5"
                  : "border-border/60 bg-background"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[11px] font-semibold text-foreground leading-tight">
                  {b.name}
                </p>
                <span className="text-[9px] font-semibold text-accent">
                  #{i + 1}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
                <StarRow rating={b.rating} />
                <span>{b.rating}</span>
                <span>({b.reviews})</span>
              </div>
              {b.badge && (
                <span className="mt-1.5 inline-block text-[8px] uppercase tracking-wider font-semibold text-muted-foreground">
                  {b.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="col-span-3 relative bg-[color:var(--color-surface)]">
          <MapBackdrop />
          {/* pins */}
          <MapPinBubble x="30%" y="35%" label="A" tone="primary" />
          <MapPinBubble x="58%" y="28%" label="B" tone="muted" />
          <MapPinBubble x="65%" y="62%" label="C" tone="accent" highlight />
          <MapPinBubble x="42%" y="72%" label="D" tone="muted" />

          {/* route */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 30 35 Q 45 20 65 62"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="0.6"
              strokeDasharray="1.5 1.5"
              opacity="0.55"
            />
          </svg>
        </div>
      </div>
    </Frame>
  );
}

/* ============================================================
 * 2. Mobile Google Business Profile card
 * ============================================================ */
export function MobileGBPIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Frame className={className} ratio="aspect-[4/5]">
      <div className="h-full grid place-items-center bg-gradient-to-br from-surface via-background to-surface/40 p-6">
        <div className="relative w-[220px] max-w-full">
          <div className="rounded-[2rem] border border-border/60 bg-background shadow-lift overflow-hidden">
            {/* status bar */}
            <div className="flex items-center justify-between px-4 py-2 text-[9px] text-muted-foreground">
              <span>9:41</span>
              <span className="flex gap-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
              </span>
            </div>
            {/* photo strip */}
            <div className="h-24 bg-gradient-to-br from-primary/25 via-accent/15 to-primary/10 relative">
              <div className="absolute inset-0 flex items-end p-3">
                <span className="text-[10px] font-semibold rounded-full bg-background/90 px-2 py-0.5 text-foreground">
                  22 photos
                </span>
              </div>
            </div>
            {/* body */}
            <div className="p-3">
              <p className="text-sm font-semibold text-foreground leading-tight">
                Bright Smile Dental
              </p>
              <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
                <StarRow rating={4.9} />
                <span className="font-semibold text-foreground">4.9</span>
                <span>(312)</span>
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground">
                Dentist · Open · Closes 6 PM
              </p>

              <div className="mt-3 grid grid-cols-4 gap-1.5 text-[9px]">
                {[
                  { l: "Call", t: "primary" },
                  { l: "Directions", t: "accent" },
                  { l: "Website", t: "muted" },
                  { l: "Save", t: "muted" },
                ].map((a) => (
                  <div
                    key={a.l}
                    className={`rounded-lg py-2 text-center font-semibold ${
                      a.t === "primary"
                        ? "bg-primary text-primary-foreground"
                        : a.t === "accent"
                        ? "bg-accent/10 text-accent"
                        : "bg-surface text-muted-foreground"
                    }`}
                  >
                    {a.l}
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-lg border border-border/60 p-2">
                <p className="text-[9px] font-semibold text-foreground">
                  Recent review
                </p>
                <div className="mt-0.5 flex items-center gap-1">
                  <StarRow rating={5} />
                </div>
                <p className="mt-1 text-[9px] text-muted-foreground leading-snug">
                  "Painless visit. Booked online in 2 minutes."
                </p>
              </div>
            </div>
          </div>

          {/* floating call bubble */}
          <div className="absolute -right-4 top-24 rounded-2xl border border-border/70 bg-background shadow-lift px-3 py-2 flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15 text-accent">
              <PhoneIcon />
            </span>
            <div>
              <p className="text-[9px] text-muted-foreground leading-none">
                Call now
              </p>
              <p className="text-[11px] font-semibold text-foreground leading-tight">
                +14
              </p>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ============================================================
 * 3. Customer journey — search → discover → call → visit
 * ============================================================ */

export function CustomerJourneyIllustration({
  className = "",
}: {
  className?: string;
}) {
  const steps = [
    {
      title: "Search",
      subtitle: "Google Maps",
      icon: <SearchIcon />,
    },
    {
      title: "Discover",
      subtitle: "Business Profile",
      icon: <MapPinIcon />,
    },
    {
      title: "Build Trust",
      subtitle: "Reviews",
      icon: <StarIcon />,
    },
    {
      title: "Connect",
      subtitle: "Call or Book",
      icon: <PhoneIcon />,
    },
    {
      title: "Convert",
      subtitle: "Visit Your Business",
      icon: <StoreIcon />,
    },
  ];

  return (
    <Frame className={className}>
      <div className="rounded-[28px] bg-gradient-to-br from-background via-surface to-background px-8 py-10 md:px-12 md:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Local Customer Journey
        </p>

        <div className="relative mt-10">
          <div className="absolute left-10 right-10 top-7 h-px bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30" />

          <div className="relative grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`grid h-14 w-14 place-items-center rounded-full border transition-all ${
                    index === 2
                      ? "border-accent bg-accent text-accent-foreground shadow-lg"
                      : "border-border bg-background text-primary shadow-card"
                  }`}
                >
                  {step.icon}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-background/70 px-6 py-5">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                The Outcome
              </p>

              <p className="mt-2 text-lg font-semibold">
                More visibility. More trust. More customers.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold text-primary">
                  ↑ Visibility
                </div>
                <div className="text-xs text-muted-foreground">
                  Higher local presence
                </div>
              </div>

              <div className="h-10 w-px bg-border" />

              <div>
                <div className="text-2xl font-bold text-accent">
                  ↑ Conversions
                </div>
                <div className="text-xs text-muted-foreground">
                  More calls & enquiries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* 
export function CustomerJourneyIllustration({ className = "" }: { className?: string }) {
  const steps = [
    { l: "Search on Maps", i: <SearchIcon /> },
    { l: "Discover profile", i: <MapPinIcon /> },
    { l: "Read reviews", i: <StarIcon /> },
    { l: "Call or book", i: <PhoneIcon /> },
    { l: "Visit or hire", i: <StoreIcon /> },
  ];
  return (
    <Frame className={className} ratio="aspect-[16/9]">
    <div className="h-full bg-gradient-to-br from-surface via-background to-surface/60 p-6 flex flex-col justify-center">
    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
    The local customer journey
    </p>
    <div className="mt-4 relative">
    <div className="absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40" />
    <div className="grid grid-cols-5 gap-2 relative">
    {steps.map((s, i) => (
      <div key={s.l} className="flex flex-col items-center text-center">
      <span
      className={`grid h-12 w-12 place-items-center rounded-2xl border shadow-card ${
        i === 2
        ? "bg-accent text-accent-foreground border-accent"
        : "bg-background text-primary border-border/70"
      }`}
      >
      {s.i}
      </span>
      <span className="mt-2 text-[10px] font-semibold text-foreground leading-tight">
      {s.l}
      </span>
      <span className="text-[9px] text-muted-foreground">Step {i + 1}</span>
      </div>
      ))}
      </div>
      </div>
      </div>
      </Frame>
      );
    }
    */

/* ============================================================
 * 4. Storefront lifestyle scenes (business receiving customers)
 * ============================================================ */

export function RestaurantSceneIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Frame className={className}>
      <SceneBase>
        {/* awning */}
        <path
          d="M 20 34 L 80 34 L 76 40 L 24 40 Z"
          fill="var(--color-primary)"
          opacity="0.9"
        />
        <path
          d="M 24 40 L 26 46 M 32 40 L 34 46 M 40 40 L 42 46 M 48 40 L 50 46 M 56 40 L 58 46 M 64 40 L 66 46 M 72 40 L 74 46 M 76 40 L 78 46"
          stroke="var(--color-accent)"
          strokeWidth="0.4"
        />
        {/* facade */}
        <rect
          x="20"
          y="46"
          width="60"
          height="34"
          fill="var(--color-surface)"
          stroke="var(--color-border)"
          strokeWidth="0.5"
        />
        {/* windows */}
        <rect
          x="26"
          y="52"
          width="16"
          height="16"
          fill="var(--color-accent)"
          opacity="0.15"
        />
        <rect
          x="58"
          y="52"
          width="16"
          height="16"
          fill="var(--color-accent)"
          opacity="0.15"
        />
        {/* door */}
        <rect
          x="46"
          y="52"
          width="8"
          height="28"
          fill="var(--color-primary)"
          opacity="0.85"
          rx="1"
        />
        {/* sign */}
        <rect
          x="34"
          y="27"
          width="32"
          height="6"
          rx="1"
          fill="var(--color-accent)"
        />
        <text
          x="50"
          y="31.6"
          textAnchor="middle"
          fontSize="3.5"
          fill="var(--color-accent-foreground)"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="700"
        >
          BISTRO
        </text>
        {/* customers */}
        <Person x={12} tone="accent" />
        <Person x={30} tone="primary" />
        <Person x={70} tone="muted" />
        <Person x={86} tone="accent" />
        {/* review badge */}
        <FloatingBadge x={78} y={20} value="4.9" />
      </SceneBase>
    </Frame>
  );
}

export function DentalClinicIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Frame className={className}>
      <SceneBase>
        <rect
          x="18"
          y="42"
          width="64"
          height="38"
          fill="var(--color-surface)"
          stroke="var(--color-border)"
          strokeWidth="0.5"
        />
        <rect
          x="24"
          y="48"
          width="20"
          height="12"
          fill="var(--color-accent)"
          opacity="0.15"
        />
        <rect
          x="56"
          y="48"
          width="20"
          height="12"
          fill="var(--color-accent)"
          opacity="0.15"
        />
        <rect
          x="45"
          y="56"
          width="10"
          height="24"
          fill="var(--color-primary)"
          opacity="0.85"
          rx="1"
        />
        {/* cross sign */}
        <rect
          x="46"
          y="30"
          width="8"
          height="8"
          fill="var(--color-accent)"
          rx="1"
        />
        <rect
          x="49"
          y="32"
          width="2"
          height="4"
          fill="var(--color-accent-foreground)"
        />
        <rect
          x="47"
          y="33"
          width="6"
          height="2"
          fill="var(--color-accent-foreground)"
        />
        <line
          x1="50"
          y1="38"
          x2="50"
          y2="42"
          stroke="var(--color-border)"
          strokeWidth="0.4"
        />
        {/* patient walking in */}
        <Person x={14} tone="primary" />
        {/* appointment card */}
        <FloatingBadge x={78} y={22} value="+18" label="bookings" />
      </SceneBase>
    </Frame>
  );
}

export function SalonSceneIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Frame className={className}>
      <SceneBase>
        <rect
          x="18"
          y="42"
          width="64"
          height="38"
          fill="var(--color-surface)"
          stroke="var(--color-border)"
          strokeWidth="0.5"
        />
        <rect
          x="24"
          y="48"
          width="52"
          height="12"
          fill="var(--color-accent)"
          opacity="0.1"
        />
        <line
          x1="42"
          y1="48"
          x2="42"
          y2="60"
          stroke="var(--color-border)"
          strokeWidth="0.3"
        />
        <line
          x1="58"
          y1="48"
          x2="58"
          y2="60"
          stroke="var(--color-border)"
          strokeWidth="0.3"
        />
        <rect
          x="45"
          y="60"
          width="10"
          height="20"
          fill="var(--color-primary)"
          opacity="0.85"
          rx="1"
        />
        <rect
          x="30"
          y="30"
          width="40"
          height="6"
          rx="1"
          fill="var(--color-primary)"
        />
        <text
          x="50"
          y="34.5"
          textAnchor="middle"
          fontSize="3.5"
          fill="var(--color-primary-foreground)"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="700"
        >
          SALON
        </text>
        <Person x={12} tone="accent" />
        <Person x={86} tone="primary" />
        <FloatingBadge x={78} y={22} value="Fully" label="booked" />
      </SceneBase>
    </Frame>
  );
}

export function PlumberSceneIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Frame className={className}>
      <SceneBase>
        {/* van */}
        <g transform="translate(20 52)">
          <rect
            x="0"
            y="0"
            width="34"
            height="16"
            rx="2"
            fill="var(--color-primary)"
          />
          <rect
            x="24"
            y="4"
            width="10"
            height="8"
            fill="var(--color-accent)"
            opacity="0.35"
          />
          <circle cx="8" cy="18" r="3" fill="var(--color-foreground)" />
          <circle cx="28" cy="18" r="3" fill="var(--color-foreground)" />
          <text
            x="12"
            y="10"
            fontSize="3"
            fill="var(--color-primary-foreground)"
            fontFamily="ui-sans-serif, system-ui"
            fontWeight="700"
          >
            PLUMBING
          </text>
        </g>
        {/* house */}
        <path
          d="M 60 50 L 76 40 L 92 50 L 92 78 L 60 78 Z"
          fill="var(--color-surface)"
          stroke="var(--color-border)"
          strokeWidth="0.5"
        />
        <rect
          x="70"
          y="60"
          width="8"
          height="18"
          fill="var(--color-primary)"
          opacity="0.8"
          rx="0.8"
        />
        <rect
          x="82"
          y="55"
          width="6"
          height="6"
          fill="var(--color-accent)"
          opacity="0.2"
        />
        {/* phone call */}
        <FloatingBadge x={22} y={22} value="Ring" label="incoming call" />
      </SceneBase>
    </Frame>
  );
}

export function LawFirmSceneIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Frame className={className}>
      <SceneBase>
        <rect
          x="14"
          y="34"
          width="72"
          height="46"
          fill="var(--color-surface)"
          stroke="var(--color-border)"
          strokeWidth="0.5"
        />
        {/* columns */}
        {[20, 32, 44, 56, 68, 80].map((x) => (
          <rect
            key={x}
            x={x - 1}
            y="38"
            width="2"
            height="30"
            fill="var(--color-primary)"
            opacity="0.75"
          />
        ))}
        <rect x="14" y="30" width="72" height="6" fill="var(--color-primary)" />
        <text
          x="50"
          y="34.5"
          textAnchor="middle"
          fontSize="3"
          fill="var(--color-primary-foreground)"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="700"
        >
          LAW OFFICE
        </text>
        <rect
          x="44"
          y="68"
          width="12"
          height="12"
          fill="var(--color-accent)"
          opacity="0.7"
          rx="0.5"
        />
        <Person x={12} tone="accent" />
        <FloatingBadge x={78} y={22} value="+9" label="consults" />
      </SceneBase>
    </Frame>
  );
}

export function RetailStoreIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Frame className={className}>
      <SceneBase>
        <path
          d="M 16 34 L 84 34 L 80 42 L 20 42 Z"
          fill="var(--color-accent)"
          opacity="0.85"
        />
        <rect
          x="16"
          y="42"
          width="68"
          height="38"
          fill="var(--color-surface)"
          stroke="var(--color-border)"
          strokeWidth="0.5"
        />
        <rect
          x="22"
          y="48"
          width="24"
          height="18"
          fill="var(--color-accent)"
          opacity="0.15"
        />
        <rect
          x="54"
          y="48"
          width="24"
          height="18"
          fill="var(--color-accent)"
          opacity="0.15"
        />
        <rect
          x="45"
          y="52"
          width="10"
          height="28"
          fill="var(--color-primary)"
          opacity="0.85"
          rx="0.8"
        />
        <Person x={10} tone="primary" />
        <Person x={88} tone="accent" />
        <FloatingBadge x={22} y={22} value="+41%" label="foot traffic" />
      </SceneBase>
    </Frame>
  );
}

/* ============================================================
 * 5. Business owner + specialist collaborating
 * ============================================================ */
export function CollaborationIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Frame className={className} ratio="aspect-[5/4]">
      <div className="relative h-full bg-gradient-to-br from-surface via-background to-surface/60 p-6">
        {/* desk / table */}
        <div className="absolute bottom-6 left-6 right-6 h-20 rounded-2xl border border-border/60 bg-background shadow-card p-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold text-foreground">
              Monthly review · Bright Smile Dental
            </p>
            <span className="rounded-full bg-accent/10 text-accent text-[9px] font-semibold px-2 py-0.5">
              On track
            </span>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {[
              { l: "GBP Score", v: "94" },
              { l: "Calls", v: "+38%" },
              { l: "Directions", v: "3x" },
            ].map((m) => (
              <div
                key={m.l}
                className="rounded-lg bg-surface/60 border border-border/50 px-2 py-1"
              >
                <p className="text-[8px] text-muted-foreground">{m.l}</p>
                <p className="text-sm font-semibold text-foreground">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
        {/* two figures */}
        <svg viewBox="0 0 200 140" className="w-full h-[62%]">
          {/* specialist */}
          <g transform="translate(40 20)">
            <circle cx="20" cy="12" r="10" fill="var(--color-primary)" />
            <path
              d="M 4 44 Q 4 22 20 22 Q 36 22 36 44 L 36 60 L 4 60 Z"
              fill="var(--color-primary)"
              opacity="0.85"
            />
            <rect
              x="10"
              y="34"
              width="20"
              height="12"
              rx="2"
              fill="var(--color-background)"
              opacity="0.9"
            />
            <line
              x1="12"
              y1="38"
              x2="28"
              y2="38"
              stroke="var(--color-primary)"
              strokeWidth="0.6"
            />
            <line
              x1="12"
              y1="41"
              x2="24"
              y2="41"
              stroke="var(--color-primary)"
              strokeWidth="0.6"
            />
          </g>
          {/* business owner */}
          <g transform="translate(120 20)">
            <circle cx="20" cy="12" r="10" fill="var(--color-accent)" />
            <path
              d="M 4 44 Q 4 22 20 22 Q 36 22 36 44 L 36 60 L 4 60 Z"
              fill="var(--color-accent)"
              opacity="0.9"
            />
          </g>
          {/* conversation bubble */}
          <g transform="translate(88 30)">
            <rect
              x="0"
              y="0"
              width="26"
              height="14"
              rx="4"
              fill="var(--color-background)"
              stroke="var(--color-border)"
              strokeWidth="0.6"
            />
            <circle cx="6" cy="7" r="1.2" fill="var(--color-accent)" />
            <circle cx="13" cy="7" r="1.2" fill="var(--color-accent)" />
            <circle cx="20" cy="7" r="1.2" fill="var(--color-accent)" />
          </g>
        </svg>
      </div>
    </Frame>
  );
}

/* ============================================================
 * 6. Growth curve infographic
 * ============================================================ */
export function GrowthCurveIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Frame className={className} ratio="aspect-[5/3]">
      <div className="h-full bg-gradient-to-br from-surface via-background to-surface/40 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Local visibility
            </p>
            <p className="mt-1 text-3xl font-semibold text-foreground">+142%</p>
            <p className="text-[10px] text-muted-foreground">over 6 months</p>
          </div>
          <div className="flex gap-1.5">
            {["Calls", "Directions", "Clicks"].map((l) => (
              <span
                key={l}
                className="text-[9px] rounded-full border border-border/60 bg-background px-2 py-0.5 text-muted-foreground"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
        <svg viewBox="0 0 300 120" className="mt-3 w-full h-[65%]">
          <defs>
            <linearGradient id="growthArea" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--color-accent)"
                stopOpacity="0.35"
              />
              <stop
                offset="100%"
                stopColor="var(--color-accent)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          {/* grid */}
          {[0, 30, 60, 90].map((y) => (
            <line
              key={y}
              x1="0"
              x2="300"
              y1={y + 10}
              y2={y + 10}
              stroke="var(--color-border)"
              strokeWidth="0.4"
              strokeDasharray="2 3"
            />
          ))}
          <path
            d="M 0 95 L 40 90 L 80 82 L 120 70 L 160 58 L 200 44 L 240 30 L 300 12 L 300 120 L 0 120 Z"
            fill="url(#growthArea)"
          />
          <path
            d="M 0 95 L 40 90 L 80 82 L 120 70 L 160 58 L 200 44 L 240 30 L 300 12"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* points */}
          {[
            [0, 95],
            [80, 82],
            [160, 58],
            [240, 30],
            [300, 12],
          ].map(([x, y]) => (
            <circle
              key={x}
              cx={x}
              cy={y}
              r="2.5"
              fill="var(--color-background)"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
            />
          ))}
          {/* second series */}
          <path
            d="M 0 100 L 40 96 L 80 90 L 120 82 L 160 74 L 200 66 L 240 56 L 300 44"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="1.4"
            strokeDasharray="3 3"
            opacity="0.7"
          />
        </svg>
        <div className="mt-2 flex justify-between text-[9px] text-muted-foreground">
          {["M1", "M2", "M3", "M4", "M5", "M6"].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ============================================================
 * 7. Heat map — geo-grid style
 * ============================================================ */
export function HeatMapIllustration({
  className = "",
}: {
  className?: string;
}) {
  const grid = 7;
  return (
    <Frame className={className}>
      <div className="h-full bg-gradient-to-br from-surface via-background to-surface/40 p-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Geo-grid rankings
        </p>
        <p className="mt-1 text-sm text-foreground">
          "emergency dentist" · 5-mile radius
        </p>
        <div
          className="mt-4 grid gap-1"
          style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}
        >
          {Array.from({ length: grid * grid }).map((_, i) => {
            const cx = i % grid;
            const cy = Math.floor(i / grid);
            const dist = Math.hypot(cx - 3, cy - 3);
            const rank = Math.max(
              1,
              Math.round(dist * 2.5) + Math.round(Math.sin(i) + 2)
            );
            let bg = "bg-emerald-400";
            let text = "text-emerald-900";
            if (rank > 3 && rank <= 8) {
              bg = "bg-amber-300";
              text = "text-amber-900";
            }
            if (rank > 8) {
              bg = "bg-rose-300";
              text = "text-rose-900";
            }
            return (
              <div
                key={i}
                className={`aspect-square rounded-md grid place-items-center text-[10px] font-bold ${bg} ${text}`}
              >
                {rank}
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex items-center gap-3 text-[9px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-emerald-400" /> Top 3
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-amber-300" /> 4–8
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-rose-300" /> 9+
          </span>
        </div>
      </div>
    </Frame>
  );
}

/* ============================================================
 * 8. Review wall
 * ============================================================ */
export function ReviewWallIllustration({
  className = "",
}: {
  className?: string;
}) {
  const reviews = [
    {
      name: "Sarah M.",
      text: "Answered my call within minutes. Fantastic service.",
      rating: 5,
      tone: "accent",
    },
    {
      name: "Marcus L.",
      text: "Found them at the top of Maps. Now a regular.",
      rating: 5,
      tone: "primary",
    },
    {
      name: "Priya S.",
      text: "Booked same-day appointment through their profile.",
      rating: 5,
      tone: "accent",
    },
    {
      name: "Owen K.",
      text: "The reviews were right — great local business.",
      rating: 4,
      tone: "muted",
    },
  ];
  return (
    <Frame className={className}>
      <div className="h-full bg-gradient-to-br from-surface via-background to-surface/60 p-5 grid grid-cols-2 gap-3 content-center">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="rounded-xl border border-border/60 bg-background p-3 shadow-card"
          >
            <div className="flex items-center gap-2">
              <span
                className={`grid h-7 w-7 place-items-center rounded-full text-[10px] font-semibold ${
                  r.tone === "accent"
                    ? "bg-accent/15 text-accent"
                    : r.tone === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-muted-foreground/15 text-foreground"
                }`}
              >
                {r.name.slice(0, 1)}
              </span>
              <div>
                <p className="text-[10px] font-semibold text-foreground leading-tight">
                  {r.name}
                </p>
                <StarRow rating={r.rating} />
              </div>
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground leading-snug">
              "{r.text}"
            </p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ============================================================
 * 9. Citation network — connected directories
 * ============================================================ */
export function CitationNetworkIllustration({
  className = "",
}: {
  className?: string;
}) {
  const nodes = [
    { name: "Google", x: 50, y: 50, main: true },
    { name: "Yelp", x: 20, y: 25 },
    { name: "Facebook", x: 80, y: 25 },
    { name: "Apple Maps", x: 15, y: 60 },
    { name: "Bing", x: 85, y: 60 },
    { name: "BBB", x: 30, y: 85 },
    { name: "Yellow Pages", x: 70, y: 85 },
  ];
  return (
    <Frame className={className}>
      <div className="h-full bg-gradient-to-br from-surface via-background to-surface/40 p-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Citation network
        </p>
        <svg viewBox="0 0 100 100" className="mt-3 w-full h-[85%]">
          {nodes.slice(1).map((n) => (
            <line
              key={n.name}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              stroke="var(--color-border)"
              strokeWidth="0.4"
              strokeDasharray="1.2 1.2"
            />
          ))}
          {nodes.map((n) => (
            <g key={n.name}>
              <circle
                cx={n.x}
                cy={n.y}
                r={n.main ? 8 : 5}
                fill={
                  n.main ? "var(--color-primary)" : "var(--color-background)"
                }
                stroke={n.main ? "var(--color-primary)" : "var(--color-accent)"}
                strokeWidth={n.main ? 0 : 1}
              />
              <text
                x={n.x}
                y={n.y + (n.main ? 14 : 11)}
                textAnchor="middle"
                fontSize="3"
                fill="var(--color-foreground)"
                fontFamily="ui-sans-serif, system-ui"
                fontWeight="600"
              >
                {n.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </Frame>
  );
}

/* ============================================================
 * 10. Comparison graphic — Local SEO vs Traditional SEO
 * ============================================================ */
export function ComparisonIllustration({
  leftTitle = "Local SEO",
  rightTitle = "Traditional SEO",
  left = [
    "Google Maps ranking",
    "Google Business Profile",
    "Local citations",
    "Review velocity",
    "Geo-grid tracking",
  ],
  right = [
    "Domain authority",
    "Blog content",
    "National keywords",
    "Backlink profile",
    "Organic traffic",
  ],
  className = "",
}: {
  leftTitle?: string;
  rightTitle?: string;
  left?: string[];
  right?: string[];
  className?: string;
}) {
  return (
    <Frame className={className} ratio="aspect-[16/10]">
      <div className="h-full grid grid-cols-2">
        <div className="bg-accent/5 p-6 border-r border-border/60">
          <span className="inline-block rounded-full bg-accent text-accent-foreground text-[10px] font-semibold px-2.5 py-1">
            {leftTitle}
          </span>
          <ul className="mt-4 space-y-2">
            {left.map((l) => (
              <li
                key={l}
                className="flex items-start gap-2 text-xs text-foreground"
              >
                <span className="mt-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-accent text-accent-foreground text-[8px]">
                  ✓
                </span>
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-surface/60 p-6">
          <span className="inline-block rounded-full border border-border bg-background text-[10px] font-semibold px-2.5 py-1 text-muted-foreground">
            {rightTitle}
          </span>
          <ul className="mt-4 space-y-2">
            {right.map((l) => (
              <li
                key={l}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <span className="mt-1 h-3.5 w-3.5 rounded-full border border-border" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Frame>
  );
}

/* ============================================================
 * 11. Neighborhood pattern — soft decorative background
 * ============================================================ */
export function NeighborhoodPattern({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="0.3"
            opacity="0.4"
          />
        </pattern>
      </defs>
      <rect width="400" height="200" fill="url(#grid)" />
      {/* streets */}
      <path
        d="M 0 100 L 400 100"
        stroke="var(--color-border)"
        strokeWidth="1.2"
        opacity="0.5"
      />
      <path
        d="M 200 0 L 200 200"
        stroke="var(--color-border)"
        strokeWidth="1.2"
        opacity="0.5"
      />
      {/* pins scattered */}
      {[
        [60, 60],
        [140, 130],
        [250, 55],
        [320, 140],
        [80, 160],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r="10" fill="var(--color-accent)" opacity="0.15" />
          <path
            d="M 0 -6 C -4 -6 -6 -3 -6 0 C -6 4 0 8 0 8 C 0 8 6 4 6 0 C 6 -3 4 -6 0 -6 Z"
            fill="var(--color-accent)"
          />
        </g>
      ))}
    </svg>
  );
}

/* ============================================================
 * 12. Google-style search result illustration
 * ============================================================ */
export function SearchResultIllustration({
  query = "coffee shop near me",
  className = "",
}: {
  query?: string;
  className?: string;
}) {
  return (
    <Frame className={className} ratio="aspect-[5/4]">
      <div className="h-full bg-gradient-to-br from-surface via-background to-surface/40 p-5">
        {/* fake search bar */}
        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-2 shadow-card">
          <SearchIcon />
          <span className="text-xs text-foreground">{query}</span>
        </div>
        {/* filters */}
        <div className="mt-3 flex gap-1.5">
          {["Open now", "Top rated", "Under 1 mi", "Delivery"].map((f, i) => (
            <span
              key={f}
              className={`text-[10px] rounded-full px-2.5 py-0.5 border ${
                i === 0
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-border/60 bg-background text-muted-foreground"
              }`}
            >
              {f}
            </span>
          ))}
        </div>

        {/* results */}
        <div className="mt-3 space-y-2">
          {[
            {
              name: "The Roasting Room",
              d: "0.3 mi · Open",
              r: 4.9,
              reviews: 421,
              top: true,
            },
            { name: "Grind & Co.", d: "0.5 mi · Open", r: 4.7, reviews: 208 },
            {
              name: "Third Wave Coffee",
              d: "0.8 mi · Closes 6 PM",
              r: 4.6,
              reviews: 156,
            },
          ].map((r, i) => (
            <div
              key={r.name}
              className={`flex items-start gap-3 rounded-xl border p-3 ${
                r.top
                  ? "border-accent/40 bg-accent/5"
                  : "border-border/60 bg-background"
              }`}
            >
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${
                  r.top
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary/5 text-primary"
                }`}
              >
                <MapPinIcon />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold text-foreground truncate">
                    {r.name}
                  </p>
                  <span className="text-[9px] font-semibold text-muted-foreground">
                    #{i + 1}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <StarRow rating={r.r} />
                  <span>{r.r}</span>
                  <span>({r.reviews})</span>
                </div>
                <p className="text-[10px] text-muted-foreground">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ============================================================
 * 13. Business Profile health scorecard (variant of dashboard)
 * ============================================================ */
export function GBPHealthIllustration({
  className = "",
}: {
  className?: string;
}) {
  const metrics = [
    { l: "Categories", v: 100 },
    { l: "Services", v: 92 },
    { l: "Photos", v: 88 },
    { l: "Posts", v: 76 },
    { l: "Q&A", v: 64 },
    { l: "Attributes", v: 82 },
  ];
  return (
    <Frame className={className} ratio="aspect-[5/4]">
      <div className="h-full bg-gradient-to-br from-primary/8 via-background to-surface/60 p-6">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Profile health
          </p>
          <span className="rounded-full bg-accent/15 text-accent text-[9px] font-semibold px-2 py-0.5">
            Excellent
          </span>
        </div>
        <div className="mt-4 flex items-center gap-6">
          {/* radial */}
          <div className="relative">
            <svg viewBox="0 0 100 100" className="h-32 w-32">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="6"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="6"
                strokeDasharray={`${(94 / 100) * 264} 999`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <p className="text-3xl font-semibold text-foreground leading-none">
                  94
                </p>
                <p className="text-[9px] text-muted-foreground">/ 100</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            {metrics.map((m) => (
              <div key={m.l}>
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>{m.l}</span>
                  <span className="font-semibold text-foreground">{m.v}%</span>
                </div>
                <div className="mt-0.5 h-1.5 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    style={{ width: `${m.v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ============================================================
 * Helpers
 * ============================================================ */

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-2.5 w-2.5"
          fill={i < Math.round(rating) ? "#f59e0b" : "var(--color-border)"}
        >
          <path d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26z" />
        </svg>
      ))}
    </span>
  );
}

function MapPinBubble({
  x,
  y,
  label,
  tone = "primary",
  highlight = false,
}: {
  x: string;
  y: string;
  label: string;
  tone?: "primary" | "accent" | "muted";
  highlight?: boolean;
}) {
  const bg =
    tone === "accent"
      ? "bg-accent text-accent-foreground"
      : tone === "primary"
      ? "bg-primary text-primary-foreground"
      : "bg-background border border-border text-foreground";
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-full"
      style={{ left: x, top: y }}
    >
      {highlight && (
        <div className="absolute inset-0 -m-3 rounded-full bg-accent/30 blur-md animate-pulse" />
      )}
      <div
        className={`relative grid h-8 w-8 place-items-center rounded-full shadow-card ${bg} text-[10px] font-bold`}
      >
        {label}
        <div
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 ${bg}`}
        />
      </div>
    </div>
  );
}

function MapBackdrop() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <rect width="100" height="100" fill="var(--color-surface)" />
      {/* streets */}
      <path
        d="M 0 30 L 100 30 M 0 55 L 100 55 M 0 80 L 100 80"
        stroke="var(--color-border)"
        strokeWidth="0.8"
      />
      <path
        d="M 20 0 L 20 100 M 45 0 L 45 100 M 75 0 L 75 100"
        stroke="var(--color-border)"
        strokeWidth="0.8"
      />
      {/* blocks */}
      <rect
        x="22"
        y="32"
        width="21"
        height="21"
        fill="var(--color-background)"
        opacity="0.5"
      />
      <rect
        x="47"
        y="32"
        width="26"
        height="21"
        fill="var(--color-background)"
        opacity="0.5"
      />
      <rect
        x="22"
        y="57"
        width="21"
        height="21"
        fill="var(--color-background)"
        opacity="0.5"
      />
      <rect
        x="47"
        y="57"
        width="26"
        height="21"
        fill="var(--color-background)"
        opacity="0.5"
      />
      {/* park */}
      <rect
        x="77"
        y="57"
        width="21"
        height="21"
        fill="var(--color-accent)"
        opacity="0.1"
      />
    </svg>
  );
}

function SceneBase({ children }: { children: ReactNode }) {
  return (
    <div className="h-full bg-gradient-to-b from-primary/5 via-background to-surface/60 p-4">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {/* sky */}
        <rect width="100" height="80" fill="transparent" />
        {/* ground */}
        <rect
          x="0"
          y="80"
          width="100"
          height="20"
          fill="var(--color-surface)"
        />
        <line
          x1="0"
          y1="80"
          x2="100"
          y2="80"
          stroke="var(--color-border)"
          strokeWidth="0.4"
        />
        {/* subtle clouds */}
        <ellipse
          cx="18"
          cy="14"
          rx="8"
          ry="2.5"
          fill="var(--color-border)"
          opacity="0.4"
        />
        <ellipse
          cx="82"
          cy="18"
          rx="6"
          ry="2"
          fill="var(--color-border)"
          opacity="0.4"
        />
        {children}
      </svg>
    </div>
  );
}

function Person({
  x,
  tone,
}: {
  x: number;
  tone: "primary" | "accent" | "muted";
}) {
  const fill =
    tone === "accent"
      ? "var(--color-accent)"
      : tone === "primary"
      ? "var(--color-primary)"
      : "var(--color-muted-foreground)";
  return (
    <g transform={`translate(${x} 66)`}>
      <circle cx="0" cy="0" r="2.2" fill={fill} />
      <path
        d="M -3 4 Q -3 3 0 3 Q 3 3 3 4 L 3 12 L -3 12 Z"
        fill={fill}
        opacity="0.9"
      />
      <line x1="-2" y1="12" x2="-2" y2="16" stroke={fill} strokeWidth="1" />
      <line x1="2" y1="12" x2="2" y2="16" stroke={fill} strokeWidth="1" />
    </g>
  );
}

function FloatingBadge({
  x,
  y,
  value,
  label,
}: {
  x: number;
  y: number;
  value: string;
  label?: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x="-8"
        y="-4"
        width="16"
        height={label ? 10 : 8}
        rx="1.5"
        fill="var(--color-background)"
        stroke="var(--color-border)"
        strokeWidth="0.3"
      />
      <text
        x="0"
        y="0.5"
        textAnchor="middle"
        fontSize="3.2"
        fontWeight="700"
        fill="var(--color-accent)"
        fontFamily="ui-sans-serif, system-ui"
      >
        {value}
      </text>
      {label && (
        <text
          x="0"
          y="4.5"
          textAnchor="middle"
          fontSize="1.8"
          fill="var(--color-muted-foreground)"
          fontFamily="ui-sans-serif, system-ui"
        >
          {label}
        </text>
      )}
    </g>
  );
}

/* Icon primitives (kept inline so illustration set is self-contained) */
function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 22s7-8 7-13a7 7 0 1 0-14 0c0 5 7 13 7 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26Z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}
function StoreIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 9 4 4h16l1 5" />
      <path d="M4 9v11h16V9" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

/* ------------ Rotating gallery helpers ------------ */

export const sceneIllustrations = {
  restaurant: RestaurantSceneIllustration,
  dental: DentalClinicIllustration,
  salon: SalonSceneIllustration,
  plumber: PlumberSceneIllustration,
  law: LawFirmSceneIllustration,
  retail: RetailStoreIllustration,
} as const;

export type SceneKey = keyof typeof sceneIllustrations;
