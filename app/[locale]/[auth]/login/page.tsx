"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowLeft,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { AuthUserType } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { authUserSchema } from "@/schemas/user-schema";
import useAuth from "@/hooks/use-auth";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function LoginPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<AuthUserType>({
    resolver: zodResolver(authUserSchema),
  });
  const { signInWithPassword, isPendingSignInWithPassword } = useAuth();

  const onSubmit = (data: AuthUserType) => {
    signInWithPassword(data);
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
          <Link href="/" className="mb-6 flex items-center justify-center">
            <Image src={"/logo.svg"} width={82} height={82} alt={"logo"} />
          </Link>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {t("Login.header")}
          </h2>
          <p className="text-muted-foreground">{t("Login.subheader")}</p>
        </div>

        {/* Login Form */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                {t("Login.emailLabel")}
              </Label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  required
                  {...register("email")}
                  className="w-full pr-10 pl-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder={t("Login.emailPlaceholder")}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-foreground"
                >
                  {t("Login.passwordLabel")}
                </Label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-primary hover:underline"
                >
                  {t("Login.forgotPassword")}
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  {...register("password")}
                  className="w-full pr-10 pl-12 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder={t("Login.passwordPlaceholder")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              disabled={isPendingSignInWithPassword || !isValid}
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg py-3 text-base font-medium"
            >
              {t("Login.submit")}
              {isPendingSignInWithPassword ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : locale === "fa" ? (
                <ArrowLeft className="w-4 h-4 mr-2" />
              ) : (
                <ArrowRight className="w-4 h-4 mr-2" />
              )}
            </Button>
          </form>
        </div>

        {/* Signup Link */}
        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            {t("Login.signupPrompt")}{" "}
            <Link
              href="/auth/signup"
              className="text-primary hover:underline font-medium"
            >
              {t("Login.signupLink")}
            </Link>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>{t("Login.secure")}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⚡</span>
              <span>{t("Login.fast")}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🛡️</span>
              <span>{t("Login.private")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
