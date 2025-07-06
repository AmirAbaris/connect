"use client";

import { ReactNode } from "react";
import ReactQueryProvider from "./react-query-provider";
import { MemberStoreProvider } from "./member-store-provider";

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MemberStoreProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </MemberStoreProvider>
  );
};
