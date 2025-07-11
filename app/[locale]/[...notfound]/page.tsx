import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const locale = useLocale();

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-7xl font-black text-primary mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-8">{t("message")}</p>
      <Link href={`/${locale}`} passHref>
        <Button size="lg" className="px-8 py-6 text-lg">
          {t("backHome")}
        </Button>
      </Link>
    </div>
  );
}
