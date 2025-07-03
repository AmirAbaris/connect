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

const mockData = {
  cafe: "کافه مرکزی",
  user: {
    name: "سارا محمدی",
    age: 26,
    avatar: null, // or a URL
    interests: ["کتاب", "موسیقی", "کافه گردی"],
    bio: "دانشجوی معماری، عاشق کتاب و قهوه. دوست دارم با آدمای جدید آشنا بشم!",
    status: {
      color: "green", // green | yellow | red
      icon: "☕", // ☕ | 📖 | 🚫
      label: "آماده برای چت، ملاقات با افراد جدید، یا شاید بیشتر",
    },
  },
};

export function PinDetailsDrawer() {
  const { cafe, user } = mockData;
  return (
    <DrawerContent className="rounded-t-2xl max-w-2xl p-0 rtl flex flex-col items-center justify-center min-h-[60vh] mx-auto w-full text-center">
      <Card className="w-full border-none shadow-none bg-transparent p-0 flex flex-col items-center">
        <CardHeader className="flex w-full flex-col items-center gap-2 pb-2">
          <span className="text-base text-muted-foreground font-medium mt-3">
            {cafe}
          </span>
          <Avatar className="w-20 h-20 border-4 border-primary/30 shadow bg-background">
            {user.avatar ? (
              <AvatarImage src={user.avatar} alt={user.name} />
            ) : (
              <AvatarFallback className="text-3xl text-primary bg-background">
                {user.name[0]}
              </AvatarFallback>
            )}
          </Avatar>
          <div
            className={`flex items-center gap-2 mt-2 px-4 py-1 rounded-xl font-semibold text-sm
              ${
                user.status.color === "green"
                  ? "bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400"
                  : ""
              }
              ${
                user.status.color === "yellow"
                  ? "bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                  : ""
              }
              ${
                user.status.color === "red"
                  ? "bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 opacity-80"
                  : ""
              }
            `}
          >
            <span className="text-lg">{user.status.icon}</span>
            <span>{user.status.label}</span>
          </div>
          <CardTitle className="text-2xl font-bold text-primary mt-2">
            {user.name}
          </CardTitle>
          <span className="text-base text-muted-foreground">
            {user.age} ساله
          </span>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 items-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {user.interests.map((interest) => (
              <Badge key={interest} variant="default">
                {interest}
              </Badge>
            ))}
          </div>
          <DrawerDescription className="text-base text-foreground text-center mt-2">
            {user.bio}
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
