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
import useAuth from "@/hooks/use-auth";
import useMember from "@/hooks/use-member";
import { Skeleton } from "@/components/ui/skeleton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const profileSchema = z.object({
  name: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
  age: z.number().min(16, "سن باید حداقل ۱۶ باشد").max(99, "سن معتبر نیست"),
  bio: z.string().max(200, "بیو نباید بیشتر از ۲۰۰ کاراکتر باشد").optional(),
  interests: z.array(z.string()).optional(),
});

export default function AccountPage() {
  const { signOut, isPendingSignOut } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const {
    currentMember,
    isLoadingCurrentMember,
    isErrorCurrentMember,
    isReady,
    refetchCurrentMember,
    update,
    isPendingUpdate,
  } = useMember();
  const { session } = useAuth();
  const uid = session?.user?.id;

  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: currentMember?.name || "",
      age: currentMember?.age || 18,
      bio: currentMember?.bio || "",
      interests: currentMember?.interests || [],
    },
    values: currentMember
      ? {
          name: currentMember.name || "",
          age: currentMember.age || 18,
          bio: currentMember.bio || "",
          interests: currentMember.interests || [],
        }
      : undefined,
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
    watch,
  } = form;

  const onSubmit = (data: any) => {
    update({ fields: data, uid });
  };

  if (isLoadingCurrentMember || !isReady) {
    return (
      <div className="min-h-dvh pb-40 pt-12 flex flex-col items-center justify-center bg-background rtl px-2 sm:px-4">
        <Card className="w-full max-w-2xl mx-auto border border-border bg-background text-foreground shadow-lg p-4 sm:p-8 flex flex-col gap-8 animate-pulse">
          <CardHeader className="flex flex-col items-center gap-2 pb-2">
            <Skeleton className="w-28 h-28 rounded-full mb-4" />
            <Skeleton className="h-8 w-40 mb-2" />
            <Skeleton className="h-5 w-64" />
          </CardHeader>
          <CardContent className="flex flex-col gap-8 pt-0">
            <div className="flex flex-col items-center gap-2">
              <Skeleton className="w-24 h-6 mb-2" />
              <Skeleton className="w-32 h-10 mb-2" />
            </div>
            <Separator />
            <form className="w-full flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6 w-full">
                <div className="flex-1 flex flex-col gap-2">
                  <Skeleton className="h-5 w-20 mb-1" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <Skeleton className="h-5 w-20 mb-1" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-5 w-20 mb-1" />
                <Skeleton className="h-20 w-full" />
              </div>
              <div className="w-full flex flex-col gap-2">
                <Skeleton className="h-5 w-32 mb-1" />
                <div className="flex flex-wrap gap-2 mb-2">
                  <Skeleton className="h-8 w-16 rounded-full" />
                  <Skeleton className="h-8 w-16 rounded-full" />
                  <Skeleton className="h-8 w-16 rounded-full" />
                </div>
                <Skeleton className="h-10 w-40" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-row gap-4 justify-end mt-4">
            <Skeleton className="h-12 w-32 rounded-md" />
            <Skeleton className="h-12 w-32 rounded-md" />
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (isErrorCurrentMember) {
    return (
      <div className="min-h-dvh pb-40 pt-12 flex flex-col items-center justify-center bg-background px-2 sm:px-4">
        <Card className="w-full max-w-md mx-auto border border-border bg-background text-foreground shadow-lg p-8 flex flex-col items-center gap-6">
          <CardHeader className="flex flex-col items-center gap-2 pb-2 w-full">
            <CardTitle className="text-2xl font-bold text-primary mt-2">
              پروفایلی یافت نشد
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              شما هنوز پروفایلی نساخته‌اید.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => refetchCurrentMember()}
            >
              تلاش مجدد
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              {currentMember ? (
                currentMember.image ? (
                  <AvatarImage
                    src={currentMember.image}
                    alt={currentMember.name || "profile"}
                  />
                ) : (
                  <AvatarFallback className="text-4xl text-primary bg-background">
                    {currentMember.name
                      ? currentMember.name[0].toUpperCase()
                      : "?"}
                  </AvatarFallback>
                )
              ) : (
                <AvatarFallback className="text-4xl text-primary bg-background">
                  ?
                </AvatarFallback>
              )}
            </Avatar>
            <Button variant="outline" className="mt-2">
              تغییر عکس پروفایل
            </Button>
          </div>
          <Separator />
          {/* Name & Age */}
          <form
            className="w-full flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                  {...register("name")}
                  placeholder="مثلاً آرش"
                  className="text-base"
                  type="text"
                />
                {errors.name && (
                  <span className="text-destructive text-sm mt-1">
                    {errors.name.message as string}
                  </span>
                )}
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <Label
                  htmlFor="age"
                  className="text-base font-bold text-primary self-start"
                >
                  سن
                </Label>
                <Select
                  value={String(watch("age"))}
                  onValueChange={(v) =>
                    setValue("age", Number(v), { shouldDirty: true })
                  }
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
                {errors.age && (
                  <span className="text-destructive text-sm mt-1">
                    {errors.age.message as string}
                  </span>
                )}
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
                {...register("bio")}
                placeholder="یه جمله درباره خودت..."
                className="text-base min-h-[80px] resize-none bg-background border border-input rounded-md px-3 py-2 w-full"
              />
              {errors.bio && (
                <span className="text-destructive text-sm mt-1">
                  {errors.bio.message as string}
                </span>
              )}
            </div>
            {/* Interests */}
            <div className="w-full flex flex-col gap-2">
              <Label className="text-base font-bold text-primary self-start">
                علاقه‌مندی‌ها
              </Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {(watch("interests") || []).length === 0 ? (
                  <span className="text-muted-foreground text-base">
                    هیچ علاقه‌ای انتخاب نشده
                  </span>
                ) : (
                  (watch("interests") || []).map((interest: string) => (
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
            <Button
              type="submit"
              className="px-8 py-3 text-lg font-bold"
              disabled={isPendingUpdate || !isDirty}
            >
              {isPendingUpdate ? "در حال ذخیره..." : "ذخیره تغییرات"}
            </Button>
          </form>
          <CardFooter className="flex flex-row gap-4 justify-end mt-4">
            <Button
              type="button"
              variant="destructive"
              onClick={() => signOut()}
              disabled={isPendingSignOut}
              className="px-8 py-3 text-lg font-bold"
            >
              {isPendingSignOut ? "در حال خروج..." : "خروج"}
            </Button>
          </CardFooter>
          <InterestsModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            selected={watch("interests") || []}
            onChange={(ints) =>
              setValue("interests", ints, { shouldDirty: true })
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}
