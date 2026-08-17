import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Download, RefreshCw, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { claimAdminRole, getWaitlistEntries } from "@/lib/admin.functions";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Waitlist Admin — Passr" },
      { name: "description", content: "Internal Passr dashboard for reviewing waitlist signups." },
      { property: "og:title", content: "Waitlist Admin — Passr" },
      { property: "og:description", content: "Internal Passr waitlist dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function fmt(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function AdminPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const claim = useServerFn(claimAdminRole);
  const fetchEntries = useServerFn(getWaitlistEntries);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    claim({})
      .catch(() => undefined)
      .finally(() => setClaimed(true));
  }, [claim]);

  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["waitlist-admin"],
    queryFn: () => fetchEntries({}),
    enabled: claimed,
  });

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  function exportCsv() {
    const rows = data?.entries ?? [];
    const head = ["name", "email", "phone_number", "created_at"];
    const esc = (v: string | null) => `"${(v ?? "").replace(/"/g, '""')}"`;
    const csv = [
      head.join(","),
      ...rows.map((r) => [esc(r.name), esc(r.email), esc(r.phone_number), esc(r.created_at)].join(",")),
    ].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `passr-waitlist-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const forbidden = error && /forbidden/i.test(error.message);

  return (
    <main className="bg-background pt-32 pb-28 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-[0.625rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Admin
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[0.95] tracking-[-0.03em] text-foreground md:text-6xl">
              Waitlist
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              {isLoading || !claimed
                ? "Loading signups…"
                : forbidden
                  ? "This account doesn't have admin access."
                  : `${data?.total ?? 0} ${data?.total === 1 ? "person has" : "people have"} joined so far.`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => refetch()}
              disabled={isFetching}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[0.8125rem] text-foreground transition-colors duration-300 hover:bg-muted disabled:opacity-60"
            >
              <RefreshCw className={`size-4 ${isFetching ? "animate-spin" : ""}`} strokeWidth={1.5} />
              Refresh
            </button>
            <button
              type="button"
              onClick={exportCsv}
              disabled={!data?.total}
              className="inline-flex items-center gap-2 rounded-full bg-iris px-6 py-2.5 text-[0.8125rem] font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-85 disabled:opacity-50"
            >
              <Download className="size-4" strokeWidth={1.75} />
              Download CSV
            </button>
            <button
              type="button"
              onClick={signOut}
              className="inline-flex items-center gap-2 text-[0.8125rem] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <LogOut className="size-4" strokeWidth={1.5} />
              Sign out
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border/70 bg-card">
          {forbidden ? (
            <p className="p-10 text-sm text-muted-foreground">
              You&apos;re signed in, but this account isn&apos;t an admin. Sign in with the approved
              admin email address.
            </p>
          ) : error ? (
            <p className="p-10 text-sm text-destructive">
              Couldn&apos;t load the waitlist. Try refreshing.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border/70 text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground">
                    <th className="px-6 py-4 font-medium">#</th>
                    <th className="px-6 py-4 font-medium">Name</th>
                    <th className="px-6 py-4 font-medium">Email</th>
                    <th className="px-6 py-4 font-medium">Phone</th>
                    <th className="px-6 py-4 font-medium">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {(data?.entries ?? []).map((r, i) => (
                    <tr key={r.id} className="border-b border-border/40 last:border-0">
                      <td className="px-6 py-4 text-muted-foreground">{i + 1}</td>
                      <td className="px-6 py-4 text-foreground">{r.name}</td>
                      <td className="px-6 py-4 text-foreground">{r.email}</td>
                      <td className="px-6 py-4 text-muted-foreground">{r.phone_number || "—"}</td>
                      <td className="px-6 py-4 text-muted-foreground">{fmt(r.created_at)}</td>
                    </tr>
                  ))}
                  {!isLoading && claimed && (data?.entries ?? []).length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                        No signups yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
