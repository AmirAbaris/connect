"use client";

import { Button } from "@/components/ui/button";
import { User, Compass, Signal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    key: "explore",
    label: "اکسپلور",
    icon: Compass,
  },
  {
    key: "status",
    label: "وضعیت",
    icon: Signal,
  },
  {
    key: "account",
    label: "حساب",
    icon: User,
  },
];

export default function WebAppNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center sm:bottom-6"
      style={{ pointerEvents: "none" }}
    >
      <div className="pointer-events-auto w-full max-w-2xl sm:max-w-lg sm:rounded-3xl sm:shadow-xl sm:bg-background/90 sm:mx-auto flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 bg-background/95 border-t border-border/60 sm:border sm:border-border/80 sm:backdrop-blur-lg">
        {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
          const isActive = pathname.includes(key);
          return (
            <Link
              className="w-full flex justify-center"
              key={key}
              href={`/webapp/${key}`}
              style={{ pointerEvents: "auto" }}
            >
              <Button
                variant={isActive ? "default" : "ghost"}
                size="lg"
                className={`flex flex-col items-center gap-1 flex-1 transition-all duration-200 rounded-xl md:rounded-lg md:px-6 py-7 md:py-8 text-base md:text-lg
                ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg font-extrabold scale-105 md:scale-110 ring-2 ring-primary/30"
                    : "text-muted-foreground hover:bg-accent/40 hover:text-foreground"
                }
                ${isActive ? "" : "md:opacity-80"}
                `}
                aria-current={isActive ? "page" : undefined}
                style={{ zIndex: isActive ? 1 : 0 }}
              >
                <Icon
                  className={`mb-0.5 size-6 md:size-7 transition-all duration-200 ${
                    isActive ? "scale-110" : "opacity-70"
                  }`}
                />
                <span className="font-bold leading-tight">{label}</span>
              </Button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
