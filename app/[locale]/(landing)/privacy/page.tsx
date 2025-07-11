import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  User,
  MapPin,
  Database,
  Lock,
  Mail,
  Eye,
  Globe,
  MessageCircle,
  Settings,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">
            حریم خصوصی
            <Shield className="w-4 h-4 ml-2" />
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            حریم خصوصی شما
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ما متعهد به محافظت از حریم خصوصی شما هستیم. این صفحه توضیح می‌دهد که
            چگونه اطلاعات شما را جمع‌آوری، استفاده و محافظت می‌کنیم.
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
                  اطلاعات پروفایل
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• نام و سن</p>
                  <p>• بیوگرافی و علایق</p>
                  <p>• تصویر پروفایل</p>
                  <p>• وضعیت اجتماعی (آماده برای چت، مشغول، و غیره)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  اطلاعات موقعیت مکانی
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• مختصات جغرافیایی (طول و عرض)</p>
                  <p>• نام مکان (از طریق API نقشه)</p>
                  <p>• تاریخ و زمان آخرین به‌روزرسانی موقعیت</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  اطلاعات حساب کاربری
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• آدرس ایمیل</p>
                  <p>• رمز عبور (رمزگذاری شده)</p>
                  <p>• شناسه منحصر به فرد کاربر</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  تنظیمات حریم خصوصی
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• وضعیت نمایش به دیگران</p>
                  <p>• تنظیمات موقعیت مکانی</p>
                  <p>• ترجیحات اعلان‌ها</p>
                </div>
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

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  نمایش روی نقشه
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  اطلاعات پروفایل و موقعیت شما (فقط در صورت فعال بودن نمایش)
                  برای نمایش به سایر کاربران روی نقشه استفاده می‌شود.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  ارتباط اجتماعی
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  وضعیت اجتماعی شما به دیگران کمک می‌کند تا بدانند آیا می‌توانند
                  با شما ارتباط برقرار کنند یا خیر.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  بهبود خدمات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  از اطلاعات برای بهبود عملکرد اپلیکیشن، رفع مشکلات و افزودن
                  ویژگی‌های جدید استفاده می‌کنیم.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  امنیت و احراز هویت
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  اطلاعات حساب کاربری برای احراز هویت، امنیت و جلوگیری از سوء
                  استفاده استفاده می‌شود.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Separator className="my-8" />
        {/* Data Sharing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">اشتراک‌گذاری اطلاعات</h2>

          <div className="bg-card/50 rounded-lg p-6 border border-border/50">
            <p className="text-muted-foreground mb-4">
              ما اطلاعات شما را نمی‌فروشیم. ممکن است اطلاعات را با موارد زیر به
              اشتراک بگذاریم:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm mb-1">
                    ارائه‌دهندگان خدمات
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Supabase برای میزبانی و ذخیره‌سازی، ارائه‌دهندگان نقشه برای
                    تبدیل مختصات به نام مکان
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm mb-1">سایر کاربران</p>
                  <p className="text-muted-foreground text-sm">
                    فقط در صورت فعال بودن تنظیمات نمایش، اطلاعات پروفایل و
                    موقعیت شما برای سایر کاربران قابل مشاهده است
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm mb-1">مقامات قانونی</p>
                  <p className="text-muted-foreground text-sm">
                    در صورت الزام قانونی یا برای محافظت از حقوق و امنیت خودمان و
                    سایر کاربران
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        {/* User Rights */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">حقوق شما</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  کنترل نمایش
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• فعال/غیرفعال کردن نمایش روی نقشه</p>
                  <p>• تغییر وضعیت اجتماعی</p>
                  <p>• کنترل اطلاعات قابل مشاهده</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  مدیریت اطلاعات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• به‌روزرسانی اطلاعات پروفایل</p>
                  <p>• درخواست کپی اطلاعات</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Separator className="my-8" />
        {/* Security & Retention */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              امنیت اطلاعات
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="text-sm">
                • رمزگذاری داده‌ها در حالت انتقال و ذخیره
              </p>
              <p className="text-sm">• احراز هویت امن با Supabase</p>
              <p className="text-sm">• کنترل‌های دسترسی دقیق</p>
              <p className="text-sm">• به‌روزرسانی‌های منظم امنیتی</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">نگهداری اطلاعات</h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="text-sm">
                • اطلاعات تا زمان فعال بودن حساب کاربری نگهداری می‌شود
              </p>
              <p className="text-sm">
                • پس از حذف حساب، اطلاعات طی ۳۰ روز حذف می‌شود
              </p>
              <p className="text-sm">
                • موقعیت مکانی قدیمی به طور خودکار پاک می‌شود
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
