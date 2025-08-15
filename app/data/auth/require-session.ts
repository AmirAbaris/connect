import "server-only"
import { createSupabaseServerClient } from "@/lib/supabase/server"
import { ApiResponse } from "@/types/api-res"
import { cache } from "react"
import { Session } from "@supabase/supabase-js";

export const requireSession = cache(async(): Promise<ApiResponse<Session | null>> => {
    const supabase = await createSupabaseServerClient()
    const {data, error} = await supabase.auth.getSession()

    if (error) {
        return {
            data: null,
            error: error.message,
            success: false
        }
    }

    if (data.session === null) {
        return {
            data: null,
            error: "no Session exists",
            success: false
        }
    }

    return {
        data: data.session,
        error: null,
        success: true
    }
})