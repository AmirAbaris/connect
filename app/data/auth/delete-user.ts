import { supabaseBrowserClient } from "@/lib/supabase/browser";

export const deleteUser = async (uid: string): Promise<void> => {
    const { error } = await supabaseBrowserClient.auth.admin.deleteUser(uid);
  
    if (error) throw error;
  };
  