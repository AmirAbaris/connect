import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ApiResponse } from "@/types/api-res";
import { Session } from "@supabase/supabase-js";

export const getSession = async (): Promise<ApiResponse<Session | null>> => {
  const supabase = await createSupabaseServerClient()
    const { data, error } = await supabase.auth.getSession();
  
    if (error) {
      return {
          data: null,
          error: error.message,
          success: false
      }
    }
  
  return {
    data: data.session,
    error: null,
    success: true
  };
}