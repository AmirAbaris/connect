import {
  createMember,
  fetchCurrentMember,
  fetchMembers,
  updateMember,
  uploadMemberImage,
} from "@/services/member/member.api";
import { Member } from "@/types/member";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import useAuth from "./use-auth";
import { useTranslations } from "next-intl";

export default function useMember() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { session } = useAuth();
  const t = useTranslations("MemberToasts");
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
      image,
    }: {
      newMember: Omit<Member, "id" | "uid">;
      uid: string | undefined;
      image: File | null;
    }) => createMember(newMember, uid, image),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["member"] });
      toast.success(t("addSuccess"));
      router.push("/webapp/status");
    },
    onError: () => {
      toast.error(t("addError"));
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
      toast.success(t("updateSuccess"));
    },

    onError: () => {
      toast.error(t("updateError"));
    },
  });

  const uploadImage = useMutation({
    mutationKey: ["member"],
    mutationFn: (image: File) => uploadMemberImage(image, uid),
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

    uploadImage: uploadImage.mutate,
    isPendingUploadImage: uploadImage.isPending,
  };
}
