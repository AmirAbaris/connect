import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, User, MapPin, Database, Lock } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">
            قوانین و حریم خصوصی
            <Shield className="w-4 h-4 ml-2" />
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            قوانین استفاده و حریم خصوصی
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            آخرین به‌روزرسانی: {new Date().toLocaleDateString("fa-IR")}
          </p>
        </div>

        {/* Data Collection */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="w-6 h-6 text-primary" />
            اطلاعاتی که جمع‌آوری می‌کنیم
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  اطلاعات حساب کاربری
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  هنگام ثبت‌نام، ایمیل، رمز عبور (رمزگذاری شده) و سایر شناسه‌های
                  کاربری را جمع‌آوری می‌کنیم.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  اطلاعات پروفایل
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  شامل نام، علایق و سایر اطلاعاتی که برای تکمیل پروفایل ارائه
                  می‌دهید.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  اطلاعات احراز هویت
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  از Supabase Auth برای مدیریت ورود، بازنشانی رمز عبور و
                  توکن‌های جلسه استفاده می‌کنیم.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  اطلاعات نقشه
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  در صورت استفاده از ویژگی‌های نقشه، موقعیت مکانی، پین‌ها و
                  متادیتای مرتبط را جمع‌آوری می‌کنیم.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        {/* How We Use Data */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            نحوه استفاده از اطلاعات شما
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>ارائه، نگهداری و بهبود خدمات ما</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>احراز هویت کاربران و امنیت حساب‌ها</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>شخصی‌سازی تجربه شما (مثل نمایش اطلاعات مرتبط نقشه)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>ارتباط با شما در مورد به‌روزرسانی‌ها، امنیت یا پشتیبانی</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>رعایت تعهدات قانونی</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Data Sharing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">اشتراک‌گذاری اطلاعات</h2>

          <div className="bg-card/50 rounded-lg p-6 border border-border/50">
            <p className="text-muted-foreground">
              ما اطلاعات شما را نمی‌فروشیم!
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Security & Rights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              امنیت اطلاعات
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              ما از استانداردهای امنیتی صنعتی، شامل رمزگذاری و کنترل‌های دسترسی،
              برای محافظت از اطلاعات شما استفاده می‌کنیم.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Retention & Changes */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">نگهداری اطلاعات</h2>
            <p className="text-muted-foreground leading-relaxed">
              ما اطلاعات شما را تا زمانی که حساب کاربری فعال است یا طبق الزامات
              قانونی نگهداری می‌کنیم.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">تغییرات</h2>
            <p className="text-muted-foreground leading-relaxed">
              ممکن است این قوانین را به‌روزرسانی کنیم. در صورت تغییرات مهم، شما
              را مطلع خواهیم کرد.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 my-10 text-center">
          <h2 className="text-xl font-bold mb-2 text-destructive">
            سلب مسئولیت
          </h2>
          <p className="text-destructive text-sm leading-relaxed">
            این پلتفرم صرفاً برای آشنایی و ارتباط اولیه کاربران است. مسئولیت
            کامل هرگونه ملاقات حضوری یا تعامل خارج از اپلیکیشن، ۱۰۰٪ بر عهده خود
            کاربران است و تیم Connect هیچ مسئولیتی در قبال پیامدهای آن ندارد. با
            استفاده از این سرویس، شما با این شرایط موافقت می‌کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
