"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const INTERESTS = [
  "ورزش",
  "موسیقی",
  "کتاب",
  "فیلم",
  "سفر",
  "تکنولوژی",
  "هنر",
  "بازی",
  "غذا",
  "طبیعت",
  "انیمه",
  "میم",
  "استریم",
  "پادکست",
  "یوتیوب",
  "سوشال مدیا",
  "کریپتو",
  "برنامه‌نویسی",
];

type InterestsModalProps = {
  open: boolean;
  onClose: () => void;
  selected: string[];
  onChange: (selected: string[]) => void;
};

export function InterestsModal({
  open,
  onClose,
  selected,
  onChange,
}: InterestsModalProps) {
  const [localSelected, setLocalSelected] = useState<string[]>(selected || []);

  const toggleInterest = (interest: string) => {
    setLocalSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleDone = () => {
    onChange(localSelected);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm w-full rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-primary">
            علاقه‌مندی‌ها
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap gap-2 justify-center my-4">
          {INTERESTS.map((interest) => (
            <Button
              key={interest}
              type="button"
              variant={localSelected.includes(interest) ? "default" : "outline"}
              onClick={() => toggleInterest(interest)}
            >
              {interest}
            </Button>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={handleDone}>انجام شد</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
