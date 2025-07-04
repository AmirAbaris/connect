"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("../components/leafletmap"), {
  ssr: false,
});

export default function ExplorePage() {
  return (
    <div style={{ height: "100vh" }}>
      <LeafletMap center={[35.8327, 50.9916]} zoom={13} />
    </div>
  );
}
