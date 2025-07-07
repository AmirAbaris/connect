import { supabaseBrowserClient } from "@/lib/supabase/browser";
import { Member } from "@/types/member";

export async function fetchMembers(): Promise<Member[] | null> {
  const { data, error } = await supabaseBrowserClient
    .from("member")
    .select("*");

  if (error) throw error;

  return data as Member[] | null;
}

export async function fetchCurrentMember(uid: string) {
  const { data, error } = await supabaseBrowserClient
    .from("member")
    .select("*")
    .eq("uid", uid)
    .maybeSingle();
  if (error) throw error;

  return data;
}

export async function createMember(
  newMember: Omit<Member, "id" | "uid">,
  uid: string | undefined
): Promise<Member | null> {
  if (!uid) {
    throw new Error("User identifier (uid) is missing.");
  }

  // Check if user already exists
  const { data: existing, error: fetchError } = await supabaseBrowserClient
    .from("member")
    .select("*")
    .eq("uid", uid)
    .maybeSingle();

  if (fetchError) throw fetchError;

  if (existing) {
    throw new Error("This user already exists.");
  }

  // Insert new user
  const { data, error } = await supabaseBrowserClient
    .from("member")
    .insert({ ...newMember, uid })
    .select("*")
    .single();

  if (error) throw error;

  return data;
}
