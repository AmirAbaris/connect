import { signIn, signOut, signUp } from "@/services/auth/auth.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface SignInInput {
  email: string;
  password: string;
}

export default function useAuth() {
  const signUpWithPassword = useMutation({
    mutationKey: ["user"],
    mutationFn: ({ email, password }: SignInInput) => signUp(email, password),
    onError: () => {
      toast.error("ثبت نام ناموفق بود. لطفاً ایمیل و رمز عبور را بررسی کنید.");
    },
    onSuccess: () => {
      toast.success("ثبت نام با موفقیت انجام شد.");
    },
  });

  const signInWithPassword = useMutation({
    mutationKey: ["user"],
    mutationFn: ({ email, password }: SignInInput) => signIn(email, password),
    onError: () => {
      toast.error("ورود ناموفق بود. لطفاً ایمیل و رمز عبور را بررسی کنید.");
    },
    onSuccess: () => {
      toast.success("ورود با موفقیت انجام شد.");
    },
  });

  const signOutUser = useMutation({
    mutationKey: ["user"],
    mutationFn: signOut,
    onError: () => {
      toast.error("خروج ناموفق بود. لطفاً دوباره تلاش کنید.");
    },
    onSuccess: () => {
      toast.success("خروج با موفقیت انجام شد.");
    },
  });

  return {
    signUpWithPassword: signUpWithPassword.mutateAsync,
    isPendingSignUpWithPassword: signUpWithPassword.isPending,

    signInWithPassword: signInWithPassword.mutateAsync,
    isPendingSignInWithPassword: signInWithPassword.isPending,

    signOut: signOutUser.mutateAsync,
    isPendingSignOut: signOutUser.isPending,
  };
}
