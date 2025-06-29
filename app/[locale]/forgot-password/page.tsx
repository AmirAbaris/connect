"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center p-6 pt-22">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full max-w-md">
          {/* Success State */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              ایمیل ارسال شد!
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              لینک بازنشانی رمز عبور به آدرس{" "}
              <span className="font-medium text-foreground">{email}</span> ارسال
              شد. لطفاً ایمیل خود را بررسی کنید.
            </p>

            <div className="space-y-4">
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="w-full"
              >
                ارسال مجدد
              </Button>

              <Link href="/login">
                <Button variant="ghost" className="w-full">
                  بازگشت به صفحه ورود
                </Button>
              </Link>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              ایمیل دریافت نکردید؟{" "}
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-primary hover:underline font-medium"
              >
                بررسی کنید
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

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
                کانکت
              </span>
            </h1>
          </Link>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            رمز عبور خود را فراموش کرده‌اید؟
          </h2>
          <p className="text-muted-foreground">
            نگران نباشید! ایمیل خود را وارد کنید و ما لینک بازنشانی رمز عبور را
            برای شما ارسال می‌کنیم.
          </p>
        </div>

        {/* Forgot Password Form */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                ایمیل
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg py-3 text-base font-medium"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  در حال ارسال...
                </>
              ) : (
                <>
                  ارسال لینک بازنشانی
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </>
              )}
            </Button>
          </form>

          {/* Help Section */}
          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium text-foreground mb-2">نکات مهم:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• لینک بازنشانی فقط ۱ ساعت معتبر است</li>
              <li>• ایمیل را در پوشه اسپم بررسی کنید</li>
              <li>• اگر مشکل ادامه دارد، با پشتیبانی تماس بگیرید</li>
            </ul>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-muted-foreground">
            رمز عبور خود را به خاطر دارید؟{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              وارد شوید
            </Link>
          </p>
          <p className="text-muted-foreground">
            حساب کاربری ندارید؟{" "}
            <Link
              href="/signup"
              className="text-primary hover:underline font-medium"
            >
              ثبت‌نام کنید
            </Link>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>امن</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⚡</span>
              <span>سریع</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🛡️</span>
              <span>خصوصی</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
