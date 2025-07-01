"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Footer");

  const isInLandingPage =
    pathname === `/${locale}` || pathname === `/${locale}/`;
  if (!isInLandingPage) return null;

  const footerLinks = {
    product: [
      { href: "/features", label: t("features") },
      { href: "/pricing", label: t("pricing") },
      { href: "/download", label: t("download") },
      { href: "/api", label: t("api") },
    ],
    company: [
      { href: "/about", label: t("about") },
      { href: "/careers", label: t("careers") },
      { href: "/press", label: t("press") },
      { href: "/contact", label: t("contact") },
    ],
    support: [
      { href: "/help", label: t("help") },
      { href: "/faq", label: t("faq") },
      { href: "/community", label: t("community") },
      { href: "/status", label: t("status") },
    ],
    legal: [
      { href: "/privacy", label: t("privacy") },
      { href: "/terms", label: t("terms") },
      { href: "/cookies", label: t("cookies") },
      { href: "/security", label: t("security") },
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
                  {t("logo")}
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {t("description")}
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
                {t("newsletterDesc")}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button size="sm">{t("subscribe")}</Button>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t("product")}
            </h4>
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
            <h4 className="font-semibold text-foreground mb-4">
              {t("company")}
            </h4>
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
            <h4 className="font-semibold text-foreground mb-4">
              {t("support")}
            </h4>
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
              <span>
                © {currentYear} {t("logo")}. {t("copyright")}
              </span>
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
              <span>{t("madeInIran")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
