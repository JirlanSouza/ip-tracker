import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

import { LocationMarker } from "../LocationMarker";
import styles from "./styles.module.scss";

interface MapProps {
  ip?: string;
  location?: {
    description: string;
    lat: number;
    lng: number;
  };
}

export function Map({ ip, location }: MapProps) {
  function getPosition(location?: { lat: number; lng: number }): LatLngExpression {
    return [location?.lat ?? 0, location?.lng ?? 0];
  }
  return (
    <MapContainer className={styles.container} center={getPosition(location)} zoom={12} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker ip={ip} location={location} />
    </MapContainer>
  );
}
