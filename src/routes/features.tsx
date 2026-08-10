import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Passr Ticket Price Intelligence" },
      {
        name: "description",
        content:
          "Passr compares every ticket marketplace, alerts you on price drops, and checks out in one tap. See the three features that get you in the room.",
      },
      { property: "og:title", content: "Features — Passr Ticket Price Intelligence" },
      {
        property: "og:description",
        content: "Price comparison, drop alerts, and one-tap checkout for live events.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeaturesPage,
});

const features = [
  {
    n: "01",
    title: "True Out-the-Door Price Matching",
    body: "Standard tools only show the base price. Passr injects directly into your checkout page, strips away hidden platform service fees, and instantly compares the exact final cost across every secondary marketplace simultaneously. You see the true mathematical minimum before entering a credit card.",
  },
  {
    n: "02",
    title: "Market Value Validation",
    body: "Stop guessing if a ticket is actually a good deal. We pull historical sales data for the exact section and row you are viewing. The overlay maps current pricing against the 30-day market average, showing you whether you are buying at a peak or a dip.",
  },
  {
    n: "03",
    title: "Inventory Authenticity Scan",
    body: "Many marketplaces list speculative tickets they do not actually own yet. Our engine cross-checks the unique listing ID against primary venue manifests in real-time, verifying that the physical seat is locked in stock and actively available before you hit purchase.",
  },
];

function FeaturesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-40 text-center md:px-12 md:pt-48">
        <p className="eyebrow text-muted-foreground">Features</p>
        <h1 className="font-display mx-auto mt-8 max-w-[20ch] text-[clamp(2.5rem,7vw,6rem)] leading-[0.94] tracking-[-0.03em]">
          Built For The Front Row
        </h1>
        <p className="mx-auto mt-7 max-w-[46ch] text-sm leading-relaxed text-muted-foreground md:text-base">
          Three things Passr does relentlessly well. Scroll.
        </p>
      </section>

      {features.map((f) => (
        <FeatureStage key={f.n} {...f} />
      ))}

      <section className="mx-auto max-w-[1400px] px-6 pb-32 pt-8 text-center md:px-12">
        <p className="eyebrow text-muted-foreground">Ready when you are</p>
        <p className="font-display mx-auto mt-6 max-w-[24ch] text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.02em]">
          Never miss the show again.
        </p>
      </section>
    </div>
  );
}

function FeatureStage({ n, title, body }: { n: string; title: string; body: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [70, 0, 0, -70]);
  const numberScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.18]);
  const numberOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0, 0.08, 0.08, 0]);

  return (
    <section ref={ref} className="relative h-[120vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        <motion.span
          aria-hidden="true"
          style={{ scale: numberScale, opacity: numberOpacity }}
          className="font-display pointer-events-none absolute select-none text-[42vw] leading-none tracking-[-0.05em] text-obsidian md:text-[30vw]"
        >
          {n}
        </motion.span>

        <motion.div
          style={{ opacity, y }}
          className="relative mx-auto max-w-[52ch] text-center"
        >
          <p className="eyebrow text-iris">#{n}</p>
          <h2 className="font-display mt-6 text-[clamp(2rem,5.5vw,4.25rem)] leading-[1] tracking-[-0.03em]">
            {title}
          </h2>
          <p className="mt-7 text-sm leading-relaxed text-muted-foreground md:text-base">{body}</p>
        </motion.div>
      </div>
    </section>
  );
}
