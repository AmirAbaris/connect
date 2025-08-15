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
import { DeleteAccountModal } from "./components/delete-account-modal";
import useAuth from "@/hooks/use-auth";
import useMember from "@/hooks/use-member";
import { Skeleton } from "@/components/ui/skeleton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { profileSchema } from "@/schemas/profile-schema";

export default function AccountPage() {
  const { signOut, isPendingSignOut, session } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const t = useTranslations("Account");
  const {
    currentMember,
    isLoadingCurrentMember,
    isErrorCurrentMember,
    isReady,
    refetchCurrentMember,
    update,
    isPendingUpdate,
    uploadImage,
    isPendingUploadImage,
    deleteMember,
    isPendingDeleteMember,
  } = useMember();
  const uid = session?.user?.id;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: currentMember?.name || "",
      age: currentMember?.age || 18,
      bio: currentMember?.bio || "",
      interests: currentMember?.interests || [],
      image: currentMember?.image || null,
    },
    values: currentMember
      ? {
          name: currentMember.name || "",
          age: currentMember.age || 18,
          bio: currentMember.bio || "",
          interests: currentMember.interests || [],
          image: currentMember.image || null,
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

  const onSubmit = (data: z.infer<typeof profileSchema>) => {
    update({ fields: data, uid });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    uploadImage(file, {
      onSuccess: (url: string) => {
        setValue("image", url, { shouldDirty: true }); // set the URL and mark as dirty
      },
    });
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
              <Skeleton className="h-12 w-full rounded-md" />
            </form>
          </CardContent>
          <CardFooter className="flex flex-row gap-4 justify-end mt-4">
            <Skeleton className="h-12 w-24 rounded-md" />
            <Skeleton className="h-12 w-40 rounded-md" />
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
              {t("profileNotFoundTitle")}
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              {t("profileNotFoundDesc")}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => refetchCurrentMember()}
            >
              {t("retry")}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currentMember && !isLoadingCurrentMember) {
    return (
      <div className="flex flex-col items-center justify-center min-h-dvh pb-40 pt-12 bg-background rtl px-2 sm:px-4">
        <Card className="w-full max-w-3xl mx-auto border border-border bg-background text-foreground shadow-lg p-3 sm:p-6 md:p-10 flex flex-col gap-6 sm:gap-8">
          <CardHeader className="flex flex-col items-center gap-4 pb-4">
            <CardTitle className="text-xl sm:text-3xl font-extrabold text-destructive">
              {t("profileIncompleteTitle")}
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              {t("profileIncompleteDesc")}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                {t("profileIncompleteInfo")}
              </p>
            </div>
            <Button
              onClick={() => (window.location.href = "/complete-profile/1")}
              className="w-full max-w-xs"
              size="lg"
            >
              {t("completeProfile")}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const watchedImage = watch("image");
  const watchedAge = watch("age");

  return (
    <div className="min-h-dvh pb-40 pt-12 flex flex-col items-center justify-center bg-background rtl px-2 sm:px-4">
      <Card className="w-full max-w-2xl mx-auto border border-border bg-background text-foreground shadow-lg p-4 sm:p-8 flex flex-col gap-8">
        <CardHeader className="flex flex-col items-center gap-2 pb-2">
          <CardTitle className="text-2xl font-bold text-primary mt-2">
            {t("myProfile")}
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            {t("editProfileDesc")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8 pt-0">
          {/* Profile Pic */}
          <div className="flex flex-col items-center gap-2">
            <Avatar className="w-28 h-28 border-4 border-border shadow bg-background">
              {watchedImage || currentMember?.image ? (
                <AvatarImage
                  src={(watchedImage || currentMember?.image) ?? undefined}
                  alt={currentMember?.name || "profile"}
                />
              ) : (
                <AvatarFallback className="text-4xl text-primary bg-background">
                  {currentMember?.name
                    ? currentMember.name[0].toUpperCase()
                    : "?"}
                </AvatarFallback>
              )}
            </Avatar>
            <Button
              variant="outline"
              className="mt-2"
              onClick={() => fileInputRef.current?.click()}
            >
              {isPendingUploadImage ? t("uploadingAvatar") : t("changeAvatar")}
            </Button>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageChange}
            />
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
                  {t("name")}
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder={t("namePlaceholder")}
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
                  {t("age")}
                </Label>
                <Select
                  value={String(watchedAge)}
                  onValueChange={(v) => {
                    if (!v) return;
                    setValue("age", Number(v), { shouldDirty: true });
                  }}
                >
                  <SelectTrigger className="bg-background border border-input rounded-md px-4 py-2 text-base w-full">
                    <SelectValue placeholder={t("agePlaceholder")} />
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
                {t("bio")}
              </Label>
              <textarea
                id="bio"
                {...register("bio")}
                placeholder={t("bioPlaceholder")}
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
                {t("interests")}
              </Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {(watch("interests") || []).length === 0 ? (
                  <span className="text-muted-foreground text-base">
                    {t("noInterests")}
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
                {t("selectInterests")}
              </Button>
            </div>
            <Button
              type="submit"
              className="px-8 py-3 text-lg font-bold"
              disabled={isPendingUpdate || !isDirty}
            >
              {isPendingUpdate ? t("saving") : t("saveChanges")}
            </Button>
          </form>
          <CardFooter className="flex flex-row gap-4 justify-end mt-4 px-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => signOut()}
              disabled={isPendingSignOut}
              className="px-8 py-3 text-lg font-bold"
            >
              {isPendingSignOut ? t("signingOut") : t("signOut")}
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => setDeleteModalOpen(true)}
              disabled={isPendingDeleteMember}
              className="px-8 py-3 text-lg font-bold"
            >
              {t("deleteAccount")}
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
          <DeleteAccountModal
            open={deleteModalOpen}
            onOpenChange={setDeleteModalOpen}
            onConfirm={() => {
              deleteMember({ uid });
              setDeleteModalOpen(false);
            }}
            isPending={isPendingDeleteMember}
          />
        </CardContent>
      </Card>
    </div>
  );
}
