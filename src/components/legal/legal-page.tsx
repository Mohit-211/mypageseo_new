import Link from "next/link";
import type { Metadata } from "next";
import { COMPANY } from "@/lib/legal/company";
import type { LegalDocument } from "@/lib/legal/types";
import { LegalBlocks } from "./legal-blocks";
import { LegalToc } from "./legal-toc";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function legalMetadata(doc: LegalDocument): Metadata {
  return {
    title: doc.title, // root layout template appends "| MyPageSEO"
    description: doc.description,
    alternates: { canonical: doc.path },
    openGraph: { title: `${doc.title} | MyPageSEO`, description: doc.description, url: doc.path },
  };
}

/** Section titles get their number prepended in the TOC and heading. */
function numbered(doc: LegalDocument) {
  return doc.sections.map((s, i) => ({ ...s, title: `${i + 1}. ${s.title}` }));
}

export function LegalPage({ doc }: { doc: LegalDocument }) {
  const sections = numbered(doc);
  const toc = sections.map(({ id, title }) => ({ id, title }));
  const otherDoc =
    doc.path === "/privacy-policy"
      ? { href: "/terms-conditions", label: "Terms & Conditions" }
      : { href: "/privacy-policy", label: "Privacy Policy" };

  return (
    <main>
      <header className="border-b border-border bg-radial-soft">
        <div className="container-page py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">Legal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{doc.description}</p>
          {(doc.effectiveDate || doc.lastUpdated) && (
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {doc.effectiveDate && (
                <div className="flex gap-2">
                  <dt className="text-muted-foreground">Effective</dt>
                  <dd className="font-medium text-foreground">
                    <time dateTime={doc.effectiveDate}>{formatDate(doc.effectiveDate)}</time>
                  </dd>
                </div>
              )}
              {doc.lastUpdated && (
                <div className="flex gap-2">
                  <dt className="text-muted-foreground">Last updated</dt>
                  <dd className="font-medium text-foreground">
                    <time dateTime={doc.lastUpdated}>{formatDate(doc.lastUpdated)}</time>
                  </dd>
                </div>
              )}
            </dl>
          )}
        </div>
      </header>

      <div className="container-page grid gap-2 py-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-16">
        <LegalToc sections={toc} />

        <article className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
          <LegalBlocks blocks={doc.intro} />

          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="scroll-mt-28 border-t border-border pt-10 mt-10"
            >
              <h2
                id={`${section.id}-heading`}
                className="mb-5 text-xl font-semibold tracking-tight text-foreground md:text-2xl"
              >
                {section.title}
              </h2>
              <LegalBlocks blocks={section.blocks} />
            </section>
          ))}

          <footer className="mt-14 rounded-2xl bg-card p-6 ring-soft">
            <p className="text-sm">
              Questions about this document? Email{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-medium text-primary underline underline-offset-4"
              >
                {COMPANY.email}
              </a>
              . See also our{" "}
              <Link href={otherDoc.href} className="font-medium text-primary underline underline-offset-4">
                {otherDoc.label}
              </Link>
              .
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}
