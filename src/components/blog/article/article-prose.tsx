import ReactMarkdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema, type Options as SanitizeSchema } from "rehype-sanitize";
import type { ReactNode } from "react";

// Strips <script>, <iframe>, on* handlers, javascript: URLs, etc. from CMS HTML.
// Extends the GitHub-style default to keep inline data: images and image sizing.
const sanitizeSchema: SanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    img: [...(defaultSchema.attributes?.img ?? []), "width", "height", "loading"],
  },
  protocols: {
    ...defaultSchema.protocols,
    src: [...(defaultSchema.protocols?.src ?? []), "data"],
  },
};

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

// Default transform strips data: URIs, which the CMS uses for inline images.
function urlTransform(url: string, key: string): string {
  if (key === "src") {
    if (/^data:image\//i.test(url)) return url;
    if (url.startsWith("/")) return `${process.env.NEXT_PUBLIC_IMAGE_URL ?? ""}${url}`;
  }
  return defaultUrlTransform(url);
}

export function ArticleProse({ content }: ArticleProseProps) {
  return (
    <div
      className="prose prose-neutral prose-lg max-w-none
        prose-headings:text-foreground prose-headings:font-bold prose-headings:scroll-mt-28
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-strong:text-foreground
        prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-black
        prose-img:rounded-2xl prose-img:block prose-img:w-full prose-img:h-auto"
    >
      {content ? (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
          urlTransform={urlTransform}
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
