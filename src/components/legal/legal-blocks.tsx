import type { LegalBlock } from "@/lib/legal/types";
import { LegalInline } from "./legal-inline";

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <LegalInline text={block.text} />
        </p>
      );
    case "h3":
      return (
        <h3 className="pt-3 text-base font-semibold text-foreground">
          <LegalInline text={block.text} />
        </h3>
      );
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag
          className={`space-y-1.5 pl-5 marker:text-accent ${
            block.ordered ? "list-decimal" : "list-disc"
          } ${!block.ordered && block.items.length > 8 ? "sm:columns-2 sm:gap-8 [&>li]:break-inside-avoid" : ""}`}
        >
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">
              <LegalInline text={item} />
            </li>
          ))}
        </Tag>
      );
    }
    case "address":
      return (
        <address className="rounded-xl bg-muted/50 px-5 py-4 not-italic ring-soft">
          {block.lines.map((line, i) =>
            line === "" ? (
              <div key={i} className="h-3" aria-hidden />
            ) : (
              <div key={i}>
                <LegalInline text={line} />
              </div>
            ),
          )}
        </address>
      );
    case "note":
      return (
        <p className="rounded-xl border-l-4 border-accent bg-accent/5 px-5 py-3 font-semibold text-foreground">
          <LegalInline text={block.text} />
        </p>
      );
  }
}

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
