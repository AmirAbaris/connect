"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("../components/leafletmap"), {
  ssr: false,
});

export default function ExplorePage() {
  return (
    <div style={{ height: "100vh" }}>
      <LeafletMap center={[51.505, -0.09]} zoom={13} />
    </div>
  );
}
