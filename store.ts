import { createStore } from "zustand/vanilla";
import { Member } from "./types/member";

export type MemberState = {
  member: Partial<Member>;
};

export type MemberActions = {
  addMember: (member: Partial<Member>) => void;
  clearMember: () => void;
};

export type MemberStoreType = MemberState & MemberActions;

const defaultMember: Partial<Member> = {
  name: "",
  age: 0,
  bio: null,
  image: null,
  interests: [],
  location: null,
};

export const createMemberStore = (initState?: Partial<MemberState>) => {
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
