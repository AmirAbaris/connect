import { deleteUser } from "@/app/data/auth/delete-user";
import { NextRequest, NextResponse } from "next/server";
import type { ApiResponse } from "@/types/api-res";

export async function POST(req: NextRequest) {
  try {
    const { uid } = await req.json();

    if (!uid) {
      const res: ApiResponse<null> = {
        data: null,
        error: "User ID is required",
        success: false,
      };
      return NextResponse.json(res, { status: 400 });
    }

    const result = await deleteUser(uid); 
    return NextResponse.json(result, {
      status: result.success ? 200 : 400,
    });
  } catch (error) {
    const res: ApiResponse<null> = {
      data: null,
      error: error instanceof Error ? error.message : "Failed to delete user",
      success: false,
    };
    return NextResponse.json(res, { status: 500 });
  }
}
