import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/return-policy")({
  head: () => ({
    meta: [
      { title: "Return Policy — Passr" },
      { name: "description", content: "Passr&apos;s return and refund policy overview." },
    ],
  }),
  component: ReturnPolicyPage,
});

function ReturnPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-[900px] px-6 pb-32 pt-40 md:px-12 md:pt-48">
        {/* Top Category Label */}
        <p className="eyebrow text-muted-foreground">Legal</p>
        
        {/* Main Title */}
        <h1 className="font-display mt-8 text-[clamp(2rem,5vw,3.5rem)] leading-[0.98] tracking-[-0.03em]">
          Return &amp; Resale Policy
        </h1>
        
        {/* Content Container */}
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground md:text-base">
          
          <p className="text-xs uppercase tracking-wider font-semibold text-foreground">
            Last Updated: August 10, 2026
          </p>

          <p>
            Passr is a price comparison and alert tool for tickets to live events — concerts, festivals, sporting events, conventions (including comic cons), theater, and other ticketed experiences. This policy explains how returns, refunds, exchanges, and resale work when you use Passr — and why that process happens almost entirely on the marketplace where you complete your purchase (&ldquo;<strong>Marketplace</strong>&rdquo;), not on Passr itself.
          </p>

          {/* Section 1 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">1. Passr Does Not Sell, Issue, or Hold Tickets</h2>
            <p>
              Passr does not process ticket sales, hold ticket inventory, act as the seller or reseller of record for any ticket, or take possession of funds for a ticket purchase. We compare listings, pricing, and availability across third-party Marketplaces and route you to complete your purchase directly on the Marketplace&apos;s site or app. Because of this:
            </p>
            
            <p className="border-l-2 border-foreground/20 pl-4 my-4 font-medium text-foreground bg-muted/10 p-3 rounded-r">
              All returns, refunds, exchanges, cancellations, transfers, and resale of tickets are governed entirely by the policy of the Marketplace where you made your purchase — not by Passr.
            </p>

            <p>
              Ticket Marketplaces vary widely in their policies, and the right policy for your situation depends on (a) which Marketplace you bought from, and (b) whether your ticket came from the primary market (the venue, promoter, or official ticketing partner) or the secondary/resale market (an individual or professional reseller). Examples of what you might encounter — none of which Passr controls or guarantees:
            </p>

            <ul className="list-disc pl-5 space-y-3 marker:text-muted-foreground">
              <li>
                <strong className="text-foreground">All sales final.</strong> Common on many resale marketplaces once a purchase is completed.
              </li>
              <li>
                <strong className="text-foreground">Buyer guarantees.</strong> Some Marketplaces commit to a replacement ticket or a refund if a ticket turns out to be invalid, counterfeit, significantly not as described, or if you&apos;re denied entry through no fault of your own.
              </li>
              <li>
                <strong className="text-foreground">Resale/relisting options.</strong> Some Marketplaces let you relist a ticket you can no longer use, sometimes for a fee or only above/below certain price limits set by the venue or artist.
              </li>
              <li>
                <strong className="text-foreground">Ticket transfer.</strong> Some tickets (particularly mobile/digital tickets) can be transferred to another person through the Marketplace&apos;s app; others cannot.
              </li>
              <li>
                <strong className="text-foreground">Event-specific policies.</strong> Marketplaces and venues generally differ in how they handle outright cancellations versus postponements versus reschedulings versus venue changes.
              </li>
            </ul>

            <p className="pt-2">
              Before purchasing, always review the specific Marketplace&apos;s return, refund, exchange, and buyer protection policy — it is typically linked on their checkout page or listing page so you know exactly what applies to that purchase before you buy.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">2. If an Event Is Canceled, Postponed, or Rescheduled</h2>
            <p>
              Passr has no ability to issue a refund, credit, or exchange for any ticket, since we are never the seller and never hold your payment. If your Event is canceled, postponed, or rescheduled:
            </p>
            <ol className="list-decimal pl-5 space-y-3 marker:text-muted-foreground">
              <li>
                <strong className="text-foreground">Contact the Marketplace</strong> or platform where you purchased the ticket directly. They control the transaction and will be able to tell you whether a refund, credit, or exchange applies to your specific purchase.
              </li>
              <li>
                Refund eligibility for postponed or rescheduled Events is often handled differently than outright cancellations — for example, a Marketplace may treat your existing ticket as automatically valid for the new date, and only offer a refund on request within a limited window. Check the Marketplace&apos;s specific policy for the Event.
              </li>
              <li>
                If your ticket was purchased through the primary market (directly from the venue, team, or official ticketing partner), refund policies for cancellations are often more standardized than on secondary/resale marketplaces — but this still depends on the seller and event terms.
              </li>
            </ol>
          </div>

          {/* Section 3 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">3. If You Believe a Listing on Passr Was Inaccurate</h2>
            <p>
              Passr aims to display accurate, up-to-date pricing, fee, seat/section, and availability information pulled from our Marketplace partners. If a listing you clicked through to purchase turned out to be inaccurate, unavailable, priced differently at checkout, or misleading at the point of sale:
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-muted-foreground">
              <li>
                The Marketplace where you completed the purchase is responsible for resolving the transaction issue, since they controlled the actual sale, checkout, pricing, and fees at the time of purchase.
              </li>
              <li>
                We still want to know about it. Report the discrepancy to us at{' '}
                <a href="mailto:support@passr.com" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">
                  support@passr.com
                </a>{' '}
                with the Event, listing, Marketplace, and what you saw on Passr versus at checkout, so we can investigate and improve the accuracy of our comparisons going forward.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">4. Fraudulent, Counterfeit, or Invalid Tickets</h2>
            <p>
              If you receive a ticket that you believe is counterfeit, invalid, duplicated, or otherwise not as described:
            </p>
            <ol className="list-decimal pl-5 space-y-3 marker:text-muted-foreground">
              <li>
                <strong className="text-foreground">Contact the Marketplace immediately</strong> — most established Marketplaces offer a buyer guarantee covering exactly this situation, often including a full refund or a replacement ticket of equal or greater value.
              </li>
              <li>
                Keep your order confirmation, ticket file, and any correspondence with the seller, as the Marketplace will typically require this documentation to process a claim.
              </li>
              <li>
                Passr does not investigate, adjudicate, or resolve ticket authenticity disputes, and does not issue refunds or replacements for tickets purchased through a Marketplace, but you&apos;re welcome to let us know at{' '}
                <a href="mailto:support@passr.com" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">
                  support@passr.com
                </a>{' '}
                so we can consider deprioritizing or flagging unreliable listing sources in our comparisons.
              </li>
            </ol>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">5. Passr Account and Subscription Refunds</h2>
            <p>
              As of this policy&apos;s drafting, Passr&apos;s core comparison and alert features are free to use, so no Passr-side refund process currently applies. If Passr introduces a paid tier — such as premium alerts, ad-free browsing, or a subscription — this section will be updated with your actual refund terms for that specific offering.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">6. What Passr Can Help With</h2>
            <p>
              While we don&apos;t process returns or refunds, we can help you:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-muted-foreground">
              <li>Identify which Marketplace and listing you originally clicked through from, if you&apos;re unsure</li>
              <li>Report inaccurate or misleading listing data so we can improve future comparisons</li>
              <li>Understand, in general terms, how primary versus secondary ticket markets typically differ in refund practices — though we always recommend confirming directly with the Marketplace for your specific purchase</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 pt-4">
            <h2 className="text-xl font-medium text-foreground tracking-tight">7. Questions</h2>
            <p>
              If you&apos;re unsure whether an issue should be directed to us or to the Marketplace you purchased from, contact us at{' '}
              <a href="mailto:support@passr.com" className="underline text-foreground decoration-muted-foreground hover:decoration-foreground transition-colors">
                support@passr.com
              </a>{' '}
              and we&apos;ll point you in the right direction.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
