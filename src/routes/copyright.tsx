import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/copyright")({
  head: () => ({
    meta: [
      { title: "Copyright — Passr" },
      { name: "description", content: "Copyright information for Passr." },
    ],
  }),
  component: CopyrightPage,
});

function CopyrightPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-[900px] px-6 pb-32 pt-40 md:px-12 md:pt-48">
        <p className="eyebrow text-muted-foreground">Legal</p>
        <h1 className="font-display mt-8 text-[clamp(2rem,5vw,3.5rem)] leading-[0.98] tracking-[-0.03em]">
          Copyright
        </h1>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>© 2026 Passr. All Rights Reserved.</p>
          <p>[Replace this with your actual copyright/DMCA content.]</p>
        </div>
      </section>
    </div>
  );
}
