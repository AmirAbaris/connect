"use client";

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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/use-auth";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function LoginForm() {
  const t = useTranslations("Login");
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<AuthUserType>({
    resolver: zodResolver(authUserSchema),
  });
  const locale = useLocale();
  const [showPassword, setShowPassword] = useState(false);

  const { signInWithPassword, isPendingSignInWithPassword } = useAuth();

  const onSubmit = (data: AuthUserType) => {
    signInWithPassword(data);
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-foreground"
            >
              {t("passwordLabel")}
            </Label>
            <Link
              href="/auth/forgot-password"
              className="text-xs text-primary hover:underline"
            >
              {t("forgotPassword")}
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
        </div>

        <Button
          disabled={isPendingSignInWithPassword || !isValid}
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg py-3 text-base font-medium"
        >
          {t("submit")}
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
  );
}
