"use client";

import { useMemo } from "react";
import { sections, useActiveSection, TableOfContents, MobileToc } from "./table-of-contents";
import { ArticleProse } from "./article-prose";

export function ArticleContent() {
  const ids = useMemo(() => sections.map((s) => s.id), []);
  const active = useActiveSection(ids);

  return (
    <section className="pb-20">
      <div className="container-page max-w-7xl">
        <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents active={active} />
            </div>
          </aside>

          <article className="max-w-3xl mx-auto lg:mx-0 w-full">
            <MobileToc active={active} />
            <ArticleProse />
          </article>
        </div>
      </div>
    </section>
  );
}
