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

type Props = {
  handleData: (data: FirstStepData) => void;
};

export default function CompleteProfileFirstStep(props: Props) {
  const { handleData } = props;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm<FirstStepData>({
    resolver: zodResolver(firstFormPageSchema),
  });

  const onSubmit = (data: FirstStepData) => {
    handleData(data);
    router.push("/complete-profile/2");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background px-4">
      <Card className="w-full max-w-md mx-auto border border-border bg-background text-foreground">
        <CardHeader className="flex flex-col items-center gap-1 pb-2">
          <h1 className="text-3xl font-extrabold text-primary tracking-tight text-center">
            پروفایل خفن بساز!
          </h1>
          <p className="text-base text-muted-foreground font-medium text-center">
            هرچی پروفایلت خاص‌تر باشه، بیشتر دیده می‌شی ⚡️
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 pt-0">
          {/* Profile Pic */}
          {/* TODO: show from parent data */}
          {/* <div className="flex flex-col items-center gap-2">
            <Avatar className="w-32 h-32 border-4 border-border shadow bg-background">
              {getValues("image") ? (
                <AvatarImage
                  src={getValues("image") as string}
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
            <Button variant="outline">انتخاب عکس پروفایل</Button>
          </div> */}

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
                اسم
                <Badge variant="default">اجباری</Badge>
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="مثلاً آرش"
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
                سن
                <Badge variant="default">اجباری</Badge>
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
                      <SelectValue placeholder="سن" />
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
                حداقل سن: ۱۸ سال
              </p>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 pt-0">
          <Button
            type="submit"
            form="profile-form"
            disabled={isSubmitting || !isValid}
            className="w-full"
          >
            ادامه
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
