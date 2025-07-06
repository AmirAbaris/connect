import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { ClientProviders } from "@/providers/client-providers";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirFont.variable} font-vazir antialiased`}>
        <ClientProviders>
          {children}
        </ClientProviders>
        <Toaster className="!font-vazir" richColors />
      </body>
    </html>
  );
}
