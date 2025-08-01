"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InterestsModal } from "./interests-modal";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { secondFormPageSchema } from "@/schemas/member-schema";
import { SecondStepData } from "@/types/member";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  handleData: (data: SecondStepData) => void;
  isLoading: boolean;
};

export default function CompleteProfileSecondStep(props: Props) {
  const { handleData, isLoading } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);
  const t = useTranslations("CompleteProfileSecondStep");

  const { register, setValue, handleSubmit } = useForm<SecondStepData>({
    resolver: zodResolver(secondFormPageSchema),
  });

  // Sync interests state with form
  const handleInterestsChange = (newInterests: string[]) => {
    setInterests(newInterests);
    setValue("interests", newInterests);
  };

  const onSubmit = (data: SecondStepData) => {
    handleData(data);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background px-4">
      <Card className="w-full max-w-md mx-auto border border-border bg-background text-foreground">
        <CardHeader className="flex flex-col items-center gap-1 pb-2">
          <h1 className="text-3xl font-extrabold text-primary tracking-tight text-center">
            {t("title")}
          </h1>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 pt-0">
          <form
            id="profile-form"
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5"
          >
            {/* Bio */}
            <div className="w-full flex flex-col gap-2">
              <Label
                htmlFor="bio"
                className="text-base font-bold text-primary self-start"
              >
                {t("bioLabel")}
              </Label>
              <textarea
                id="bio"
                {...register("bio")}
                placeholder={t("bioPlaceholder")}
                className="text-base min-h-[80px] resize-none bg-background border border-input rounded-md px-3 py-2 w-full"
              />
            </div>

            {/* Interests */}
            <div className="w-full flex flex-col gap-2">
              <Label className="text-base font-bold text-primary self-start">
                {t("interestsLabel")}
              </Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {interests.length === 0 ? (
                  <span className="text-muted-foreground text-base">
                    {t("noInterests")}
                  </span>
                ) : (
                  interests.map((interest: string) => (
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
                {t("selectInterests")}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 pt-0">
          <Button type="submit" form="profile-form">
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              t("done")
            )}
          </Button>
        </CardFooter>
      </Card>
      <InterestsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selected={interests}
        onChange={handleInterestsChange}
      />
    </div>
  );
}
