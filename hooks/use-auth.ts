import {
  deleteUser,
  getSession,
  signIn,
  signOut,
  signUp,
} from "@/services/auth/auth.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

type SignInInput = { email: string; password: string };
type ForgetPasswordInput = { email: string };
type ResetPasswordInput = {
  newPassword: string;
};

export default function useAuth() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const t = useTranslations("AuthToasts");
  const signUpWithPassword = useMutation({
    mutationKey: ["auth", "signUp"],
    mutationFn: ({ email, password }: SignInInput) => signUp(email, password),
    onError: () => toast.error(t("signupError")),
    onSuccess: () => {
      toast.success(t("signupSuccess"));
      router.push("/complete-profile/1");
    },
  });

  const signInWithPassword = useMutation({
    mutationKey: ["auth", "signIn"],
    mutationFn: ({ email, password }: SignInInput) => signIn(email, password),
    onError: () => {
      toast.error(t("loginError"));
    },
    onSuccess: () => {
      toast.success(t("loginSuccess"));
      router.push("/webapp/status");
    },
  });

  const signOutUser = useMutation({
    mutationKey: ["auth", "signOut"],
    mutationFn: signOut,
    onError: () => toast.error(t("logoutError")),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
      toast.success(t("logoutSuccess"));
      router.push("/");
    },
  });

  // const forgetPassword = useMutation({
  //   mutationKey: ["auth", "forgotPassword"],
  //   mutationFn: ({ email }: ForgetPasswordInput) => forgotPassword(email),
  //   onError: () => toast.error(t("forgotError")),
  //   onSuccess: () => toast.success(t("forgotSuccess")),
  // });

  // const resetUserPassword = useMutation({
  //   mutationKey: ["auth", "resetPassword"],
  //   mutationFn: ({ newPassword }: ResetPasswordInput) =>
  //     resetPassword(newPassword),
  //   onError: () => toast.error(t("resetError")),
  //   onSuccess: async () => {
  //     toast.success(t("resetSuccess"));
  //     await queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
  //     router.push("/auth/login");
  //   },
  // });

  const session = useQuery({
    queryKey: ["auth", "getSession"],
    queryFn: getSession,
  });

  const deleteUserMutation = useMutation({
    mutationKey: ["auth", "deleteUser"],
    mutationFn: deleteUser,
    onError: () => toast.error(t("deleteError")),
    onSuccess: () => {
      toast.success(t("deleteSuccess"));
      router.push("/");
    },
  });

  return {
    signUpWithPassword: signUpWithPassword.mutate,
    isPendingSignUpWithPassword: signUpWithPassword.isPending,

    signInWithPassword: signInWithPassword.mutate,
    isPendingSignInWithPassword: signInWithPassword.isPending,

    signOut: signOutUser.mutate,
    isPendingSignOut: signOutUser.isPending,

    // forgetPassword: forgetPassword.mutate,
    // isPendingForgetPassword: forgetPassword.isPending,

    // resetPassword: resetUserPassword.mutate,
    // isPendingResetPassword: resetUserPassword.isPending,

    session: session.data,
    isLoadingUserSession: session.isLoading,

    deleteUser: deleteUserMutation.mutate,
    isPendingDeleteUser: deleteUserMutation.isPending,
  };
}
