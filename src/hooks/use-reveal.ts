"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element once it scrolls into view. Returns both `shown` and
 * `visible` (same value) so call sites can destructure whichever name they
 * already use. `threshold` defaults to 0.15; pass a different value per call
 * site if a section needs to reveal earlier/later (e.g. 0.1, 0.12).
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, shown, visible: shown };
}
