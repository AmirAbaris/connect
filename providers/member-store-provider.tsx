"use client";

import { createMemberStore, MemberStoreType } from "@/store";
import { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

export type MemberStoreApi = ReturnType<typeof createMemberStore>;

export const MemberStoreContext = createContext<MemberStoreApi | undefined>(
  undefined
);

export type MemberStoreProviderProps = {
  children: ReactNode;
};

export const MemberStoreProvider = ({ children }: MemberStoreProviderProps) => {
  const storeRef = useRef<MemberStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createMemberStore();
  }

  return (
    <MemberStoreContext.Provider value={storeRef.current}>
      {children}
    </MemberStoreContext.Provider>
  );
};

export const useMemberStore = <T,>(
  selector: (store: MemberStoreType) => T
): T => {
  const memberStoreContext = useContext(MemberStoreContext);

  if (!memberStoreContext) {
    throw new Error(`useMemberStore must be used within MemberStoreProvider`);
  }

  return useStore(memberStoreContext, selector);
};
