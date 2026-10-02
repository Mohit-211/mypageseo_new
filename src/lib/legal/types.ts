/**
 * Content model for legal documents (Privacy Policy, Terms & Conditions).
 *
 * Inline text supports a tiny markup so the data files stay readable:
 *   **bold**      → <strong>
 *   `code`        → <code>
 *   emails / https URLs are auto-linked.
 */
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "address"; lines: string[] }
  | { type: "note"; text: string };

export interface LegalSection {
  /** Used as the anchor (#id) and for the table of contents. */
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  title: string;
  /** Short summary used for <meta description> and under the page title. */
  description: string;
  /** Route path, e.g. "/privacy-policy". */
  path: string;
  /** ISO date (YYYY-MM-DD) or null while still to be confirmed. */
  effectiveDate: string | null;
  lastUpdated: string | null;
  intro: LegalBlock[];
  sections: LegalSection[];
}
