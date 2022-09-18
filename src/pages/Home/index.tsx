import { InfoCard } from "../../components/InfoCard";
import { IpInnput } from "../../components/IpInput";
import { Map } from "../../components/Map";
import styles from "./styles.module.scss";

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>IP Adredd Tracker</h1>
        <IpInnput />
        <InfoCard />
      </div>
      <Map />
    </div>
  );
}
