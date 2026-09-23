import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import type { ReactNode } from "react";

interface ArticleProseProps {
  content: string;
}

function textOf(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(textOf).join("");
  return "";
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[*_`~]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ArticleProse({ content }: ArticleProseProps) {
  return (
    <div
      className="prose prose-neutral max-w-none
        prose-headings:font-display prose-headings:tracking-tight prose-headings:text-foreground
        prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-14 prose-h2:mb-5
        prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3
        prose-p:text-foreground/85 prose-p:leading-[1.8] prose-p:text-[17px]
        prose-strong:text-foreground prose-strong:font-semibold
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-li:text-foreground/85 prose-li:leading-relaxed
        prose-img:rounded-2xl
        prose-table:text-sm"
    >
      {content ? (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h2: ({ children }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
            h3: ({ children }) => <h3 id={slugify(textOf(children))}>{children}</h3>,
          }}
        >
          {content}
        </ReactMarkdown>
      ) : (
        <p className="text-muted-foreground">This article doesn&apos;t have any content yet.</p>
      )}
    </div>
  );
}
