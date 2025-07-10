"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto max-w-2xl px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">
            تماس با ما
            <Mail className="w-4 h-4 ml-2" />
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">بگو سلام 👋</h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            اگر سوالی داری، پیشنهادی داری یا می‌خوای همکاری کنی، خوشحال می‌شم
            بشنوم.
          </p>
        </div>

        {/* Contact Info */}
        <Card className="border border-border/50">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">ایمیل</h2>
              <p className="text-muted-foreground mb-6">
                بهترین راه برای تماس با من
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-4 mb-6 overflow-x-auto max-w-full">
              <Link
                href="mailto:thisisamirabaris@gmail.com"
                className="text-xs sm:text-sm md:text-lg font-mono text-primary hover:underline break-all"
              >
                thisisamirabaris@gmail.com
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              معمولاً در کمتر از ۲۴ ساعت جواب می‌دم
            </p>
          </CardContent>
        </Card>

        {/* Back */}
        <div className="text-center mt-12">
          <Button asChild variant="ghost">
            <Link href="/">
              برگشت به خانه
              <ArrowLeft className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
