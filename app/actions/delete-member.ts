"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function deleteMemberServerAction(
  uid: string | undefined
): Promise<{
  success: boolean;
}> {
  if (!uid) throw new Error("Missing uid");

  // Delete from member table
  const { error: memberError } = await supabaseAdmin
    .from("member")
    .delete()
    .eq("uid", uid);

  if (memberError) throw new Error(memberError.message);

  // Delete user from auth
  const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(uid);
  if (authError) throw new Error(authError.message);

  return { success: true };
}
