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
  uid: string | undefined,
  image?: File | null
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

  let imageUrl = null;
  if (image) {
    imageUrl = await uploadMemberImage(image, uid);
  }

  console.log("image api", imageUrl);

  // Insert new user
  const { data, error } = await supabaseBrowserClient
    .from("member")
    .insert({ ...newMember, uid, image: imageUrl })
    .select("*")
    .single();

  if (error) throw error;

  return data;
}

export async function updateMember(
  updates: Partial<Omit<Member, "id" | "uid">>,
  uid: string | undefined
): Promise<Member | null> {
  if (!uid) {
    throw new Error("User identifier (uid) is missing.");
  }

  if (Object.keys(updates).length === 0) {
    throw new Error("No update fields provided.");
  }

  // Check if user exists
  const { data: existing, error: fetchError } = await supabaseBrowserClient
    .from("member")
    .select("*")
    .eq("uid", uid)
    .maybeSingle();

  if (fetchError) throw fetchError;
  if (!existing) {
    throw new Error("User does not exist.");
  }

  // Perform update
  const { data, error } = await supabaseBrowserClient
    .from("member")
    .update(updates)
    .eq("uid", uid)
    .select("*")
    .single();

  if (error) throw error;

  return data;
}

export async function uploadMemberImage(
  file: File,
  uid: string | undefined
): Promise<string> {
  if (!uid) {
    throw new Error("User identifier (uid) is missing.");
  }

  const filePath = `members/${uid}/${file.name}`;

  const { error } = await supabaseBrowserClient.storage
    .from("images")
    .upload(filePath, file, {
      upsert: true,
      contentType: file.type,
    });

  if (error) throw error;

  // Generate public URL (or use signed URL if needed)
  const { data } = supabaseBrowserClient.storage
    .from("images")
    .getPublicUrl(filePath);

  console.log("image api itself", data.publicUrl);

  return data.publicUrl;
}
