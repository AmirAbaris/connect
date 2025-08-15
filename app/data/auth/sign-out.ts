import { ApiResponse } from "@/types/api-res";
import { supabaseBrowserClient } from "@/lib/supabase/browser";

export const signOut = async (): Promise<ApiResponse<null>> => {
  const { error } = await supabaseBrowserClient.auth.signOut();
  
    if (error) {
      return {
        data: null,
        error: error.message,
        success: false
      }
    }

    return {
      data: null,
      error: null,
      success: true
    }
  };