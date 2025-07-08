"use client";

import { Skeleton } from "@/components/ui/skeleton";
import useMember from "@/hooks/use-member";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("../components/leafletmap"), {
  ssr: false,
});

export default function ExplorePage() {
  const { members } = useMember();

  const visibleMembers = members?.filter((item) => item.status);

  if (!members)
    return (
      <div className="flex flex-col items-center justify-center h-dvh">
        <h1>اوپس</h1>
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
