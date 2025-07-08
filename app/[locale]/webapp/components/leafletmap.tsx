"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { Drawer } from "@/components/ui/drawer";
import { PinDetailsDrawer } from "./pin-details-drawer";
import { Member } from "@/types/member";

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

const center = [35.8327, 50.9916];

function offsetMembers(members: Member[], offset = 0.0001) {
  // Group by lat/lng
  const grouped: Record<string, Member[]> = {};
  members.forEach((m) => {
    const key = `${m.lat || 0},${m.lng || 0}`;
    grouped[key] = grouped[key] || [];
    grouped[key].push(m);
  });
  // Fan out each group
  const result: (Member & { lat: number; lng: number })[] = [];
  Object.values(grouped).forEach((group) => {
    if (group.length === 1) {
      result.push({
        ...group[0],
        lat: group[0].lat || 0,
        lng: group[0].lng || 0,
      });
    } else {
      group.forEach((m, i) => {
        const angle = (2 * Math.PI * i) / group.length;
        result.push({
          ...m,
          lat: (m.lat || 0) + Math.cos(angle) * offset,
          lng: (m.lng || 0) + Math.sin(angle) * offset,
        });
      });
    }
  });
  return result;
}

export default function LeafletMap({ zoom = 13, members }: LeafletMapProps) {
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
