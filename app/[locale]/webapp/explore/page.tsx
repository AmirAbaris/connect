"use client";

import useMember from "@/hooks/use-member";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";
import { LatLngExpression } from "leaflet";

const LeafletMap = dynamic(() => import("../components/leafletmap"), {
  ssr: false,
});

export default function ExplorePage() {
  const { members, isLoadingMembers, currentMember, isLoadingCurrentMember } =
    useMember();

  const visibleMembers = members?.filter((item) => item.status);
  const centerLocation =
    currentMember?.lat != null && currentMember?.lng != null
      ? [currentMember.lat, currentMember.lng]
      : [35.8327, 50.9916]; // hard coded fallback location

  if (isLoadingMembers || isLoadingCurrentMember)
    return (
      <div className="flex items-center justify-center h-dvh w-full">
        <Loader className="animate-spin text-primary" />
      </div>
    );

  return (
    <div style={{ height: "100vh" }}>
      <LeafletMap
        center={centerLocation as LatLngExpression}
        zoom={14}
        members={visibleMembers || []}
      />
    </div>
  );
}
