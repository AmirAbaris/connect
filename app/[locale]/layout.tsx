import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./../globals.css";
import "leaflet/dist/leaflet.css";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { ClientProviders } from "@/providers/client-providers";
import { Geist } from "next/font/google";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const vazirFont = localFont({
  src: [
    {
      path: "../../public/fonts/vazir/Vazir-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }
  const t = await getTranslations({ locale });
  // Use t for all metadata fields
  const title = `Connect - ${t("Hero.title")}`;
  const description = t("Footer.description");
  const keywords = t("Footer.descriptionShort").split(" ");
  const isFa = locale === "fa";
  return {
    metadataBase: new URL(defaultUrl),
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: defaultUrl,
      siteName: title,
      locale: isFa ? "fa_IR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = locale === "fa" ? "rtl" : "ltr";
  console.log(dir);

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${
        locale === "fa" ? vazirFont.variable + " font-vazir" : geist.className
      } antialiased`}
    >
      <body>
        <ClientProviders>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ClientProviders>
        <Toaster className={locale === "fa" ? "!font-vazir" : ""} richColors />
      </body>
    </html>
  );
}
