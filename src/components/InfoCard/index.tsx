import styles from "./styles.module.scss";

export function InfoCard() {
  return (
    <div className={styles.container}>
      <span>
        <label>IP ADRESS</label>
        <p>192.212.174.101</p>
      </span>

      <span>
        <label>LOCATION</label>
        <p>Brooklyn, NY 10001</p>
      </span>

      <span>
        <label>TIMEZONE</label>
        <p>UTC -05:00</p>
      </span>

      <span>
        <label>ISP</label>
        <p>SpaceX Starlink</p>
      </span>
    </div>
  );
}
