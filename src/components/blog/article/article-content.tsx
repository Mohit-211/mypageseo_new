"use client";

import { useMemo } from "react";
import { useActiveSection, TableOfContents, MobileToc } from "./table-of-contents";
import { ArticleProse } from "./article-prose";
import type { Section } from "./article-data";

interface ArticleContentProps {
  content: string;
  sections: Section[];
}

export function ArticleContent({ content, sections }: ArticleContentProps) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const active = useActiveSection(ids);
  const hasToc = sections.length > 0;

  return (
    <section className="pb-20">
      <div className="container-page max-w-7xl">
        <div className={hasToc ? "grid lg:grid-cols-[220px_minmax(0,1fr)] gap-12" : ""}>
          {hasToc && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <TableOfContents sections={sections} active={active} />
              </div>
            </aside>
          )}

          <article className="max-w-3xl mx-auto lg:mx-0 w-full">
            {hasToc && <MobileToc sections={sections} active={active} />}
            <ArticleProse content={content} />
 
         
     </article>
        </div>
      </div>
    </section>
  );
}
