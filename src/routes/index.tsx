import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import crowd from "@/assets/crowd.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Passr — Never Miss The Show" },
      {
        name: "description",
        content:
          "Passr finds the best prices across thousands of live events, so you never miss the show.",
      },
      { property: "og:title", content: "Passr — Never Miss The Show" },
      {
        property: "og:description",
        content: "Passr finds the best prices across thousands of live events.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const partners = ["LUMIÈRE", "ATLAS ARENA", "NOCTURNE", "ROSEWOOD LIVE", "MERIDIAN"];

function Index() {
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const headlineY = useTransform(scrollYProgress, [0, 0.6], ["0px", "-64px"]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const logosOpacity = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);
  const logosY = useTransform(scrollYProgress, [0.25, 0.65], ["28px", "0px"]);

  return (
    <div className="bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-12">
          <span className="font-display text-2xl tracking-[-0.02em]">Passr</span>
          <a
            href="#partners"
            className="rounded-full bg-primary px-6 py-2.5 text-[0.8125rem] font-medium tracking-wide text-primary-foreground transition-opacity duration-300 hover:opacity-80"
          >
            Find tickets
          </a>
        </div>
      </header>

      <main>
        <section ref={stageRef} className="relative h-[220vh]">
          <div
            className="sticky top-0 h-screen overflow-hidden"
          >
            <motion.div
              style={{ y: headlineY, opacity: headlineOpacity }}
              className="relative z-20 flex flex-col items-center px-6 pt-[26vh] text-center"
            >
              <p className="eyebrow text-muted-foreground">Live events, fairly priced</p>
              <h1 className="font-display mt-8 max-w-[18ch] text-[clamp(2.75rem,8.5vw,7.5rem)] leading-[0.94] tracking-[-0.03em]">
                Never Miss The Show
              </h1>
              <p className="mt-7 max-w-[42ch] text-sm leading-relaxed text-muted-foreground md:text-base">
                Passr finds the best prices across thousands of live events.
              </p>
            </motion.div>

            <motion.div
              id="partners"
              style={{ opacity: logosOpacity, y: logosY }}
              className="absolute inset-x-0 bottom-10 z-30 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 md:gap-x-16"
            >
              {partners.map((p) => (
                <span
                  key={p}
                  className="text-[0.6875rem] font-medium tracking-[0.3em] text-primary-foreground/55 md:text-xs"
                >
                  {p}
                </span>
              ))}
            </motion.div>

            <motion.div
              style={{ scale, y, transformOrigin: "50% 100%" }}
              className="crowd-mask pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[62vh]"
            >
              <img
                src={crowd}
                alt="High-contrast silhouette of a concert crowd with hands raised"
                width={1920}
                height={1088}
                className="h-full w-full object-cover object-bottom"
              />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
