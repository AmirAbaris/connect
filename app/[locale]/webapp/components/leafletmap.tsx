"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { Drawer } from "@/components/ui/drawer";
import { PinDetailsDrawer } from "./pin-details-drawer";

interface LeafletMapProps {
  center: LatLngExpression;
  zoom?: number;
}

const customIcon = L.icon({
  iconUrl: "/map-icon/custom-pin.svg",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
  shadowUrl: undefined,
});

export default function LeafletMap({ center, zoom = 13 }: LeafletMapProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%", zIndex: 1 }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {/* Use the custom icon here */}
        <Marker
          position={center}
          icon={customIcon}
          eventHandlers={{
            click: () => setDrawerOpen(true),
          }}
        >
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <PinDetailsDrawer />
          </Drawer>
        </Marker>
      </MapContainer>
    </>
  );
}
