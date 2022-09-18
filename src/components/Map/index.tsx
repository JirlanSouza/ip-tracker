import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";

import styles from "./styles.module.scss";
import iconSvg from "../../assets/images/icon-location.svg";
const icon = new Icon({ iconUrl: iconSvg });

export function Map() {
  const position: LatLngExpression = [51.505, -0.09];
  return (
    <MapContainer className={styles.container} center={position} zoom={12} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
