"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { InterestsModal } from "../../complete-profile/components/interests-modal";

const MOCK_PROFILE = {
  name: "سارا محمدی",
  age: 26,
  avatar: null,
  bio: "دانشجوی معماری، عاشق کتاب و قهوه. دوست دارم با آدمای جدید آشنا بشم!",
  interests: ["کتاب", "موسیقی", "کافه گردی"],
};

export default function AccountPage() {
  const [profilePic] = useState<string | null>(MOCK_PROFILE.avatar);
  const [name, setName] = useState(MOCK_PROFILE.name);
  const [age, setAge] = useState(MOCK_PROFILE.age);
  const [bio, setBio] = useState(MOCK_PROFILE.bio);
  const [interests, setInterests] = useState<string[]>(MOCK_PROFILE.interests);
  const [modalOpen, setModalOpen] = useState(false);

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
    <div className="min-h-dvh pb-40 pt-12 flex flex-col items-center justify-center bg-background rtl px-2 sm:px-4">
      <Card className="w-full max-w-2xl mx-auto border border-border bg-background text-foreground shadow-lg p-4 sm:p-8 flex flex-col gap-8">
        <CardHeader className="flex flex-col items-center gap-2 pb-2">
          <CardTitle className="text-2xl font-bold text-primary mt-2">
            پروفایل من
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            اطلاعات حساب کاربری خود را ویرایش کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8 pt-0">
          {/* Profile Pic */}
          <div className="flex flex-col items-center gap-2">
            <Avatar className="w-28 h-28 border-4 border-border shadow bg-background">
              {profilePic ? (
                <AvatarImage src={profilePic} alt={name || "profile"} />
              ) : getInitials(name) ? (
                <AvatarFallback className="text-4xl text-primary bg-background">
                  {getInitials(name)}
                </AvatarFallback>
              ) : (
                <AvatarFallback className="flex items-center justify-center bg-background">
                  <span className="text-3xl text-muted-foreground">👤</span>
                </AvatarFallback>
              )}
            </Avatar>
            <Button variant="outline" className="mt-2">
              تغییر عکس پروفایل
            </Button>
          </div>
          <Separator />
          {/* Name & Age */}
          <form className="w-full flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <div className="flex-1 flex flex-col gap-2">
                <Label
                  htmlFor="name"
                  className="text-base font-bold text-primary self-start"
                >
                  نام
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثلاً آرش"
                  required
                  className="text-base"
                  type="text"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <Label
                  htmlFor="age"
                  className="text-base font-bold text-primary self-start"
                >
                  سن
                </Label>
                <Select
                  value={String(age)}
                  onValueChange={(v) => setAge(Number(v))}
                >
                  <SelectTrigger className="bg-background border border-input rounded-md px-4 py-2 text-base w-full">
                    <SelectValue placeholder="سن" />
                  </SelectTrigger>
                  <SelectContent className="border border-input rounded-md">
                    {Array.from({ length: 84 }, (_, i) => 16 + i).map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* Bio */}
            <div className="w-full flex flex-col gap-2">
              <Label
                htmlFor="bio"
                className="text-base font-bold text-primary self-start"
              >
                بیو
              </Label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="یه جمله درباره خودت..."
                className="text-base min-h-[80px] resize-none bg-background border border-input rounded-md px-3 py-2 w-full"
              />
            </div>
            {/* Interests */}
            <div className="w-full flex flex-col gap-2">
              <Label className="text-base font-bold text-primary self-start">
                علاقه‌مندی‌ها
              </Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {interests.length === 0 ? (
                  <span className="text-muted-foreground text-base">
                    هیچ علاقه‌ای انتخاب نشده
                  </span>
                ) : (
                  interests.map((interest) => (
                    <Badge key={interest} variant="default">
                      {interest}
                    </Badge>
                  ))
                )}
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => setModalOpen(true)}
              >
                انتخاب علاقه‌مندی‌ها
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-row-reverse gap-4 justify-end mt-4">
          <Button type="submit" className="px-8 py-3 text-lg font-bold">
            ذخیره تغییرات
          </Button>
        </CardFooter>
      </Card>
      <InterestsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selected={interests}
        onChange={setInterests}
      />
    </div>
  );
}
