"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import useAuth from "@/hooks/use-auth";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const { session, isLoadingUserSession } = useAuth();
  const isLoggedIn = !!session?.user;

  const toggleLanguage = () => {
    const newLocale = locale === "fa" ? "en" : "fa";
    router.push(`/${newLocale}`);
  };

  if (isLoadingUserSession) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image
                  src={"/logo.svg"}
                  width={62}
                  height={62}
                  alt={t("logo")}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  const navItems = [
    { href: "/terms", label: t("terms") },
    { href: "/privacy", label: t("privacy") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Image src={"/logo.svg"} width={62} height={62} alt={t("logo")} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="relative"
              title={locale === "fa" ? "Switch to English" : "تغییر به فارسی"}
            >
              <Globe className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 text-xs font-bold bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center">
                {locale === "fa" ? "EN" : "فا"}
              </span>
            </Button>

            {isLoggedIn ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/webapp/status">{t("dashboard")}</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/webapp/account">{t("account")}</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/auth/login">{t("login")}</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/signup">{t("signup")}</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t("toggleMenu")}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side={locale === "fa" ? "left" : "right"}>
                <SheetHeader>
                  <SheetTitle>
                    <span className="text-2xl font-black">
                      <Link
                        href="/"
                        className={clsx(
                          locale === "fa" ? "justify-end" : "justify-start"
                        )}
                      >
                        <Image
                          src={"/logo.svg"}
                          width={62}
                          height={62}
                          alt={t("logo")}
                        />
                      </Link>
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8 p-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Mobile Language Switcher */}
                  <Button
                    variant="ghost"
                    onClick={() => {
                      toggleLanguage();
                      setIsOpen(false);
                    }}
                    className="justify-start text-lg font-medium"
                  >
                    <Globe className="h-5 w-5 mr-2" />
                    {locale === "fa" ? "English" : "فارسی"}
                  </Button>

                  <div className="flex flex-col gap-4 pt-6 border-t border-border">
                    {isLoggedIn ? (
                      <>
                        <Button
                          variant="ghost"
                          asChild
                          className="justify-start"
                        >
                          <Link
                            href="/webapp/status"
                            onClick={() => setIsOpen(false)}
                          >
                            {t("dashboard")}
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                          className="justify-start"
                        >
                          <Link
                            href="/webapp/account"
                            onClick={() => setIsOpen(false)}
                          >
                            {t("account")}
                          </Link>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="ghost"
                          asChild
                          className="justify-start"
                        >
                          <Link
                            href="/auth/login"
                            onClick={() => setIsOpen(false)}
                          >
                            {t("login")}
                          </Link>
                        </Button>
                        <Button asChild className="justify-start">
                          <Link
                            href="/auth/signup"
                            onClick={() => setIsOpen(false)}
                          >
                            {t("signup")}
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
