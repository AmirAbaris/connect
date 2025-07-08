"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Coffee, Code, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">
            درباره ما
            <Coffee className="w-4 h-4 ml-2" />
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            سلام، من{" "}
            <a
              href="https://amir-abaris.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-16 hover:text-primary/80 transition-colors"
            >
              امیر آباریس
            </a>{" "}
            هستم
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            و این داستان کانکت است - اپلیکیشنی که از کافه‌های کرج متولد شد.
          </p>
        </div>

        {/* Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">داستان ما</h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              همه چیز از یک مشکل ساده شروع شد: اضطراب اجتماعی. من و خیلی از
              دوستانم همیشه نگران بودیم که مزاحم کسی بشیم یا در زمان نامناسب
              پیام بدیم.
            </p>

            <p>
              از طرفی، خیلی وقت‌ها می‌خواستیم با آدم‌های جدید آشنا بشیم ولی
              نمی‌دونستیم چه زمانی مناسب‌تره یا طرف آماده چت هست یا نه.
            </p>

            <p>
              ایده کانکت ساده بود: بذار مردم بگن چه زمانی آماده ارتباط هستن.
              اینطوری هم اضطراب اجتماعی کم می‌شه، هم ارتباطات راحت‌تر می‌شه.
            </p>
          </div>
        </div>

        {/* What we do */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">چی کار می‌کنیم</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold">فرانت‌اند</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  تخصصم در فرانت‌اند است. عاشق ساختن رابط‌های کاربری زیبا و
                  تجربه‌های کاربری عالی هستم.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold">کافه‌نشینی</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  عاشق کافه‌ها هستیم. جایی که بهترین ایده‌ها و کدها متولد می‌شن.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">تیم</h2>

          <div className="bg-card/50 rounded-lg p-6 border border-border/50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ام
              </div>
              <div>
                <h3 className="font-semibold">امیر آباریس</h3>
                <p className="text-sm text-muted-foreground">
                  سازنده و توسعه‌دهنده اصلی
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              برنامه‌نویس فرانت‌اند که عاشق حل مشکلات .
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">بگو سلام</h2>
          <p className="text-muted-foreground mb-8">
            اگر سوالی داری یا می‌خوای همکاری کنی، خوشحال می‌شم بشنوم.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/auth/signup">امتحان کن</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">تماس</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
