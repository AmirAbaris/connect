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

export default function LeafletMap({ zoom = 13, members }: LeafletMapProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
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

        {members?.map((member) => (
          <Marker
            key={member.id}
            position={[member.lat || 0, member.lng || 0]}
            icon={customIcon}
            eventHandlers={{
              click: () => setDrawerOpen(true),
            }}
          >
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <PinDetailsDrawer data={member} />
            </Drawer>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
