"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InterestsModal } from "./interests-modal";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function CompleteProfileSecondStep() {
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background px-4">
      <Card className="w-full max-w-md mx-auto border border-border bg-background text-foreground">
        <CardHeader className="flex flex-col items-center gap-1 pb-2">
          <h1 className="text-3xl font-extrabold text-primary tracking-tight text-center">
            تکمیل پروفایل
          </h1>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 pt-0">
          <form className="w-full flex flex-col gap-5">
            {/* Bio */}
            <div className="w-full flex flex-col gap-2">
              <Label
                htmlFor="bio"
                className="text-base font-bold text-primary self-start"
              >
                بیو (اختیاری)
              </Label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setBio(e.target.value)
                }
                placeholder="یه جمله درباره خودت..."
                className="text-base min-h-[80px] resize-none bg-background border border-input rounded-md px-3 py-2 w-full"
              />
            </div>

            {/* Interests */}
            <div className="w-full flex flex-col gap-2">
              <Label className="text-base font-bold text-primary self-start">
                علاقه‌مندی‌ها (اختیاری)
              </Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {interests.length === 0 ? (
                  <span className="text-muted-foreground text-base">
                    هیچ علاقه‌ای انتخاب نشده
                  </span>
                ) : (
                  interests.map((interest) => (
                    <span
                      key={interest}
                      className="inline-block bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-medium"
                    >
                      {interest}
                    </span>
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
        <CardFooter className="flex flex-col gap-2 pt-0">
          <Button type="submit" form="profile-form">
            انجام شد
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
