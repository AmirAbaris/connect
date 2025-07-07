import {
  createMember,
  fetchCurrentMember,
  fetchMembers,
} from "@/services/member/member.api";
import { Member } from "@/types/member";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import useAuth from "./use-auth";
import { useEffect, useState } from "react";

export default function useMember() {
  const [uid, setUid] = useState<string | undefined>(undefined);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { session } = useAuth();

  useEffect(() => {
    const userId = session?.user?.id;
    setUid(userId);
  }, [session]);

  const members = useQuery({
    queryKey: ["member"],
    queryFn: fetchMembers,
  });

  const currentMember = useQuery({
    queryKey: ["member", uid],
    queryFn: () => fetchCurrentMember(uid as string),
    enabled: !!uid,
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

  return {
    members: members.data,
    isLoadingMembers: members.isLoading,

    addToMember: addMember.mutate,
    isAdding: addMember.isPending,

    currentMember: currentMember.data,
    isLoadingCurrentMember: currentMember.isLoading,
  };
}
