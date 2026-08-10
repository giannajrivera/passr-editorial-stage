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
          "How Passr finds the lowest all-in ticket price, how alerts work, which marketplaces we cover, refunds, and fees — answered.",
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

const faqs = [
  {
    q: "How does Passr find a lower price?",
    a: "We index primary and resale inventory across thousands of listings in real time and normalise every price to its all-in total, fees and delivery included. The number you see is the number you pay.",
  },
  {
    q: "Does Passr charge me anything?",
    a: "No. Passr is free for fans. We earn a referral fee from the marketplace when you check out, and that fee never changes the price you are quoted.",
  },
  {
    q: "Which marketplaces do you cover?",
    a: "All major verified resale platforms plus official box offices and venue presales. If a listing cannot be verified, it does not appear in Passr.",
  },
  {
    q: "How do price drop alerts work?",
    a: "Follow an event, set a target price or section, and Passr watches it continuously. You get one precise notification when your condition is met — not a daily digest.",
  },
  {
    q: "Are my tickets guaranteed?",
    a: "Yes. Every checkout runs through the marketplace's own buyer guarantee, so you are covered for valid entry or a full refund.",
  },
  {
    q: "Can I get a refund?",
    a: "Refunds follow the policy of the marketplace you purchased from. Passr surfaces that policy before checkout so there are no surprises, and our team will help you file a claim.",
  },
];

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
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border/70">
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
      </section>
    </div>
  );
}
