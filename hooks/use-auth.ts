import {
  forgotPassword,
  getSession,
  resetPassword,
  signIn,
  signOut,
  signUp,
} from "@/services/auth/auth.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { redirect } from "next/navigation";

type SignInInput = { email: string; password: string };
type ForgetPasswordInput = { email: string };
type ResetPasswordInput = {
  newPassword: string;
};

export default function useAuth() {
  const queryClient = useQueryClient();

  const signUpWithPassword = useMutation({
    mutationKey: ["auth", "signUp"],
    mutationFn: ({ email, password }: SignInInput) => signUp(email, password),
    onError: () =>
      toast.error("ثبت‌نام ناموفق بود. لطفاً ایمیل و رمز عبور را بررسی کنید."),
    onSuccess: () => {
      toast.success(
        "ثبت‌نام انجام شد. لطفاً ایمیل خود را برای تأیید بررسی کنید."
      );
      redirect("/webapp/status");
    },
  });

  const signInWithPassword = useMutation({
    mutationKey: ["auth", "signIn"],
    mutationFn: ({ email, password }: SignInInput) => signIn(email, password),
    onError: () => {
      toast.error("ورود ناموفق بود. لطفاً ایمیل و رمز عبور را بررسی کنید.");
    },
    onSuccess: () => {
      toast.success("ورود موفقیت‌آمیز بود.");
      redirect("/webapp/status");
    },
  });

  const signOutUser = useMutation({
    mutationKey: ["auth", "signOut"],
    mutationFn: signOut,
    onError: () => toast.error("خروج ناموفق بود. لطفاً دوباره تلاش کنید."),
    onSuccess: async () => {
      toast.success("خروج موفقیت‌آمیز بود.");
      await queryClient.invalidateQueries();
      redirect("/");
    },
  });

  const forgetPassword = useMutation({
    mutationKey: ["auth", "forgotPassword"],
    mutationFn: ({ email }: ForgetPasswordInput) => forgotPassword(email),
    onError: () =>
      toast.error("ارسال ایمیل بازیابی ناموفق بود. لطفاً دوباره تلاش کنید."),
    onSuccess: () =>
      toast.success("ایمیل بازیابی ارسال شد. لطفاً ایمیل خود را بررسی کنید."),
  });

  const resetUserPassword = useMutation({
    mutationKey: ["auth", "resetPassword"],
    mutationFn: ({ newPassword }: ResetPasswordInput) =>
      resetPassword(newPassword),
    onError: () =>
      toast.error("تغییر رمز عبور ناموفق بود. لطفاً دوباره تلاش کنید."),
    onSuccess: async () => {
      toast.success("رمز عبور با موفقیت تغییر کرد.");
      await queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
      redirect("/auth/login");
    },
  });

  const getUserSession = useMutation({
    mutationKey: ["auth", "getSession"],
    mutationFn: getSession,
  });

  return {
    signUpWithPassword: signUpWithPassword.mutateAsync,
    isPendingSignUpWithPassword: signUpWithPassword.isPending,

    signInWithPassword: signInWithPassword.mutateAsync,
    isPendingSignInWithPassword: signInWithPassword.isPending,

    signOut: signOutUser.mutateAsync,
    isPendingSignOut: signOutUser.isPending,

    forgetPassword: forgetPassword.mutateAsync,
    isPendingForgetPassword: forgetPassword.isPending,

    resetPassword: resetUserPassword.mutateAsync,
    isPendingResetPassword: resetUserPassword.isPending,

    getUserSession: getUserSession.mutateAsync,
    isPendingGetUserSession: getUserSession.isPending,
  };
}
