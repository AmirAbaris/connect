"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "خانه" },
    { href: "/features", label: "ویژگی‌ها" },
    { href: "/about", label: "درباره ما" },
    { href: "/contact", label: "تماس" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-black">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                کانکت
              </span>
            </h1>
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
            <Button variant="ghost" asChild>
              <Link href="/login">ورود</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">شروع کنید</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-right">
                    <h1 className="text-2xl font-black">
                      <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        کانکت
                      </span>
                    </h1>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
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
                  <div className="flex flex-col gap-4 pt-6 border-t border-border">
                    <Button variant="ghost" asChild className="justify-start">
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        ورود
                      </Link>
                    </Button>
                    <Button asChild className="justify-start">
                      <Link href="/signup" onClick={() => setIsOpen(false)}>
                        شروع کنید
                      </Link>
                    </Button>
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
