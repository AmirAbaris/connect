"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function CompleteProfileFirstStep() {
  const [profilePic] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState(21);

  const getInitials = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return "";
    return trimmed
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background px-4">
      <div className="w-full max-w-lg flex flex-col items-center gap-10 py-16">
        <div className="flex flex-col items-center gap-2 mb-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-1 tracking-tight drop-shadow-sm text-center">
            پروفایل خفن بساز!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-semibold text-center">
            هرچی پروفایلت خاص‌تر باشه، بیشتر دیده می‌شی ⚡️
          </p>
        </div>
        {/* Profile Pic */}
        <div className="flex flex-col items-center gap-4">
          <Avatar className="w-44 h-44 border-4 border-primary shadow-2xl bg-background">
            {profilePic ? (
              <AvatarImage src={profilePic} alt={name || "profile"} />
            ) : getInitials(name) ? (
              <AvatarFallback className="text-6xl text-primary bg-background">
                {getInitials(name)}
              </AvatarFallback>
            ) : (
              <AvatarFallback className="flex items-center justify-center bg-background">
                <User className="w-20 h-20 text-muted-foreground" />
              </AvatarFallback>
            )}
          </Avatar>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 py-4 text-lg font-semibold mt-2 shadow-md"
          >
            انتخاب عکس پروفایل
          </Button>
        </div>

        {/* Inputs */}
        <form className="w-full flex flex-col items-center gap-8 mt-2">
          {/* Name */}
          <div className="w-full max-w-md flex flex-col gap-2">
            <div className="w-full flex flex-col gap-1">
              <Label
                htmlFor="name"
                className="text-xl font-bold text-primary flex items-center gap-2 self-start"
              >
                اسم
                <Badge variant="default">اجباری</Badge>
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                placeholder="مثلاً آرش"
                required
                className="text-xl w-full"
                type="text"
              />
            </div>
          </div>

          {/* Age */}
          <div className="w-full max-w-md flex flex-col gap-2">
            <div className="w-full flex flex-col gap-1">
              <Label
                htmlFor="age"
                className="text-xl font-bold text-primary flex items-center gap-2 self-start"
              >
                سن
                <Badge variant="default">اجباری</Badge>
              </Label>
              <Select
                value={String(age)}
                onValueChange={(v) => setAge(Number(v))}
              >
                <SelectTrigger className="bg-background border border-input rounded-md px-6 py-4 text-xl w-full focus:ring-2 focus:ring-primary focus:border-primary transition shadow-sm text-foreground">
                  <SelectValue placeholder="سن" />
                </SelectTrigger>
                <SelectContent className="border-border border-2 rounded-md">
                  {Array.from({ length: 84 }, (_, i) => 16 + i).map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Actions */}
          <Button
            className="w-full rounded-full text-3xl py-8 font-extrabold shadow-2xl mt-4"
            size="lg"
            type="submit"
          >
            ادامه
          </Button>
        </form>
      </div>
    </div>
  );
}
