"use client";

import { useMemo } from "react";
import { useActiveSection, MobileToc } from "./table-of-contents";
import { ArticleProse } from "./article-prose";
import type { Section } from "./article-data";

interface ArticleContentProps {
  content: string;
  sections: Section[];
}

export function ArticleContent({ content, sections }: ArticleContentProps) {
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const active = useActiveSection(ids);

  return (
    <section className="container-page max-w-3xl pb-24">
      {sections.length > 0 && <MobileToc sections={sections} active={active} />}
      <ArticleProse content={content} />
    </section>
  );
}
