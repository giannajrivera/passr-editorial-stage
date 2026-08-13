import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Passr" },
      {
        name: "description",
        content:
          "Passr is free for event discovery. Upgrade to Passr+ for $5/month to unlock ticket drop alerts, presale access, price intelligence, and more.",
      },
      { property: "og:title", content: "Pricing — Passr" },
      {
        property: "og:description",
        content:
          "Free event discovery. Passr+ for $5/month gets you alerts, presales, and price intelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const freeFeatures = [
  "Personalized event discovery",
  "Search & browse events",
  "Follow artists, venues & genres",
  "Save events",
  "Basic event notifications",
  "Ticket price & availability",
  "Direct ticket links",
  "Basic recommendations",
];

const plusFeatures = [
  "Everything in Free",
  "Ticket drop alerts",
  "Presale & on-sale alerts",
  "Price intelligence",
  "Unlimited tracking",
  "AI event concierge",
  "Smart calendar & planning",
  "Ad-free discovery",
];

const valueBlocks = [
  {
    title: "Get there first",
    body: "Be the first to know about presales, new ticket drops, and price changes.",
  },
  {
    title: "Know when to buy",
    body: "Use price history and alerts to make smarter ticket decisions.",
  },
  {
    title: "Find better events",
    body: "Get more personalized recommendations based on the artists, venues, genres, and events you care about.",
  },
  {
    title: "Make a night of it",
    body: "Go from 'what should we do?' to a full night out with smarter planning and recommendations.",
  },
];

function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="mx-auto max-w-[1100px] px-6 pb-32 pt-36 md:pt-44">
        {/* Hero */}
        <section className="text-center">
          <p className="eyebrow text-muted-foreground">Pricing</p>
          <h1 className="font-display mx-auto mt-8 max-w-[20ch] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.96] tracking-[-0.03em]">
            Never miss the events you care about.
          </h1>
          <p className="mx-auto mt-6 max-w-[50ch] text-sm leading-relaxed text-muted-foreground md:text-base">
            Discover what&apos;s happening. Get ahead of ticket drops. Plan better nights out.
          </p>
        </section>

        {/* Pricing cards */}
        <section className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2">
          <PricingCard
            name="Free"
            price="$0"
            period="/ month"
            description="For discovering what's happening."
            features={freeFeatures}
            cta="Get Started — Free"
            href="/features"
            variant="free"
          />
          <PricingCard
            name="Passr+"
            price="$5"
            period="/ month"
            description="For people who never want to miss an event."
            features={plusFeatures}
            cta="Start Passr+ — $5/month"
            variant="plus"
            badge="MOST POPULAR"
            onCta={() =>
              toast("Passr+ checkout is coming soon.", {
                description: "You can start exploring events for free today.",
              })
            }
          />
        </section>

        {/* Why Passr+ */}
        <section className="mt-24 md:mt-32">
          <p className="eyebrow text-center text-muted-foreground">Why Passr+?</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueBlocks.map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="font-display text-lg tracking-[-0.02em] text-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-24 text-center md:mt-32">
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.02] tracking-[-0.02em]">
            Ready to find your next night out?
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-sm text-muted-foreground md:text-base">
            Start discovering for free, or unlock Passr+ for $5/month.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/features"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-[0.8125rem] font-medium tracking-wide text-primary-foreground transition-opacity duration-300 hover:opacity-85"
            >
              Start Exploring
            </Link>
            <Link
              to="/features"
              className="text-sm text-muted-foreground underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline"
            >
              Learn about Passr+
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  href,
  variant,
  badge,
  onCta,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href?: string;
  variant: "free" | "plus";
  badge?: string;
  onCta?: () => void;
}) {
  const isPlus = variant === "plus";

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl border p-6 transition-all duration-300 md:p-8",
        isPlus
          ? "border-iris/25 bg-card shadow-lg shadow-iris/[0.04] hover:shadow-xl hover:shadow-iris/[0.06] md:-translate-y-1 md:scale-[1.01]"
          : "border-border/70 bg-card hover:border-iris/20"
      )}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-iris px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground">
          {badge}
        </span>
      )}

      <div className="mb-6">
        <h2 className="font-display text-2xl tracking-[-0.02em]">{name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        <span className="font-display text-5xl tracking-[-0.03em]">{price}</span>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 size-4 flex-shrink-0 text-iris" aria-hidden="true" />
            <span className="text-foreground/90">{f}</span>
          </li>
        ))}
      </ul>

      {isPlus ? (
        <button
          onClick={onCta}
          className="w-full rounded-full bg-iris px-6 py-3 text-[0.8125rem] font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
        >
          {cta}
        </button>
      ) : (
        <Link
          to={href!}
          className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-[0.8125rem] font-medium tracking-wide text-primary-foreground transition-opacity duration-300 hover:opacity-85"
        >
          {cta}
        </Link>
      )}
    </div>
  );
}
