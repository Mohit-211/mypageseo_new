import type { ReactNode } from "react";
import { Quote } from "lucide-react";

interface PullQuoteProps {
  children: ReactNode;
  cite?: string;
}

export function PullQuote({ children, cite }: PullQuoteProps) {
  return (
    <blockquote className="not-prose my-10 relative pl-6 md:pl-10 border-l-4 border-accent">
      <Quote className="absolute -left-3 -top-2 w-6 h-6 text-accent bg-background" />
      <p className="font-display text-2xl md:text-3xl text-foreground leading-snug">{children}</p>
      {cite && <cite className="mt-3 block text-sm text-muted-foreground not-italic">— {cite}</cite>}
    </blockquote>
  );
}
