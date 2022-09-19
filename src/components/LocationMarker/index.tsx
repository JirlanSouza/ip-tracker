import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";

import iconSvg from "../../assets/images/icon-location.svg";
const icon = new Icon({ iconUrl: iconSvg });

interface MapProps {
  ip?: string;
  location?: {
    description: string;
    lat: number;
    lng: number;
  };
}

export function LocationMarker({ ip, location }: MapProps) {
  const map = useMap();

  useEffect(() => {
    map.panTo(getPosition(location));
  }, [location]);

  function getPosition(location?: { lat: number; lng: number }): LatLngExpression {
    return [location?.lat ?? 0, location?.lng ?? 0];
  }

  return (
    <Marker position={getPosition(location)} icon={icon}>
      <Popup>
        {ip} <br /> {location?.description}
      </Popup>
    </Marker>
  );
}
