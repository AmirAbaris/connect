"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const STATUS_OPTIONS = [
  {
    key: "ready",
    icon: "☕",
    color: "green",
    label: "آماده برای چت",
    desc: "دوست دارم با افراد جدید آشنا بشم!",
  },
  {
    key: "ok",
    icon: "📖",
    color: "yellow",
    label: "اوکی با گپ کوتاه",
    desc: "مشغولم ولی خوشحال میشم ببینمت.",
  },
  {
    key: "busy",
    icon: "🚫",
    color: "red",
    label: "مزاحم نشو",
    desc: "در حال کار یا استراحت هستم.",
  },
];

const USER_LOCATION = "کافه مرکزی";

export default function StatusPage() {
  const [selected, setSelected] = useState("ready");
  const [visible, setVisible] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh pb-40 pt-12 bg-background rtl px-2 sm:px-4">
      <Card className="w-full max-w-3xl mx-auto border border-border bg-background text-foreground shadow-lg p-3 sm:p-6 md:p-10 flex flex-col gap-6 sm:gap-8">
        {/* User Location */}
        <div className="flex flex-col items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
          <Badge
            variant="secondary"
            className="text-base sm:text-lg px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-accent/60 border-accent/40"
          >
            📍 {USER_LOCATION}
          </Badge>
          <CardDescription className="text-xs sm:text-base text-muted-foreground mt-0.5 sm:mt-1">
            موقعیت فعلی شما (بر اساس Google Places API)
          </CardDescription>
        </div>
        <Separator className="my-1 sm:my-2" />
        <CardHeader className="flex flex-col items-center gap-0.5 sm:gap-1 pb-1 sm:pb-2">
          <CardTitle className="text-xl sm:text-3xl font-extrabold text-primary mt-1 sm:mt-2">
            وضعیت من
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 sm:gap-8 pt-0">
          <div className="flex flex-col gap-2 sm:gap-4">
            {STATUS_OPTIONS.map((opt) => (
              <Button
                key={opt.key}
                variant={selected === opt.key ? "default" : "outline"}
                className="flex items-center gap-2 sm:gap-3 justify-start w-full text-base sm:text-lg font-bold rounded-xl min-h-14 sm:min-h-[56px]"
                onClick={() => setSelected(opt.key)}
              >
                <span className="text-xl sm:text-3xl">{opt.icon}</span>
                <span className="flex flex-col items-start">
                  <span>{opt.label}</span>
                  <span className="text-xs sm:text-sm font-normal text-muted-foreground mt-0.5 sm:mt-1">
                    {opt.desc}
                  </span>
                </span>
              </Button>
            ))}
          </div>
          <Separator className="my-1 sm:my-2" />
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-1 sm:mt-2 justify-center bg-muted/60 rounded-xl py-3 sm:py-4 px-3 sm:px-6">
            <span className="text-base sm:text-lg font-bold">
              نمایش به دیگران:
            </span>
            <Switch
              checked={visible}
              onCheckedChange={setVisible}
              aria-label="toggle visibility"
            />
            <span className="text-xs sm:text-base text-muted-foreground text-center sm:text-right">
              {visible
                ? "وضعیت شما برای دیگران قابل مشاهده است"
                : "پنهان از دیگران"}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
