"use client";

import { useState, useEffect } from "react";
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
import useMember from "@/hooks/use-member";
import { Status } from "@/types/member";
import { Skeleton } from "@/components/ui/skeleton";
import useMap from "@/hooks/use-map";
import { Loader2 } from "lucide-react";

const STATUS_OPTIONS = [
  {
    key: "open" as Status,
    icon: "☕",
    color: "green",
    label: "آماده برای چت",
    desc: "دوست دارم با افراد جدید آشنا بشم!",
  },
  {
    key: "neutral" as Status,
    icon: "📖",
    color: "yellow",
    label: "اوکی با گپ کوتاه",
    desc: "مشغولم ولی خوشحال میشم ببینمت.",
  },
  {
    key: "close" as Status,
    icon: "🚫",
    color: "red",
    label: "مزاحم نشو",
    desc: "در حال کار یا استراحت هستم.",
  },
];

export default function StatusPage() {
  const { currentMember, update, isPendingUpdate } = useMember();

  const [selected, setSelected] = useState<Status>("open");
  const [visible, setVisible] = useState(false);
  const [loc, setLoc] = useState<{ lat: number; lng: number } | null>(null);
  const [geoIsLoading, setGeoIsLoading] = useState(true);
  const { location, isLoadingLocation } = useMap(loc);

  // Initialize from currentMember data
  useEffect(() => {
    if (currentMember) {
      setSelected(currentMember.status || "open");
      setVisible(currentMember.status !== null);
    }
  }, [currentMember]);

  const handleStatusChange = (status: Status) => {
    setSelected(status);
    if (visible && !isLoadingLocation) {
      update({
        fields: { status, location, lat: loc?.lat, lng: loc?.lng },
        uid: currentMember?.uid,
      });
    }
  };

  // a new effect for looking at user geo data
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoc({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setGeoIsLoading(false);
      },
      () => {
        setGeoIsLoading(false);
      }
    );
  }, []);

  const handleVisibilityChange = (isVisible: boolean) => {
    setVisible(isVisible);
    const newStatus = isVisible ? selected : null;
    update({
      fields: { status: newStatus },
      uid: currentMember?.uid,
    });
  };

  if (!currentMember || geoIsLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-dvh pb-40 pt-12 bg-background rtl px-2 sm:px-4">
        <Card className="w-full max-w-3xl mx-auto border border-border bg-background text-foreground shadow-lg p-3 sm:p-6 md:p-10 flex flex-col gap-6 sm:gap-8">
          {/* Skeleton for User Location */}
          <div className="flex flex-col items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
            <Skeleton className="h-8 w-40 rounded-xl mb-1" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Separator className="my-1 sm:my-2" />
          <CardHeader className="flex flex-col items-center gap-0.5 sm:gap-1 pb-1 sm:pb-2">
            <Skeleton className="h-8 w-32 mt-1 sm:mt-2" />
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:gap-8 pt-0">
            <div className="flex flex-col gap-2 sm:gap-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-14 sm:h-[56px] w-full rounded-xl"
                />
              ))}
            </div>
            <Separator className="my-1 sm:my-2" />
            <div className="flex flex-col items-center gap-2 sm:gap-4 mt-1 sm:mt-2 justify-center bg-muted/60 rounded-xl py-3 sm:py-4 px-3">
              <Skeleton className="h-6 w-24 mb-2" />
              <Skeleton className="h-8 w-16 rounded-full" />
              <Skeleton className="h-4 w-32 mt-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh pb-40 pt-12 bg-background rtl px-2 sm:px-4">
      <Card className="w-full max-w-3xl mx-auto border border-border bg-background text-foreground shadow-lg p-3 sm:p-6 md:p-10 flex flex-col gap-6 sm:gap-8">
        {/* User Location */}
        <div className="flex flex-col items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
          <Badge
            variant="secondary"
            className="text-base sm:text-lg px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-accent/60 border-accent/40"
          >
            {isLoadingLocation ? (
              <Skeleton className="h-6 w-24" />
            ) : (
              location || "نامشخص"
            )}
          </Badge>
          <CardDescription className="text-xs sm:text-base text-muted-foreground mt-0.5 sm:mt-1">
            موقعیت فعلی شما
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
                onClick={() => handleStatusChange(opt.key)}
                disabled={!visible || isPendingUpdate}
              >
                <span className="text-xl sm:text-3xl">{opt.icon}</span>
                <span className="flex flex-col items-start">
                  <span>{opt.label}</span>
                  <span
                    className={`text-xs sm:text-sm font-normal mt-0.5 sm:mt-1 ${
                      selected === opt.key
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {opt.desc}
                  </span>
                </span>
                {isPendingUpdate && selected === opt.key && (
                  <Loader2 className="mr-auto h-4 w-4 animate-spin" />
                )}
              </Button>
            ))}
          </div>
          <Separator className="my-1 sm:my-2" />
          <div className="flex flex-col items-center gap-2 sm:gap-4 mt-1 sm:mt-2 justify-center bg-muted/60 rounded-xl py-3 sm:py-4 px-3">
            <span className="text-base sm:text-lg font-bold">
              نمایش به دیگران:
            </span>
            <Switch
              checked={visible}
              onCheckedChange={handleVisibilityChange}
              disabled={isPendingUpdate}
              aria-label="toggle visibility"
            >
              {isPendingUpdate && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
            </Switch>
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
