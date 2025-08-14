"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordUserSchema } from "@/schemas/user-schema";
import { AuthResetPasswordType } from "@/types/user";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { resetPassword } from "@/app/data/auth/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const t = useTranslations("ResetPassword");
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<AuthResetPasswordType>({
    resolver: zodResolver(resetPasswordUserSchema),
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = async (data: AuthResetPasswordType) => {
    startTransition(async () => {
      const res = await resetPassword(data.newPassword);
      if (res.success) {
        router.push("/auth/login");
        toast.success(t("resetSuccess"));
      } else {
        toast.error(res.error);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          {t("changePassword")}
        </h2>
        <Input
          type="password"
          placeholder={t("newPassword")}
          {...register("newPassword")}
          required
          minLength={8}
          className="py-3"
        />
        <Button
          type="submit"
          className="w-full"
          disabled={isPending || !isValid}
        >
          {isPending ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : (
            <span>{t("changePassword")}</span>
          )}
        </Button>
      </form>
    </div>
  );
}
