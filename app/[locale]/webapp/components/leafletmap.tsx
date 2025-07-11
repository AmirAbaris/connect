"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { Drawer } from "@/components/ui/drawer";
import { PinDetailsDrawer } from "./pin-details-drawer";
import { Member } from "@/types/member";
import { offsetMembers } from "@/lib/utils";

interface LeafletMapProps {
  center: LatLngExpression;
  zoom?: number;
  members: Member[];
}

const customIcon = L.icon({
  iconUrl: "/map-icon/custom-pin.svg",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
  shadowUrl: undefined,
});

export default function LeafletMap({
  zoom = 13,
  members,
  center,
}: LeafletMapProps) {
  const [drawerOpenId, setDrawerOpenId] = useState<string | null>(null);
  const offsettedMembers = offsetMembers(members);
  return (
    <>
      <MapContainer
        center={center as LatLngExpression}
        zoom={zoom}
        style={{ height: "100%", width: "100%", zIndex: 1 }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {offsettedMembers.map((member) => (
          <Marker
            key={member.id}
            position={[member.lat, member.lng]}
            icon={customIcon}
            eventHandlers={{
              click: () => setDrawerOpenId(member.id),
            }}
          >
            <Drawer
              open={drawerOpenId === member.id}
              onOpenChange={(open) => !open && setDrawerOpenId(null)}
            >
              <PinDetailsDrawer data={member} />
            </Drawer>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
