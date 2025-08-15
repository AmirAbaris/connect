
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { getSession } from "@/app/data/auth/get-session";
import { ApiResponse } from "@/types/api-res";
import { signOut } from "@/app/data/auth/sign-out";

export default function useAuth() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const t = useTranslations("AuthToasts");

  const signOutUser = useMutation({
    mutationKey: ["auth", "signOut"],
    mutationFn: signOut,
    onSuccess: async (res) => {
      if (!res.success) {
        toast.error(res.error || "Something went wrong");
        return;
      }
      
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
  mutationFn: async (uid: string) => {
    const res = await fetch("/api/delete-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid }),
    })

    const data: ApiResponse<null> = await res.json();
    return data;
  },
  onSuccess: async (res) => {
    if (!res.success) {
      toast.error(t("deleteError"))
    }
    toast.success(t("deleteSuccess"));
    router.push("/");
  },
});

  return {
    signOut: signOutUser.mutate,
    isPendingSignOut: signOutUser.isPending,

    session: session.data?.data,
    isLoadingUserSession: session.isLoading,

    deleteUser: deleteUserMutation.mutate,
    isPendingDeleteUser: deleteUserMutation.isPending,
  };
}
