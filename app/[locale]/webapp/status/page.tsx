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
import { Loader2, RefreshCw } from "lucide-react";
import { useTranslations } from "next-intl";

const STATUS_KEYS = [
  {
    key: "open" as Status,
    icon: "☕",
    labelKey: "readyToChat",
    descKey: "readyToChatDesc",
  },
  {
    key: "neutral" as Status,
    icon: "📖",
    labelKey: "okWithShortChat",
    descKey: "okWithShortChatDesc",
  },
  {
    key: "close" as Status,
    icon: "🚫",
    labelKey: "doNotDisturb",
    descKey: "doNotDisturbDesc",
  },
];

export default function StatusPage() {
  const { currentMember, isLoadingCurrentMember, update, isPendingUpdate } =
    useMember();

  const [selected, setSelected] = useState<Status>("open");
  const [visible, setVisible] = useState(false);
  const [loc, setLoc] = useState<{ lat: number; lng: number } | null>(null);
  const [geoIsLoading, setGeoIsLoading] = useState(true);
  const { location, isLoadingLocation } = useMap(loc);
  const t = useTranslations("Status");

  // Initialize from currentMember data
  useEffect(() => {
    if (currentMember) {
      setSelected(currentMember.status || "open");
      setVisible(currentMember.status !== null);
    }
  }, [currentMember]);

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

  const refreshLocation = () => {
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
    if (location && location !== t("locationUnknown")) {
      update({
        fields: { location, lat: loc?.lat, lng: loc?.lng },
        uid: currentMember?.uid,
      });
    }
  };

  const handleStatusChange = (status: Status) => {
    setSelected(status);
    if (visible && !isLoadingLocation) {
      update({
        fields: { status, location, lat: loc?.lat, lng: loc?.lng },
        uid: currentMember?.uid,
      });
    }
  };

  const handleVisibilityChange = (isVisible: boolean) => {
    setVisible(isVisible);
    const newStatus = isVisible ? selected : null;
    update({
      fields: { status: newStatus, location, lat: loc?.lat, lng: loc?.lng },
      uid: currentMember?.uid,
    });
  };

  if (geoIsLoading || isLoadingCurrentMember) {
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

  if (
    !currentMember &&
    !isLoadingCurrentMember &&
    !isLoadingLocation &&
    !geoIsLoading
  ) {
    return (
      <div className="flex flex-col items-center justify-center min-h-dvh pb-40 pt-12 bg-background rtl px-2 sm:px-4">
        <Card className="w-full max-w-3xl mx-auto border border-border bg-background text-foreground shadow-lg p-3 sm:p-6 md:p-10 flex flex-col gap-6 sm:gap-8">
          <CardHeader className="flex flex-col items-center gap-4 pb-4">
            <CardTitle className="text-xl sm:text-3xl font-extrabold text-destructive">
              {t("profileIncompleteTitle")}
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              {t("profileIncompleteDesc")}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                {t("profileIncompleteInfo")}
              </p>
            </div>
            <Button
              onClick={() => (window.location.href = "/complete-profile/1")}
              className="w-full max-w-xs"
              size="lg"
            >
              {t("completeProfile")}
            </Button>
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
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="text-base sm:text-lg px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-accent/60 border-accent/40"
            >
              {isLoadingLocation ? (
                <Skeleton className="h-6 w-24" />
              ) : (
                location || t("locationUnknown")
              )}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={refreshLocation}
              disabled={isPendingUpdate}
              className="h-8 w-8 p-0"
              aria-label={t("updateLocation")}
              title={t("updateLocation")}
            >
              {isPendingUpdate ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
            </Button>
          </div>
          <CardDescription className="text-xs sm:text-base text-muted-foreground mt-0.5 sm:mt-1">
            {t("currentLocation")}
          </CardDescription>
        </div>
        <Separator className="my-1 sm:my-2" />
        <CardHeader className="flex flex-col items-center gap-0.5 sm:gap-1 pb-1 sm:pb-2">
          <CardTitle className="text-xl sm:text-3xl font-extrabold text-primary mt-1 sm:mt-2">
            {t("myStatus")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 sm:gap-8 pt-0">
          <div className="flex flex-col gap-2 sm:gap-4">
            {STATUS_KEYS.map((opt) => (
              <Button
                key={opt.key}
                variant={selected === opt.key ? "default" : "outline"}
                className="flex items-center gap-2 sm:gap-3 justify-start w-full text-base sm:text-lg font-bold rounded-xl min-h-14 sm:min-h-[56px]"
                onClick={() => handleStatusChange(opt.key)}
                disabled={
                  !visible ||
                  isPendingUpdate ||
                  !location ||
                  location === t("locationUnknown")
                }
              >
                <span className="text-xl sm:text-3xl">{opt.icon}</span>
                <span className="flex flex-col items-start">
                  <span>{t(opt.labelKey)}</span>
                  <span
                    className={`text-xs sm:text-sm font-normal mt-0.5 sm:mt-1 ${
                      selected === opt.key
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t(opt.descKey)}
                  </span>
                </span>
                {isPendingUpdate && selected === opt.key && (
                  <Loader2 className="mx-3 h-4 w-4 animate-spin" />
                )}
              </Button>
            ))}
          </div>
          <Separator className="my-1 sm:my-2" />
          <div className="flex flex-col items-center gap-2 sm:gap-4 mt-1 sm:mt-2 justify-center bg-muted/60 rounded-xl py-3 sm:py-4 px-3">
            <span className="text-base sm:text-lg font-bold">
              {t("showToOthers")}
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
              {visible ? t("visible") : t("hidden")}
            </span>
            {visible && (
              <span className="text-xs text-muted-foreground/70 text-center">
                {t("visibilityTimeout")}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
