import { Callout } from "./callout";
import { PullQuote } from "./pull-quote";
import { ArticleCover } from "./article-cover";

export function ArticleProse() {
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
        prose-table:text-sm"
    >
      <p className="lead text-xl leading-relaxed text-foreground/90">
        Local search rewards specificity. Every year, the businesses that win in Google Maps and the local pack are the ones treating Local SEO as its own discipline — with its own signals, its own metrics, and its own weekly rhythm. Here&apos;s how that looks in 2026.
      </p>

      <h2 id="intro">Why local search changed again</h2>
      <p>
        Google&apos;s local ranking systems continue to lean into intent, proximity, and confidence. The result: businesses with clean, complete profiles, consistent citation footprints, and a steady stream of thoughtful reviews are pulling ahead — while businesses relying on general SEO tactics are losing ground in the map pack.
      </p>
      <p>
        What has genuinely changed this year is how much weight Google places on <strong>engagement signals inside the profile itself</strong> — profile views, direction requests, calls, website clicks, and messages — as a real-time confidence check on relevance.
      </p>

      <Callout kind="fact" title="Quick fact">
        In our audit sample of 480 U.S. and Canadian businesses, profiles that received at least three engagement actions per day averaged <strong>2.7× more direction requests</strong> than profiles below that threshold.
      </Callout>

      <h2 id="signals">The signals that matter in 2026</h2>
      <p>
        Local ranking factors have never been a fixed list, but a few categories have consistently moved the needle for our clients through the first half of 2026.
      </p>

      <h3>The short list</h3>
      <ol>
        <li><strong>Profile completeness and category depth.</strong> Primary and secondary categories, services, products, attributes.</li>
        <li><strong>Review volume, velocity, and sentiment.</strong> Not just how many, but how consistently they arrive.</li>
        <li><strong>Citation consistency across authoritative directories.</strong> NAP accuracy over quantity.</li>
        <li><strong>Behavioral signals from real customers.</strong> Direction requests, calls, and website taps.</li>
        <li><strong>On-page relevance for the target service area.</strong> Especially for multi-location and service-area businesses.</li>
      </ol>

      <h3>How they compare</h3>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl ring-soft">
        <table className="w-full text-sm">
          <thead className="bg-surface-muted text-foreground">
            <tr>
              <th className="text-left px-4 py-3 font-semibold">Signal</th>
              <th className="text-left px-4 py-3 font-semibold">Effort</th>
              <th className="text-left px-4 py-3 font-semibold">Impact</th>
              <th className="text-left px-4 py-3 font-semibold">Cadence</th>
            </tr>
          </thead>
          <tbody className="[&_tr]:border-t [&_tr]:border-border">
            {[
              ["GBP completeness", "Low", "High", "One-time + monthly review"],
              ["Review velocity", "Medium", "High", "Weekly"],
              ["Citation consistency", "Medium", "Medium", "Quarterly"],
              ["Engagement signals", "Indirect", "High", "Continuous"],
              ["On-page local relevance", "Medium", "High", "Per launch"],
            ].map((row, i) => (
              <tr key={i} className="hover:bg-surface-muted/60">
                {row.map((c, j) => (
                  <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-foreground" : "text-foreground/75"}`}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="gbp">Google Business Profile essentials</h2>
      <p>
        Your Google Business Profile is the single most important surface in Local SEO. It is where your visibility, your reputation, and your customer&apos;s first impression converge. Treat it like a product, not a directory listing.
      </p>

      <div className="not-prose my-8 rounded-2xl overflow-hidden ring-soft">
        <ArticleCover kind="gbp" className="aspect-[16/8]" />
      </div>

      <Callout kind="practice" title="Best practice">
        Complete every relevant field, including services with descriptions, products with photos, hours (regular and special), attributes, and Q&amp;A. Profiles that fill 95%+ of applicable fields outperform partially-completed profiles in nearly every category we&apos;ve measured.
      </Callout>

      <h3>Categories are ranking decisions</h3>
      <p>
        Choose a primary category that reflects your <em>most profitable</em> service, not your most general one. Layer in secondary categories that describe services you actually want to rank for. Categories are not tags — they are commitments Google uses to decide when to show you.
      </p>

      <Callout kind="mistake" title="Common mistake">
        Adding every remotely-relevant secondary category &quot;just in case.&quot; This dilutes relevance and can trigger quality reviews. Fewer, sharper categories usually rank better than a long, unfocused list.
      </Callout>

      <h2 id="reviews">Reviews, velocity, and sentiment</h2>
      <p>
        A 4.8-star business with reviews arriving weekly outranks a 4.9-star business with reviews arriving once a quarter — nearly every time. Velocity signals a healthy, active business. Sentiment signals what you&apos;re actually good at, in the customer&apos;s own words.
      </p>

      <PullQuote cite="MyPageSEO Editorial Team">
        The businesses that dominate their local market rarely have the most reviews. They almost always have the most <em>recent</em> reviews.
      </PullQuote>

      <ul>
        <li>Ask every satisfied customer within 48 hours of service.</li>
        <li>Respond to every review within 72 hours — including 5-star reviews.</li>
        <li>Watch for repeating keywords in reviews and echo them in your GBP services.</li>
      </ul>

      <h2 id="citations">Citations and NAP consistency</h2>
      <p>
        Citations still matter, but not the way they did a decade ago. Google no longer needs 200 directory listings to trust that your business exists. What it needs is <strong>consistency</strong> — the same business name, address, and phone number, presented identically across the sources that carry weight.
      </p>

      <div className="not-prose my-8 rounded-2xl overflow-hidden ring-soft">
        <ArticleCover kind="citations" className="aspect-[16/8]" />
      </div>

      <Callout kind="tip" title="Pro tip">
        Focus on 20–30 high-authority citations that are clean and consistent, then expand. A perfectly consistent listing on Google, Apple Maps, Bing Places, Yelp, and Facebook is worth more than 200 messy listings anywhere else.
      </Callout>

      <h2 id="rankings">Measuring what actually moves</h2>
      <p>
        A single average rank hides more than it reveals. A business that ranks #3 in one part of town and #14 across the highway isn&apos;t ranking #8 — it&apos;s ranking two completely different stories at once. Grid-based rank tracking makes that visible.
      </p>

      <div className="not-prose my-8 rounded-2xl overflow-hidden ring-soft">
        <ArticleCover kind="chart" className="aspect-[16/6]" />
      </div>

      <h2 id="workflow">A weekly Local SEO workflow</h2>
      <p>
        Consistency beats intensity. A 30-minute weekly rhythm outperforms sporadic all-day audits nearly every time. Here&apos;s a workflow we recommend for single-location businesses and one you can scale up for agencies.
      </p>
      <ol>
        <li><strong>Monday:</strong> Review the past week&apos;s ranking movement and profile engagement.</li>
        <li><strong>Tuesday:</strong> Respond to new reviews and monitor sentiment themes.</li>
        <li><strong>Wednesday:</strong> Publish one GBP post and refresh product/service listings if needed.</li>
        <li><strong>Thursday:</strong> Audit citations for any newly-detected mismatches.</li>
        <li><strong>Friday:</strong> Update the client dashboard and note the single highest-priority action for next week.</li>
      </ol>

      <h2 id="conclusion">The takeaway</h2>
      <p>
        Local SEO in 2026 is not more complicated than it used to be — it&apos;s more deliberate. The businesses winning right now are treating their profile as a living product, listening carefully to reviews, keeping their footprint clean, and measuring what customers actually do. That&apos;s the entire playbook.
      </p>
    </div>
  );
}
