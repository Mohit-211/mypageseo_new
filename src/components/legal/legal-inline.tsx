import { Fragment, type ReactNode } from "react";

// Order matters: bold/code first, then links.
const TOKEN =
  /(\*\*[^*]+\*\*|`[^`]+`|[\w.+-]+@[\w-]+(?:\.[\w-]+)+|https?:\/\/[^\s)]+)/g;

const linkClass =
  "font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary";

/** Renders the tiny inline markup used in legal data files. */
export function LegalInline({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);

  return (
    <>
      {parts.map((part, i): ReactNode => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              <LegalInline text={part.slice(2, -2)} />
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={i} className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
              {part.slice(1, -1)}
            </code>
          );
        }
        if (/^https?:\/\//.test(part)) {
          const internal = part.startsWith("https://mypageseo.com");
          return (
            <a
              key={i}
              href={part}
              className={linkClass}
              {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {part}
            </a>
          );
        }
        if (/^[\w.+-]+@[\w-]+(?:\.[\w-]+)+$/.test(part)) {
          return (
            <a key={i} href={`mailto:${part}`} className={linkClass}>
              {part}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
