"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

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
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "100%", zIndex: 1 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {/* Use the custom icon here */}
      <Marker position={center} icon={customIcon}>
        <Popup>Your Marker Location</Popup>
      </Marker>
    </MapContainer>
  );
}
