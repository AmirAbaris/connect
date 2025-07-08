import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CTASection() {
  const t = useTranslations("CTA");

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
              <span>🚀</span>
              {t("badge")}
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {t("title")}
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/auth/signup" passHref>
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
              >
                {t("primaryCTA")} 🎯
              </Button>
            </Link>
          </div>

          {/* Social proof */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">۱۰K+</div>
              <div className="text-sm text-muted-foreground">کاربر فعال</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">۵۰K+</div>
              <div className="text-sm text-muted-foreground">اتصال موفق</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">۹۸٪</div>
              <div className="text-sm text-muted-foreground">رضایت کاربران</div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>حریم خصوصی محفوظ</span>
                <span>🔒</span>
              </div>
              <div className="flex items-center gap-2">
                <span>رایگان برای همیشه</span>
                <span>⚡</span>
              </div>
              <div className="flex items-center gap-2">
                <span>بدون نیاز به دانلود</span>
                <span>📱</span>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-right space-y-4 flex flex-col">
                  <div className="flex items-center gap-1 text-yellow-500 text-lg justify-start">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                  <p className="text-foreground/90 italic leading-relaxed flex-1">
                    "کانکت واقعاً زندگی اجتماعی من رو تغییر داد! حالا می‌تونم
                    بدون نگرانی ببینم چه کسی آماده چت هست."
                  </p>
                  <div className="flex flex-row-reverse justify-end items-center gap-3 pt-2">
                    <div>
                      <div className="font-semibold text-foreground">سارا</div>
                      <div className="text-sm text-muted-foreground">تهران</div>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      س
                    </div>
                  </div>
                </div>

                <div className="text-right space-y-4 flex flex-col">
                  <div className="flex items-center gap-1 text-yellow-500 text-lg justify-start">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                  <p className="text-foreground/90 italic leading-relaxed flex-1">
                    "بهترین چیز اینه که می‌تونم وضعیت خودم رو کنترل کنم. دیگه
                    نگران مزاحمت نیستم!"
                  </p>
                  <div className="flex flex-row-reverse justify-end items-center gap-3 pt-2">
                    <div>
                      <div className="font-semibold text-foreground">علی</div>
                      <div className="text-sm text-muted-foreground">
                        اصفهان
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      ع
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
