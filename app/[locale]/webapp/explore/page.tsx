"use client";

import useMember from "@/hooks/use-member";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";

const LeafletMap = dynamic(() => import("../components/leafletmap"), {
  ssr: false,
});

export default function ExplorePage() {
  const { members, isLoadingMembers } = useMember();

  const visibleMembers = members?.filter((item) => item.status);

  if (isLoadingMembers)
    return (
      <div className="flex items-center justify-center h-dvh w-full">
        <Loader className="animate-spin text-primary" />
      </div>
    );

  return (
    <div style={{ height: "100vh" }}>
      <LeafletMap
        center={[35.8327, 50.9916]}
        zoom={13}
        members={visibleMembers || []}
      />
    </div>
  );
}
