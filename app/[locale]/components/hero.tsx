import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t("title")}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground/90">
              {t("subtitle")}
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            {t("description")}
          </p>

          {/* Example System */}
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("exampleTitle")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <p className="text-lg md:text-xl font-semibold text-green-600 dark:text-green-400">
                  {t("greenSignal")}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg md:text-xl font-semibold text-yellow-600 dark:text-yellow-400">
                  {t("yellowSignal")}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg md:text-xl font-semibold text-red-600 dark:text-red-400">
                  {t("redSignal")}
                </p>
              </div>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
              {t("goal")}
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button size="lg" className="text-xl px-8 py-6 h-auto">
              {t("cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
