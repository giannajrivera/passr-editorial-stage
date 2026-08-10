import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Passr" },
      {
        name: "description",
        content:
          "How Passr finds the lowest all-in ticket price, how alerts work, which marketplaces we cover, refunds, and fees.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Passr" },
      {
        property: "og:description",
        content: "Answers on pricing, alerts, marketplaces, refunds, and fees.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

const faqCategories = [
  {
    category: "Legality & Trust",
    faqs: [
      {
        q: "Is using this extension legal? Will I get banned from Ticketmaster, AXS, or StubHub?",
        a: "Yes, it is 100% legal and completely compliant with platform guidelines. The extension acts purely as a passive local client assistant. It functions strictly inside your own browser window, reading only the public elements displayed on your screen—exactly like a human eye would. Because it does not run automated purchase flows, bypass security barriers, jump queues, or scrape backend servers via unauthorized automated API requests, it does not violate anti-bot legislation (such as the BOTS Act) or standard marketplace Terms of Service. Your accounts are completely safe and secure.",
      },
      {
        q: "Does this extension buy tickets for me or hold my credit card data?",
        a: "No. Our application does not have a transactional backend, checkout capability, or payment processing infrastructure. We never collect, transmit, or store your credit card information, billing addresses, or primary platform credentials. When the overlay finds a lower cost matching your criteria, it functions strictly as a routing tool, presenting a direct hyperlink to the official checkout page of that verified partner network. All transactional liabilities and payment processing take place securely on their primary, heavily encrypted checkout gateways.",
      },
    ],
  },
  {
    category: "Privacy & Data Tracking",
    faqs: [
      {
        q: "How do I know you aren't tracking my passwords, private data, or browsing history?",
        a: "Our extension is architecture-bound by a strict 'Privacy by Design' framework and operates under the principle of least privilege. We use the browser's native manifest permissions to ensure the extension code is completely sandboxed. It remains entirely dormant, restricted, and unable to execute or read text on 99% of the web. It only executes runtime permissions when your active browser tab explicitly loads a pre-verified ticketing domain (e.g., ticketmaster.com, axs.com, stubhub.com). We do not deploy keyloggers, tracking scripts, or background session recorders, meaning your passwords, personal emails, financial statements, and outside browsing habits remain perfectly invisible to us.",
      },
      {
        q: "What data do you actually collect and store?",
        a: "We collect zero personally identifiable information (PII) by default. The extension only reads the static event metadata actively rendered on your active screen: specifically the event name, venue location, section, row, quantity, and current price. This data is processed locally in temporary memory to generate matches. The only data permanently written to our secure, encrypted database is when you manually choose to create a 'Drop Alert'—in which case we store only your user profile identifier, target price threshold, and the specific event details so our background indexing worker knows when to dispatch your notification.",
      },
    ],
  },
  {
    category: "Business Model & Accuracy",
    faqs: [
      {
        q: "How is this platform completely free? How do you make money?",
        a: "Transparency is our core product, so our consumer browser extension is permanently free to use, and we never monetize by selling your data or using sneaky background affiliate cookie-stuffing tactics. Instead, our business model relies on two clear revenue streams: a premium tier for commercial power-users (like high-volume ticket brokers and professional optimization firms) who require enterprise-grade webhooks and instantaneous multi-channel alerting infrastructure, and transparent, fixed-fee partnerships with select white-label secondary networks that want to compete for your business directly inside the marketplace window.",
      },
      {
        q: "How accurate are your price comparisons and hidden fee estimates?",
        a: "Our data mapping pipeline executes multi-threaded indexing routines every few seconds to guarantee localized inventory accuracy. Secondary platforms frequently dynamically adjust their service fees based on venue, market volume, and geographical location. While our fee-decrypter utilizes real-time tracking data to calculate an incredibly precise estimated out-the-door final price, regional checkout taxes or platform updates can create minute variances. We always provide a clear notice advising you to verify the definitive cost breakdown on the terminal landing page before authorizing your final payment.",
      },
    ],
  },
] as const;

function FaqPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-40 md:px-12 md:pt-48">
        <p className="eyebrow text-muted-foreground">Support</p>
        <h1 className="font-display mt-8 max-w-[22ch] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.96] tracking-[-0.03em]">
          Frequently Asked Questions
        </h1>
        <p className="mt-7 max-w-[48ch] text-sm leading-relaxed text-muted-foreground md:text-base">
          Everything about pricing, alerts, and getting into the room.
        </p>

        <div className="mt-16 max-w-[70ch]">
          {faqCategories.map((group) => (
            <div key={group.category} className="mb-12 last:mb-0">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                {group.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {group.faqs.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`${group.category}-item-${i}`}
                    className="border-border/70"
                  >
                    <AccordionTrigger className="text-left text-base font-medium tracking-[-0.01em] hover:no-underline md:text-lg">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground md:text-base">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Have more questions about your data? Read our full Privacy Promise.
          </p>
        </div>
      </section>
    </div>
  );
}
