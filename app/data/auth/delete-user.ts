import "server-only"
import { requireSession } from "./require-session";
import { ApiResponse } from "@/types/api-res";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const deleteUser = async (uid: string): Promise<ApiResponse<null>> => {
    await requireSession()
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
  