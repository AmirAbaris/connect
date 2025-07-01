"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CompleteProfileSecondStep() {
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");

  return (
    <div className="w-full max-w-md bg-card/70 border border-border/50 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-8 mx-auto mt-12">
      {/* Bio */}
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="bio" className="text-sm font-medium text-foreground">
          بیو (اختیاری)
        </label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setBio(e.target.value)
          }
          placeholder="یه جمله درباره خودت..."
          className="bg-background border border-border rounded-lg px-3 py-2 min-h-[80px] resize-none"
        />
      </div>

      {/* Interests */}
      <div className="w-full flex flex-col gap-1">
        <label
          htmlFor="interests"
          className="text-sm font-medium text-foreground"
        >
          علاقه‌مندی‌ها (اختیاری)
        </label>
        <input
          id="interests"
          value={interests}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInterests(e.target.value)
          }
          placeholder="مثلاً: فوتبال، موسیقی، کتاب..."
          className="bg-background border border-border rounded-lg px-3 py-2"
          type="text"
        />
      </div>

      {/* Actions */}
      <div className="w-full flex gap-3 mt-4">
        <Button className="flex-1" size="lg">
          ادامه
        </Button>
        <Button variant="ghost" className="flex-1">
          رد کردن
        </Button>
      </div>
    </div>
  );
}
