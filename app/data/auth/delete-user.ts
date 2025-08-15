import "server-only"
import { requireSession } from "./require-session";
import { ApiResponse } from "@/types/api-res";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const deleteUser = async (uid: string): Promise<ApiResponse<null>> => {
    const session = await requireSession()

    if (!session.success) {
      return {
        data: null,
        error: session.error,
        success: false
      }
    }
    
    const supabase = await createSupabaseServerClient()
    const { error } = await supabase.auth.admin.deleteUser(uid);
  
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
  