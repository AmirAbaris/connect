import { createStore } from "zustand/vanilla";
import { Member } from "./types/member";

export type MemberState = {
  member: Partial<Member> & { imageFile?: File | null };
};

export type MemberActions = {
  addMember: (member: Partial<Member> & { imageFile?: File | null }) => void;
  clearMember: () => void;
};

export type MemberStoreType = MemberState & MemberActions;

const defaultMember: Partial<Member> & { imageFile?: File | null } = {
  name: "",
  age: 0,
  bio: null,
  image: null,
  interests: [],
  location: null,
  imageFile: null,
};

export const createMemberStore = (
  initState?: Partial<MemberState> & { imageFile?: File | null }
) => {
  return createStore<MemberStoreType>()((set) => ({
    member: initState?.member ?? defaultMember,

    addMember: (newData) =>
      set((state) => ({
        member: {
          ...state.member,
          ...newData,
        },
      })),

    clearMember: () => set(() => ({ member: defaultMember })),
  }));
};
