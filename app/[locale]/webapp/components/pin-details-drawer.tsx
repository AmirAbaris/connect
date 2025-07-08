import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Member } from "@/types/member";
import { DialogTitle } from "@radix-ui/react-dialog";

type Props = {
  data: Member;
};

const STATUS_OPTIONS = {
  open: {
    icon: "☕",
    color: "green",
    label: "آماده برای چت",
    status: "open",
  },
  neutral: {
    icon: "📖",
    color: "yellow",
    label: "اوکی با گپ کوتاه",
    status: "neutral",
  },
  close: {
    icon: "🚫",
    color: "red",
    label: "مزاحم نشو",
    status: "close",
  },
};

export function PinDetailsDrawer({ data }: Props) {
  const { location, name, age, interests, bio, status, image } = data;
  const statusObj = status ? STATUS_OPTIONS[status] : null;

  return (
    <DrawerContent className="rounded-t-2xl max-w-2xl p-0 rtl flex flex-col items-center justify-center min-h-[60vh] mx-auto w-full text-center">
      <Card className="w-full border-none shadow-none bg-transparent p-0 flex flex-col items-center">
        <CardHeader className="flex w-full flex-col items-center gap-2 pb-2">
          <span className="text-base text-muted-foreground font-medium mt-3">
            {location || "نامشخص"}
          </span>
          <Avatar className="w-40 h-40 border-4 border-primary/30 shadow bg-background">
            {image ? (
              <AvatarImage src={image} alt={name} />
            ) : (
              <AvatarFallback className="text-3xl text-primary bg-background">
                {name?.[0] || "?"}
              </AvatarFallback>
            )}
          </Avatar>
          {statusObj && (
            <div
              className={`flex items-center gap-2 mt-2 px-4 py-1 rounded-xl font-semibold text-sm
                ${
                  statusObj.color === "green"
                    ? "bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400"
                    : ""
                }
                ${
                  statusObj.color === "yellow"
                    ? "bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                    : ""
                }
                ${
                  statusObj.color === "red"
                    ? "bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 opacity-80"
                    : ""
                }
              `}
            >
              <span className="text-lg">{statusObj.icon}</span>
              <span>{statusObj.label}</span>
            </div>
          )}
          <span className="text-sm text-muted-foreground">
            {age ? `${age} ساله` : ""}
          </span>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 items-center">
          <DialogTitle className="text-2xl font-bold text-primary mt-2">
            {name}
          </DialogTitle>
          <div className="flex flex-wrap gap-2 justify-center">
            {interests?.length
              ? interests.map((interest) => (
                  <Badge key={interest} variant="default">
                    {interest}
                  </Badge>
                ))
              : null}
          </div>
          <DrawerDescription className="text-base text-foreground text-center mt-2">
            {bio}
          </DrawerDescription>
        </CardContent>
        <DrawerFooter className="flex flex-row gap-2 justify-center mt-4">
          <DrawerClose>
            <Button variant="outline">بستن</Button>
          </DrawerClose>
        </DrawerFooter>
      </Card>
    </DrawerContent>
  );
}
