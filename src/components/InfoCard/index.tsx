import styles from "./styles.module.scss";

export function InfoCard() {
  return (
    <div className={styles.container}>
      <span className={styles.info}>
        <label>IP ADRESS</label>
        <p>192.212.174.101</p>
      </span>

      <span className={styles.info}>
        <label>LOCATION</label>
        <p>Brooklyn, NY 10001</p>
      </span>

      <span className={styles.info}>
        <label>TIMEZONE</label>
        <p>UTC -05:00</p>
      </span>

      <span className={styles.info}>
        <label>ISP</label>
        <p>SpaceX Starlink</p>
      </span>
    </div>
  );
}
