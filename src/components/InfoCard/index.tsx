import styles from "./styles.module.scss";

interface InfoCardProps {
  ip?: string;
  locationDescription?: string;
  timeZone?: string;
  isp?: string;
}

export function InfoCard({ ip, locationDescription, timeZone, isp }: InfoCardProps) {
  return (
    <div className={styles.container}>
      <span className={styles.info}>
        <label>IP ADRESS</label>
        <p>{ip}</p>
      </span>

      <span className={styles.info}>
        <label>LOCATION</label>
        <p>{locationDescription}</p>
      </span>

      <span className={styles.info}>
        <label>TIMEZONE</label>
        <p>{timeZone}</p>
      </span>

      <span className={styles.info}>
        <label>ISP</label>
        <p>{isp}</p>
      </span>
    </div>
  );
}
