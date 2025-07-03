import {
  forgotPassword,
  resetPassword,
  signIn,
  signOut,
  signUp,
} from "@/services/auth/auth.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type SignInInput = { email: string; password: string };
type ForgetPasswordInput = { email: string };
type ResetPasswordInput = {
  newPassword: string;
  accessToken: string | undefined;
};

export default function useAuth() {
  const queryClient = useQueryClient();

  const signUpWithPassword = useMutation({
    mutationKey: ["auth", "signUp"],
    mutationFn: ({ email, password }: SignInInput) => signUp(email, password),
    onError: () =>
      toast.error("ثبت‌نام ناموفق بود. لطفاً ایمیل و رمز عبور را بررسی کنید."),
    onSuccess: () =>
      toast.success(
        "ثبت‌نام انجام شد. لطفاً ایمیل خود را برای تأیید بررسی کنید."
      ),
  });

  const signInWithPassword = useMutation({
    mutationKey: ["auth", "signIn"],
    mutationFn: ({ email, password }: SignInInput) => signIn(email, password),
    onError: () =>
      toast.error("ورود ناموفق بود. لطفاً ایمیل و رمز عبور را بررسی کنید."),
    onSuccess: () => {
      toast.success("ورود موفقیت‌آمیز بود.");
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
  });

  const signOutUser = useMutation({
    mutationKey: ["auth", "signOut"],
    mutationFn: signOut,
    onError: () => toast.error("خروج ناموفق بود. لطفاً دوباره تلاش کنید."),
    onSuccess: () => {
      toast.success("خروج موفقیت‌آمیز بود.");
      queryClient.invalidateQueries();
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
    mutationFn: ({ newPassword, accessToken }: ResetPasswordInput) =>
      resetPassword(newPassword, accessToken),
    onError: () =>
      toast.error("تغییر رمز عبور ناموفق بود. لطفاً دوباره تلاش کنید."),
    onSuccess: () => {
      toast.success("رمز عبور با موفقیت تغییر کرد.");
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
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
  };
}
