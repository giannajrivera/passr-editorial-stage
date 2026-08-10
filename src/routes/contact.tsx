import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Passr — Talk To The Team" },
      {
        name: "description",
        content:
          "Reach the Passr team about an order, a partnership, or press. Send a message and we reply within one business day.",
      },
      { property: "og:title", content: "Contact Passr — Talk To The Team" },
      {
        property: "og:description",
        content: "Order help, partnerships, and press enquiries — answered within a business day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 pb-32 pt-40 md:grid-cols-2 md:px-12 md:pt-48">
        <div>
          <p className="eyebrow text-muted-foreground">Contact</p>
          <h1 className="font-display mt-8 max-w-[16ch] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.96] tracking-[-0.03em]">
            Talk To Us
          </h1>
          <p className="mt-7 max-w-[42ch] text-sm leading-relaxed text-muted-foreground md:text-base">
            Order help, partnerships, or press. We read everything and reply within one business
            day.
          </p>

          <dl className="mt-14 space-y-8">
            <div>
              <dt className="eyebrow text-muted-foreground">Support</dt>
              <dd className="mt-2 text-base">help@passr.com</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Partnerships</dt>
              <dd className="mt-2 text-base">partners@passr.com</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Press</dt>
              <dd className="mt-2 text-base">press@passr.com</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Message sent — we'll be in touch shortly.");
          }}
          className="space-y-6 rounded-lg border border-border/70 bg-card p-8"
        >
          <div>
            <label htmlFor="name" className="eyebrow text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              required
              className="mt-3 w-full border-b border-border bg-transparent pb-2 text-base outline-none transition-colors focus:border-iris"
            />
          </div>
          <div>
            <label htmlFor="email" className="eyebrow text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-3 w-full border-b border-border bg-transparent pb-2 text-base outline-none transition-colors focus:border-iris"
            />
          </div>
          <div>
            <label htmlFor="message" className="eyebrow text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="mt-3 w-full resize-none border-b border-border bg-transparent pb-2 text-base outline-none transition-colors focus:border-iris"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-iris px-6 py-3 text-[0.8125rem] font-medium tracking-wide text-primary-foreground transition-opacity duration-300 hover:opacity-85"
          >
            {sent ? "Message sent" : "Send message"}
          </button>
        </form>
      </section>
    </div>
  );
}
