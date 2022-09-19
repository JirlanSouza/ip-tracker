import { InfoCard } from "../../components/InfoCard";
import { IpInnput } from "../../components/IpInput";
import { Map } from "../../components/Map";
import { useIpGeoLocation } from "../../hooks/geoLocation/useGeoLocation";
import styles from "./styles.module.scss";

export function Home() {
  const { loading, error, ipAdress, ipGelocationInformation, setIpAdress } = useIpGeoLocation();

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>IP Adredd Tracker</h1>
        <IpInnput ipAdress={ipAdress} setIpAdress={setIpAdress} />
        <InfoCard />
      </div>
      <Map ip={ipGelocationInformation?.ip} location={ipGelocationInformation?.location} />
    </div>
  );
}
