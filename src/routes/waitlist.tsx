import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Ticket, BellRing, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/waitlist")({
  head: () => ({
    meta: [
      { title: "Join the Waitlist — Passr" },
      {
        name: "description",
        content:
          "Be first in line for Passr. Join the waitlist for early access to true prices on live events.",
      },
      { property: "og:title", content: "Join the Waitlist — Passr" },
      {
        property: "og:description",
        content:
          "Passr is changing the way you discover and experience ticketed events. Join the waitlist for early access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WaitlistPage,
});

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const perks = [
  {
    icon: Ticket,
    title: "Early access",
    body: "Get into Passr before the public launch, with priority onboarding.",
  },
  {
    icon: BellRing,
    title: "Drop alerts first",
    body: "Presales, on-sales and price drops for the artists and venues you follow.",
  },
  {
    icon: Sparkles,
    title: "Founding member perks",
    body: "Waitlist members are first in line for Passr+ benefits at launch.",
  },
];

function WaitlistPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    const next: { name?: string; email?: string } = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!emailRe.test(email.trim())) next.email = "That email doesn't look right.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    const { error } = await supabase.from("waitlist").insert({
      name: name.trim().slice(0, 120),
      email: email.trim().toLowerCase().slice(0, 254),
      phone_number: phone.trim() ? phone.trim().slice(0, 40) : null,
    });
    setSubmitting(false);

    if (error) {
      if (error.code === "23505" || /duplicate|unique/i.test(error.message)) {
        setDone(true);
        return;
      }
      setFormError("Something went wrong on our end. Please try again in a moment.");
      return;
    }
    setDone(true);
  }

  return (
    <main className="bg-background pt-32 pb-28 md:pt-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:px-12 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        {/* Vision */}
        <div className="max-w-xl">
          <span className="text-[0.625rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Prelaunch
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-[-0.03em] text-foreground md:text-7xl">
            Be first in line.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Passr is changing the way you discover and experience ticketed events. Join the
            waitlist and be among the first to get access.
          </p>

          <div className="mt-14 space-y-8 border-t border-border/60 pt-10">
            {perks.map((p) => (
              <div key={p.title} className="flex gap-4">
                <p.icon className="mt-0.5 size-5 shrink-0 text-iris" strokeWidth={1.5} />
                <div>
                  <h2 className="text-sm font-medium tracking-tight text-foreground">{p.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="lg:pt-6">
          <div className="rounded-2xl border border-border/70 bg-card p-8 shadow-[0_24px_70px_-40px_rgba(14,11,22,0.35)] md:p-10">
            {done ? (
              <div className="py-6 text-center">
                <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground">
                  You&apos;re on the list! 🎟️
                </h2>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thanks for joining Passr. We&apos;ll keep you posted when we&apos;re ready to
                  launch.
                </p>
                <Link
                  to="/"
                  className="mt-9 inline-flex items-center justify-center rounded-full bg-iris px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-85"
                >
                  Back to Passr
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-7">
                <div>
                  <h2 className="font-display text-2xl tracking-[-0.02em] text-foreground">
                    Join the waitlist
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Takes fifteen seconds. No spam, ever.
                  </p>
                </div>

                <Field
                  id="name"
                  label="Name"
                  placeholder="Your name"
                  value={name}
                  onChange={setName}
                  error={errors.name}
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={setEmail}
                  error={errors.email}
                />
                <Field
                  id="phone"
                  label="Phone number (optional)"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={setPhone}
                />

                {formError && (
                  <p className="text-xs text-destructive" role="alert">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-iris px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-85 disabled:opacity-60"
                >
                  {submitting ? "Joining…" : "Join the Waitlist"}
                  {!submitting && <Check className="size-4" strokeWidth={2} />}
                </button>

                <p className="text-center text-xs leading-relaxed text-muted-foreground">
                  We&apos;ll only use your information to keep you updated about Passr and its
                  launch.
                </p>
              </form>
            )}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Already on the list?{" "}
            <Link to="/" className="underline underline-offset-4 hover:text-foreground">
              Explore Passr
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className="mt-2 w-full border-b border-border bg-transparent pb-2.5 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-iris"
      />
      {error && (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
