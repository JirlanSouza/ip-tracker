import { useState } from "react";
import styles from "./styles.module.scss";

interface IpInputProps {
  ipAdress: string;
  setIpAdress: (ip: string) => void;
}

export function IpInnput({ ipAdress, setIpAdress }: IpInputProps) {
  const [ipValue, setIpValue] = useState("");

  function handleIpAdress() {
    if (ipValue.length < 7) return;

    setIpAdress(ipValue);
  }

  return (
    <span className={styles.container}>
      <input value={ipValue} onChange={(event) => setIpValue(event.target.value)} />
      <button onClick={handleIpAdress} />
    </span>
  );
}
