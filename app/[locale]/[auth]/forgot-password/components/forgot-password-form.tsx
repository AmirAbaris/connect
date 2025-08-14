"use client";

import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthForgotPasswordType } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetPasswordUserSchema } from "@/schemas/user-schema";
import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { forgetPassword } from "@/app/data/auth/actions";
import { toast } from "sonner";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<AuthForgotPasswordType>({
    resolver: zodResolver(forgetPasswordUserSchema),
  });
  const t = useTranslations("ForgotPassword");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: AuthForgotPasswordType) => {
    startTransition(async () => {
      const response = await forgetPassword(data.email);
      if (response.success) {
        toast.success(t("successMessage"));
      } else {
        toast.error(response.error || t("errorMessage"));
      }
    });
  };
  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            {t("emailLabel")}
          </Label>
          <div className="relative">
            <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              id="email"
              type="email"
              required
              {...register("email")}
              className="w-full pr-10 pl-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              placeholder={t("emailPlaceholder")}
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isPending || !isValid}
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg py-3 text-base font-medium"
        >
          {isPending ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              {t("sending")}
            </>
          ) : (
            <>
              {t("submit")}
              {locale === "fa" ? (
                <ArrowLeft className="w-4 h-4 mr-2" />
              ) : (
                <ArrowRight className="w-4 h-4 mr-2" />
              )}
            </>
          )}
        </Button>
      </form>

      {/* Help Section */}
      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <h4 className="font-medium text-foreground mb-2">{t("helpTitle")}</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>{t("help1")}</li>
          <li>{t("help2")}</li>
          <li>{t("help3")}</li>
        </ul>
      </div>
    </div>
  );
}
