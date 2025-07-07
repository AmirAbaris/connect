import {
  createMember,
  fetchCurrentMember,
  fetchMembers,
  updateMember,
} from "@/services/member/member.api";
import { Member } from "@/types/member";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import useAuth from "./use-auth";

export default function useMember() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { session } = useAuth();
  const uid = session?.user?.id;
  const isReady = !!uid;

  const members = useQuery({
    queryKey: ["member"],
    queryFn: fetchMembers,
  });

  const currentMember = useQuery({
    queryKey: ["member", uid],
    queryFn: () => fetchCurrentMember(uid as string),
    enabled: isReady,
  });

  const addMember = useMutation({
    mutationKey: ["member"],
    mutationFn: ({
      newMember,
      uid,
    }: {
      newMember: Omit<Member, "id" | "uid">;
      uid: string | undefined;
    }) => createMember(newMember, uid),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["member"] });
      toast.success("عضو با موفقیت اضافه شد");
      router.push("/webapp/status");
    },
    onError: () => {
      toast.error("افزودن عضو با خطا مواجه شد");
    },
  });

  const update = useMutation({
    mutationKey: ["member"],
    mutationFn: ({
      fields,
      uid,
    }: {
      fields: Partial<Omit<Member, "id" | "uid">>;
      uid: string | undefined;
    }) => updateMember(fields, uid),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["member"] });
      toast.success("عضو با موفقیت بروزرسانی شد");
      router.push("/webapp/status");
    },

    onError: () => {
      toast.error("بروزرسانی عضو با خطا مواجه شد");
    },
  });

  return {
    members: members.data,
    isLoadingMembers: members.isLoading,

    addToMember: addMember.mutate,
    isAdding: addMember.isPending,

    currentMember: currentMember.data,
    isLoadingCurrentMember: currentMember.isLoading,
    isErrorCurrentMember: currentMember.isError,
    refetchCurrentMember: currentMember.refetch,
    isReady,

    update: update.mutate,
    isPendingUpdate: update.isPending,
  };
}
