import { createStore } from "zustand/vanilla";
import { Member } from "./types/member";

export type MemberState = {
  member: Member;
};

export type MemberActions = {
  addMember: (member: Member) => void;
  clearMember: () => void;
};

export type MemberStoreType = MemberState & MemberActions;

const defaultMember: Member = {
  id: "",
  uid: "",
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

    addMember: (member) => set(() => ({ member })),

    clearMember: () => set(() => ({ member: defaultMember })),
  }));
};
