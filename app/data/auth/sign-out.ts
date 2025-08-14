import { supabaseBrowserClient } from "@/lib/supabase/browser";

export const signOut = async (): Promise<void> => {
    const { error } = await supabaseBrowserClient.auth.signOut();
  
    if (error) throw error;
  };