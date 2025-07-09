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
              شروع کن
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              وقتشه سوشال لایف رو واقعی‌تر کنی 👾
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              خسته شدی از حدس زدن اینکه کی حال حرف زدن داره؟ کانکت اینو حل کرده.
              فقط حالتتو بذار، بقیه خودشون می‌فهمن فازت چیه. بدون استرس، بدون
              awkward شدن. همه چی chill و real.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/auth/signup" passHref>
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
              >
                بزن بریم 🎯
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>حریم خصوصی فول</span>
                <span>🔒</span>
              </div>
              <div className="flex items-center gap-2">
                <span>رایگان همیشه</span>
                <span>⚡</span>
              </div>
              <div className="flex items-center gap-2">
                <span>بدون نصب و دردسر</span>
                <span>📱</span>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
              <div className="text-center text-foreground/90 italic leading-relaxed">
                &ldquo;کانکت باعث شد دیگه استرس شروع مکالمه رو نداشته باشم. همه
                چی vibe خودمه!&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
