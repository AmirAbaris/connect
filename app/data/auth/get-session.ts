import { supabaseBrowserClient } from "@/lib/supabase/browser";
import { Session } from "@supabase/supabase-js";

export const getSession = async (): Promise<Session | null> => {
    const { data, error } = await supabaseBrowserClient.auth.getSession();
  
    if (error) throw error;
  
    return data.session;
  };
  
  