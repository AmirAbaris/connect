import { createMember, fetchMembers } from "@/services/member/member.api";
import { Member } from "@/types/member";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function useMember() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const members = useQuery({
    queryKey: ["member"],
    queryFn: fetchMembers,
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
    addToMember: addMember.mutateAsync,
    isAdding: addMember.isPending,
  };
}
