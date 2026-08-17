import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign In — Passr Admin" },
      { name: "description", content: "Sign in to the Passr admin area to manage waitlist signups." },
      { property: "og:title", content: "Sign In — Passr Admin" },
      { property: "og:description", content: "Sign in to the Passr admin area." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin", replace: true });
    });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setBusy(true);

    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });
      setBusy(false);
      if (error) {
        setError(error.message);
        return;
      }
      navigate({ to: "/admin", replace: true });
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: { emailRedirectTo: window.location.origin + "/admin" },
    });
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    if (data.session) {
      navigate({ to: "/admin", replace: true });
      return;
    }
    setNotice("Check your email to confirm your account, then sign in.");
  }

  return (
    <main className="bg-background pt-32 pb-28 md:pt-40">
      <div className="mx-auto max-w-md px-6">
        <span className="text-[0.625rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Admin
        </span>
        <h1 className="mt-6 font-display text-4xl leading-[0.95] tracking-[-0.03em] text-foreground md:text-5xl">
          {mode === "signin" ? "Sign in." : "Create account."}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Private area for the Passr team.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 space-y-7 rounded-2xl border border-border/70 bg-card p-8 shadow-[0_24px_70px_-40px_rgba(14,11,22,0.35)]"
        >
          <div>
            <label
              htmlFor="admin-email"
              className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground"
            >
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full border-b border-border bg-transparent pb-2.5 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-iris"
            />
          </div>
          <div>
            <label
              htmlFor="admin-password"
              className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full border-b border-border bg-transparent pb-2.5 text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-iris"
            />
          </div>

          {error && (
            <p className="text-xs text-destructive" role="alert">
              {error}
            </p>
          )}
          {notice && <p className="text-xs text-muted-foreground">{notice}</p>}

          <button
            type="submit"
            disabled={busy}
            className="inline-flex w-full items-center justify-center rounded-full bg-iris px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-85 disabled:opacity-60"
          >
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>

          <button
            type="button"
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setError(null);
              setNotice(null);
            }}
            className="w-full text-center text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {mode === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
