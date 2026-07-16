"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface RevealCardProps {
  i: number;
  delayGroup: number;
  children: ReactNode;
}

export function RevealCard({ i, delayGroup, children }: RevealCardProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${(i % delayGroup) * 70}ms` }}
    >
      {children}
    </div>
  );
}
