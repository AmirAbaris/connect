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
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("InterestsModal");
  const INTERESTS = t.raw("interests") as string[];
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
          <DialogTitle className="text-lg font-bold text-primary text-center">
            {t("title")}
          </DialogTitle>
        </DialogHeader>
        <Label className="block text-sm font-bold text-secondary-foreground mb-2 text-center">
          {t("label")}
        </Label>
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
        {localSelected.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-2">
            {localSelected.map((interest) => (
              <Badge key={interest} variant="default">
                {interest}
              </Badge>
            ))}
          </div>
        )}
        <DialogFooter>
          <Button onClick={handleDone}>{t("done")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
