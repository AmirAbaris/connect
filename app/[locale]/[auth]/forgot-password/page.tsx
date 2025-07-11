"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/use-auth";
import { AuthForgotPasswordType } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetPasswordUserSchema } from "@/schemas/user-schema";
import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<AuthForgotPasswordType>({
    resolver: zodResolver(forgetPasswordUserSchema),
  });
  const { forgetPassword, isPendingForgetPassword } = useAuth();
  const t = useTranslations("ForgotPassword");
  const locale = useLocale();

  const onSubmit = (data: AuthForgotPasswordType) => {
    forgetPassword(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center p-6 pt-22">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-3xl font-black">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t("logo")}
              </span>
            </h1>
          </Link>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {t("header")}
          </h2>
          <p className="text-muted-foreground">{t("subheader")}</p>
        </div>

        {/* Forgot Password Form */}
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
              disabled={isPendingForgetPassword || !isValid}
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg py-3 text-base font-medium"
            >
              {isPendingForgetPassword ? (
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
            <h4 className="font-medium text-foreground mb-2">
              {t("helpTitle")}
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>{t("help1")}</li>
              <li>{t("help2")}</li>
              <li>{t("help3")}</li>
            </ul>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-muted-foreground">
            {t("rememberPassword")}{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              {t("login")}
            </Link>
          </p>
          <p className="text-muted-foreground">
            {t("noAccount")}{" "}
            <Link
              href="/signup"
              className="text-primary hover:underline font-medium"
            >
              {t("signup")}
            </Link>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>{t("secure")}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⚡</span>
              <span>{t("fast")}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🛡️</span>
              <span>{t("private")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
