"use client";

import { useEffect, useState } from "react";
import { ChevronDown, List } from "lucide-react";

export type Section = { id: string; title: string };

export const sections: Section[] = [
  { id: "intro", title: "Why local search changed again" },
  { id: "signals", title: "The signals that matter in 2026" },
  { id: "gbp", title: "Google Business Profile essentials" },
  { id: "reviews", title: "Reviews, velocity, and sentiment" },
  { id: "citations", title: "Citations and NAP consistency" },
  { id: "rankings", title: "Measuring what actually moves" },
  { id: "workflow", title: "A weekly Local SEO workflow" },
  { id: "conclusion", title: "The takeaway" },
];

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return active;
}

interface TableOfContentsProps {
  active: string;
}

export function TableOfContents({ active }: TableOfContentsProps) {
  return (
    <nav className="space-y-1">
      <div className="text-[11px] font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-1.5">
        <List className="w-3.5 h-3.5" /> On this page
      </div>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`block text-sm py-1.5 pl-3 border-l-2 transition-colors ${
            active === s.id
              ? "border-accent text-primary font-medium"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          }`}
        >
          {s.title}
        </a>
      ))}
    </nav>
  );
}

interface MobileTocProps {
  active: string;
}

export function MobileToc({ active }: MobileTocProps) {
  const [open, setOpen] = useState(false);
  const current = sections.find((s) => s.id === active) ?? sections[0];
  return (
    <div className="lg:hidden not-prose my-6 rounded-2xl bg-card ring-soft overflow-hidden">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between px-4 py-3 text-left">
        <span className="flex items-center gap-2 text-sm">
          <List className="w-4 h-4 text-accent" />
          <span className="text-muted-foreground">On this page:</span>
          <span className="font-medium text-foreground truncate">{current.title}</span>
        </span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 border-t border-border pt-3">
          <TableOfContents active={active} />
        </div>
      )}
    </div>
  );
}
