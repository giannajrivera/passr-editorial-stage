import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const ADMIN_EMAILS = ["gigirunner2004@gmail.com"];

/**
 * Grants the admin role to the signed-in user when their verified email is on
 * the allowlist. Safe to call repeatedly; it is a no-op for everyone else.
 */
export const claimAdminRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data, error } = await supabaseAdmin.auth.admin.getUserById(context.userId);
    if (error || !data.user) return { granted: false };

    const email = (data.user.email ?? "").toLowerCase();
    const verified = Boolean(data.user.email_confirmed_at);
    if (!verified || !ADMIN_EMAILS.includes(email)) return { granted: false };

    await supabaseAdmin
      .from("user_roles")
      .upsert({ user_id: context.userId, role: "admin" }, { onConflict: "user_id,role" });

    return { granted: true };
  });

export const getWaitlistEntries = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: roles, error: roleError } = await context.supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", context.userId)
      .eq("role", "admin");
    if (roleError) throw new Error("Could not verify admin access");
    if (!roles || roles.length === 0) throw new Error("Forbidden");


    const { data, error } = await context.supabase
      .from("waitlist")
      .select("id, name, email, phone_number, created_at")
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return { entries: data ?? [], total: data?.length ?? 0 };
  });
