import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  const locale = useLocale();

  const footerLinks = [
    { href: `/${locale}/terms`, label: t("terms") },
    { href: `/${locale}/privacy`, label: t("privacy") },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Section */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h3 className="text-2xl font-black mb-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={"/logo.svg"}
                  width={82}
                  height={82}
                  alt={t("logo")}
                />
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              {t("descriptionShort")}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} {t("logo")}. {t("copyright")}
            </div>
            <div className="text-sm text-muted-foreground">
              {t("madeWithLove")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
