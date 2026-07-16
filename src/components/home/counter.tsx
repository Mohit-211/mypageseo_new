"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min((t - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value };
}

export function Counter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="font-display text-5xl md:text-6xl text-foreground"
    >
      {prefix}
      {v.toLocaleString()}
      {suffix}
    </div>
  );
}
