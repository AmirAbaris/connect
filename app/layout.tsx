import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { ClientProviders } from "@/providers/client-providers";
import { Geist } from "next/font/google";
import { useLocale } from "next-intl";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Connect - اپلیکیشن اجتماعی نقشه‌محور",
  description:
    "با افراد اطراف خود آشنا شوید. موقعیت خود را به اشتراک بگذارید و با افراد جدید در نزدیکی خود ارتباط برقرار کنید.",
  keywords: ["اجتماعی", "نقشه", "چت", "آشنایی", "موقعیت مکانی", "ایران"],
  authors: [{ name: "Connect Team" }],
  creator: "Connect",
  publisher: "Connect",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Connect - اپلیکیشن اجتماعی نقشه‌محور",
    description:
      "با افراد اطراف خود آشنا شوید. موقعیت خود را به اشتراک بگذارید و با افراد جدید در نزدیکی خود ارتباط برقرار کنید.",
    url: defaultUrl,
    siteName: "Connect",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Connect - اپلیکیشن اجتماعی نقشه‌محور",
    description:
      "با افراد اطراف خود آشنا شوید. موقعیت خود را به اشتراک بگذارید و با افراد جدید در نزدیکی خود ارتباط برقرار کنید.",
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

const vazirFont = localFont({
  src: [
    {
      path: "../public/fonts/vazir/Vazir-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazir-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazir.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazir-Bold.ttf",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();
  const dir = locale === "fa" ? "rtl" : "ltr";
  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${
        locale === "fa" ? vazirFont.variable : geist.className + " font-sans"
      }  font-vazir antialiased`}
    >
      <ClientProviders>{children}</ClientProviders>
      <Toaster className="!font-vazir" richColors />
    </html>
  );
}
