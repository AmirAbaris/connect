import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { href: "/features", label: "ویژگی‌ها" },
      { href: "/pricing", label: "قیمت‌گذاری" },
      { href: "/download", label: "دانلود" },
      { href: "/api", label: "API" },
    ],
    company: [
      { href: "/about", label: "درباره ما" },
      { href: "/careers", label: "فرصت‌های شغلی" },
      { href: "/press", label: "رسانه‌ها" },
      { href: "/contact", label: "تماس" },
    ],
    support: [
      { href: "/help", label: "راهنما" },
      { href: "/faq", label: "سوالات متداول" },
      { href: "/community", label: "انجمن" },
      { href: "/status", label: "وضعیت سرویس" },
    ],
    legal: [
      { href: "/privacy", label: "حریم خصوصی" },
      { href: "/terms", label: "شرایط استفاده" },
      { href: "/cookies", label: "کوکی‌ها" },
      { href: "/security", label: "امنیت" },
    ],
  };

  const socialLinks = [
    { href: "https://twitter.com", label: "توییتر", icon: "𝕏" },
    { href: "https://instagram.com", label: "اینستاگرام", icon: "📷" },
    { href: "https://linkedin.com", label: "لینکدین", icon: "💼" },
    { href: "https://github.com", label: "گیت‌هاب", icon: "🐙" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-black mb-4">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  کانکت
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                کانکت به شما کمک می‌کند تا در کافه‌ها و فضاهای اجتماعی، افرادی
                که آماده ملاقات هستند را پیدا کنید و تجربه‌های اجتماعی بهتری
                داشته باشید.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </Link>
              ))}
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">خبرنامه</h4>
              <p className="text-sm text-muted-foreground">
                آخرین اخبار و به‌روزرسانی‌ها را دریافت کنید
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button size="sm">عضویت</Button>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">محصول</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">شرکت</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">پشتیبانی</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© {currentYear} کانکت. تمامی حقوق محفوظ است.</span>
              <div className="flex items-center gap-4">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>ساخته شده با ❤️ در ایران</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
