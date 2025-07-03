"use client";

import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordUserSchema } from "@/schemas/user-schema";
import { AuthResetPasswordType } from "@/types/user";
import useAuth from "@/hooks/use-auth";
import { useForm } from "react-hook-form";

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<AuthResetPasswordType>({
    resolver: zodResolver(resetPasswordUserSchema),
  });
  const { resetPassword, isPendingResetPassword } = useAuth();

  const onSubmit = (data: AuthResetPasswordType) => {
    if (!accessToken) return;
    resetPassword({ ...data, accessToken });
  };

  const searchParams = useSearchParams();
  const accessToken = searchParams.get("access_token");

  if (!accessToken) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 p-6">
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">توکن دسترسی یافت نشد</h2>
          <p className="text-muted-foreground">
            لینک تغییر رمز عبور معتبر نیست یا منقضی شده است.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center mb-4">تغییر رمز عبور</h2>
        <Input
          type="password"
          placeholder="رمز عبور جدید"
          {...register("newPassword")}
          required
          minLength={8}
          className="py-3 text-right"
        />
        <Button
          type="submit"
          className="w-full"
          disabled={isPendingResetPassword || !isValid}
        >
          {isPendingResetPassword ? "در حال تغییر..." : "تغییر رمز عبور"}
        </Button>
      </form>
    </div>
  );
}
