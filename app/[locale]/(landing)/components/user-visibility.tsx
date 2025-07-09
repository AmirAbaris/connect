import { useTranslations } from "next-intl";

export default function UserVisibility() {
  const t = useTranslations("UserVisibility");

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400">
              <span>👥</span>
              قابلیت دیدن vibe
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              ببین کی chill ـه، کی تو فاز خودشه 👀
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              دیگه لازم نیست حدس بزنی کی حال حرف زدن داره. با کانکت، همه می‌تونن
              vibe خودشون رو بذارن و تو هم راحت تصمیم می‌گیری بری سر صحبت یا نه.
              همه چی real و بدون awkward شدن.
            </p>
          </div>

          {/* Main showcase */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - User interface mockup */}
            <div className="space-y-8">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    کافه مرکزی
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>آنلاین</span>
                  </div>
                </div>

                {/* User cards */}
                <div className="space-y-4">
                  {/* User 1 - Green signal */}
                  <div className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/15 transition-colors">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        س
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">سارا</h4>
                        <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                          ☕ آماده چت
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        vibe: social • chill
                      </p>
                    </div>
                  </div>

                  {/* User 2 - Yellow signal */}
                  <div className="flex items-center gap-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl hover:bg-yellow-500/15 transition-colors">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        ع
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full border-2 border-card"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">علی</h4>
                        <span className="text-xs bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full">
                          📖 مشغول
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        vibe: solo • study mode
                      </p>
                    </div>
                  </div>

                  {/* User 3 - Red signal */}
                  <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/15 transition-colors opacity-60">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        م
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-card"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">مریم</h4>
                        <span className="text-xs bg-red-500/20 text-red-600 dark:text-red-400 px-2 py-1 rounded-full">
                          🚫 مشغول
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        vibe: do not disturb • grinding
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Features and benefits */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  چرا کانکت؟ 🤔
                </h3>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">👁️</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        فقط real ones می‌بیننت
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        فقط کاربرای کانکت می‌تونن vibe تو رو ببینن. حریم خصوصی
                        فول، هیچکس خارج از vibe zone نمی‌تونه ببینه.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        امنیت واقعی
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        اطلاعاتت پیش خودته. فقط اسم و vibe نشون داده می‌شه، هیچ
                        دیتای اضافه‌ای پخش نمی‌شه.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        vibeت لحظه‌ای آپدیت می‌شه
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        هر تغییری تو حالت یا vibe فوراً به بقیه نشون داده می‌شه.
                        همه چی real time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Removed stats section for authenticity */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
