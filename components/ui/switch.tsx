"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const locale = useLocale();
  const isRTL = locale === "fa";
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.25rem] w-10 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 sm:size-5 rounded-full ring-0 transition-transform duration-200 data-[state=checked]:translate-x-[-1.25rem] data-[state=unchecked]:translate-x-0 shadow-md border border-border",
          {
            "data-[state=checked]:translate-x-[1.25rem]": !isRTL,
          }
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
