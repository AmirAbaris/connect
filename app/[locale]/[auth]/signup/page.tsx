"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { AuthUserType } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schemas/user-schema";
import useAuth from "@/hooks/use-auth";
import Image from "next/image";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<AuthUserType>({
    resolver: zodResolver(userSchema),
  });
  const { signUpWithPassword, isPendingSignUpWithPassword } = useAuth();

  const onSubmit = (data: AuthUserType) => {
    signUpWithPassword(data);
  };

  const t = useTranslations("Signup");

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
            {t("header")}
          </h2>
          <p className="text-muted-foreground">{t("subheader")}</p>
        </div>

        {/* Signup Form */}
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

            {/* Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-foreground"
              >
                {t("passwordLabel")}
              </Label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  {...register("password")}
                  className="w-full pr-10 pl-12 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder={t("passwordPlaceholder")}
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
              <p className="text-xs text-muted-foreground">
                {t("passwordHint")}
              </p>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <Input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary/20 focus:ring-2"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              <Label
                htmlFor="terms"
                className="text-sm text-muted-foreground leading-relaxed"
              >
                {t("termsPrefix")}{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  {t("terms")}
                </Link>{" "}
                {t("and")}{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  {t("privacy")}
                </Link>{" "}
                {t("termsSuffix")}
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg py-3 text-base font-medium"
              disabled={!acceptedTerms || !isValid}
            >
              {isPendingSignUpWithPassword ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                t("signup")
              )}
            </Button>
          </form>
        </div>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            {t("alreadyHaveAccount")}{" "}
            <Link
              href="/auth/login"
              className="text-primary hover:underline font-medium"
            >
              {t("login")}
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
