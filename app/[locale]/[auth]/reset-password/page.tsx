"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordUserSchema } from "@/schemas/user-schema";
import { AuthResetPasswordType } from "@/types/user";
import useAuth from "@/hooks/use-auth";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ResetPasswordPage() {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<AuthResetPasswordType>({
    resolver: zodResolver(resetPasswordUserSchema),
  });
  const { resetPassword, isPendingResetPassword } = useAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = (data: AuthResetPasswordType) => {
    resetPassword(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          {t("ResetPassword.changePassword")}
        </h2>
        <div className="relative">
          <Input
            placeholder={t("ResetPassword.newPassword")}
            {...register("newPassword")}
            required
            minLength={8}
            className="py-3"
            type={showPassword ? "text" : "password"}
          />
          <Button
            type="button"
            variant="ghost"
            className="absolute right-3 top-0"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </Button>
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={isPendingResetPassword || !isValid}
        >
          {isPendingResetPassword ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            t("ResetPassword.changePassword")
          )}
        </Button>
      </form>
    </div>
  );
}
