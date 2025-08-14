
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { signUp, signIn } from "@/app/data/auth/actions";
import { deleteUser } from "@/app/data/auth/delete-user";
import { getSession } from "@/app/data/auth/get-session";
import { signOut } from "@/app/data/auth/sign-out";

type SignInInput = { email: string; password: string };

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

    session: session.data,
    isLoadingUserSession: session.isLoading,

    deleteUser: deleteUserMutation.mutate,
    isPendingDeleteUser: deleteUserMutation.isPending,
  };
}
