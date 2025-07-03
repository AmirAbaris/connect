import { signIn, signOut } from "@/services/auth/auth.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface SignInInput {
  email: string;
  password: string;
}

export default function useAuth() {
  const signInWithPassword = useMutation({
    mutationKey: ["user"],
    mutationFn: ({ email, password }: SignInInput) => signIn(email, password),
    onError: (error: any) => {
      toast.error("ورود ناموفق بود. لطفاً ایمیل و رمز عبور را بررسی کنید.");
    },
  });

  const signOutUser = useMutation({
    mutationKey: ["user"],
    mutationFn: signOut,
    onError: (error: any) => {
      toast.error("خروج ناموفق بود. لطفاً دوباره تلاش کنید.");
    },
  });

  return {
    signInWithPassword: signInWithPassword.mutateAsync,
    isPendingSignInWithPassword: signInWithPassword.isPending,

    signOut: signOutUser.mutateAsync,
    isPendingSignOut: signOutUser.isPending,
  };
}
