import { supabaseBrowserClient } from "@/lib/supabase/browser";
import { Member } from "@/types/member";

export async function fetchMembers(): Promise<Member[] | null> {
  const { data, error } = await supabaseBrowserClient
    .from("member")
    .select("*");

  if (error) throw error;

  return data as Member[] | null;
}

export async function createMember(newMember: Omit<Member, "id">) {
  const { data, error } = await supabaseBrowserClient
    .from("member")
    .insert(newMember)
    .select("*")
    .single();

  if (error) throw error;

  return data as Member | null;
}
