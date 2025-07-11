// @ts-ignore
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// @ts-ignore
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (_req: Request) => {
  // @ts-ignore
  const supabase = createClient(
    // @ts-ignore
    Deno.env.get("SUPABASE_URL")!,
    // @ts-ignore
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

  const { error } = await supabase
    .from("member")
    .update({ status: null })
    .neq("status", null)
    .lt("status_updated_at", oneHourAgo);

  if (error) {
    console.error("Failed to reset statuses:", error);
    return new Response("Error resetting status", { status: 500 });
  }

  return new Response("Status reset successfully", { status: 200 });
});
