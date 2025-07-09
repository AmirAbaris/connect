import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              دیگه حدس نزن کی حال داره 😎
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                کانکت
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              تو کافه یا جمع، نمی‌دونی کی فازش چیه؟ با کانکت، هرکی vibe خودشو
              می‌ذاره. می‌فهمی کی social ـه، کی solo ـه، کی اصلاً حال نداره. همه
              چی real و بدون awkward شدن.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <h3 className="text-2xl font-bold text-foreground">
                    سیستم vibe:
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <div className="w-4 h-4 bg-green-500 rounded-full shrink-0" />
                    <div>
                      <p className="font-semibold text-green-600 dark:text-green-400">
                        ☕ سبز — social, آماده چت و آشنایی
                      </p>
                      <p className="text-sm text-muted-foreground">
                        حال خوب، vibe مثبت، بیا حرف بزنیم :)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full shrink-0" />
                    <div>
                      <p className="font-semibold text-yellow-600 dark:text-yellow-400">
                        📖 زرد — مشغول، ولی اوکی با یه سلام
                      </p>
                      <p className="text-sm text-muted-foreground">
                        دارم کار می‌کنم یا chillم، ولی اگه vibeت خوبه بیا.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <div className="w-4 h-4 bg-red-500 rounded-full shrink-0" />
                    <div>
                      <p className="font-semibold text-red-600 dark:text-red-400">
                        🚫 قرمز — اصلاً حال ندارم
                      </p>
                      <p className="text-sm text-muted-foreground">
                        الان تو mood معاشرت نیستم، بعداً بیا.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-lg">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    هدف کانکت
                  </h3>
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  همه vibe خودشونو بذارن، ارتباطات واقعی‌تر و بدون استرس باشه.
                  دیگه کسی تو جمع حس awkward بودن نکنه.
                </p>
              </div>

              <div className="space-y-4">
                <Link href="/auth/signup" passHref>
                  <Button
                    size="lg"
                    className="w-full text-lg px-8 py-6 h-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                  >
                    شروع کن 🚀
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
