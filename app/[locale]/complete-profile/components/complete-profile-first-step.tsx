"use client";

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
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import { firstFormPageSchema } from "@/schemas/member-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirstStepData } from "@/types/member";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useTranslations } from "next-intl";

type Props = {
  handleData: (data: FirstStepData) => void;
};

export default function CompleteProfileFirstStep(props: Props) {
  const { handleData } = props;
  const router = useRouter();
  const t = useTranslations("CompleteProfileFirstStep");
  const {
    register,
    handleSubmit,
    control,
    formState,
    getValues,
    setValue,
    watch,
  } = useForm<FirstStepData>({
    resolver: zodResolver(firstFormPageSchema),
    defaultValues: {
      name: "",
      age: undefined,
      imageFile: null,
    },
  });

  const imageInputRef = useRef<HTMLInputElement>(null);
  const imageFile = watch("imageFile");

  const handleImageButtonClick = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setValue("imageFile", file);
  };

  const onSubmit = (data: FirstStepData) => {
    console.log("Form data:", data);
    console.log("Form errors:", formState.errors);
    handleData(data);
    console.log("data from frist c");
    router.push("/complete-profile/2");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background px-4">
      <Card className="w-full max-w-md mx-auto border border-border bg-background text-foreground">
        <CardHeader className="flex flex-col items-center gap-1 pb-2">
          <h1 className="text-3xl font-extrabold text-primary tracking-tight text-center">
            {t("title")}
          </h1>
          <p className="text-base text-muted-foreground font-medium text-center">
            {t("subtitle")}
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 pt-0">
          {/* Profile Pic */}
          <div className="flex flex-col items-center gap-2 relative">
            <Avatar className="w-32 h-32 border-4 border-border shadow bg-background">
              {imageFile ? (
                <AvatarImage
                  src={URL.createObjectURL(imageFile as File)}
                  alt={getValues("name") || "profile"}
                />
              ) : getValues("name") ? (
                <AvatarFallback className="text-4xl text-primary bg-background">
                  {getValues("name").slice(0, 2)}
                </AvatarFallback>
              ) : (
                <AvatarFallback className="flex items-center justify-center bg-background">
                  <User className="w-14 h-14 text-muted-foreground" />
                </AvatarFallback>
              )}
            </Avatar>
            {imageFile && (
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="absolute top-2 left-2 z-10 rounded-full bg-background/80 hover:bg-background"
                onClick={() => setValue("imageFile", null)}
                tabIndex={-1}
              >
                <span className="sr-only">{t("removeImage")}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Button>
            )}
            <input
              type="file"
              accept="image/*"
              ref={imageInputRef}
              className="hidden"
              onChange={handleImageChange}
            />
            <Button
              variant="outline"
              type="button"
              onClick={handleImageButtonClick}
            >
              {t("selectImage")}
            </Button>
          </div>

          <form
            id="profile-form"
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5 mt-2"
          >
            {/* Name */}
            <div className="w-full flex flex-col gap-1">
              <Label
                htmlFor="name"
                className="text-base font-bold text-primary flex items-center gap-2"
              >
                {t("nameLabel")}
                <Badge variant="default">{t("required")}</Badge>
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder={t("namePlaceholder")}
                required
                className="text-base"
                type="text"
              />
            </div>

            {/* Age */}
            <div className="w-full flex flex-col gap-1">
              <Label
                htmlFor="age"
                className="text-base font-bold text-primary flex items-center gap-2"
              >
                {t("ageLabel")}
                <Badge variant="default">{t("required")}</Badge>
              </Label>
              <Controller
                control={control}
                name="age"
                render={({ field }) => (
                  <Select
                    value={String(field.value) || ""}
                    onValueChange={(v) => field.onChange(Number(v))}
                  >
                    <SelectTrigger className="bg-background border border-input rounded-md px-4 py-2 text-base w-full">
                      <SelectValue placeholder={t("agePlaceholder")} />
                    </SelectTrigger>
                    <SelectContent className="border border-input rounded-md max-h-48">
                      {Array.from({ length: 84 }, (_, i) => 18 + i).map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <p className="text-sm text-muted-foreground mb-1">
                {t("ageHint")}
              </p>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 pt-0">
          <Button
            type="submit"
            form="profile-form"
            disabled={formState.isSubmitting || !formState.isValid}
            className="w-full"
          >
            {t("continue")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
