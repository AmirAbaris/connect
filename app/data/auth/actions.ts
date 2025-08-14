"use server";

import { ApiResponse } from "@/types/api-res";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { Session } from "@supabase/supabase-js";
import { authUserSchema } from "@/schemas/user-schema";

export async function signUp(
  email: string,
  password: string
): Promise<ApiResponse<Session | null>> {
    const credentials = authUserSchema.safeParse({
        email,
        password,
    })

    if (!credentials.success) {
        return {
            data: null,
            error: credentials.error.message,
            success: false,
        }
    }
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      data: null,
      error: error.message,
      success: false,
    };
  }

  return {
    data: data.session,
    error: null,
    success: true,
  };
}