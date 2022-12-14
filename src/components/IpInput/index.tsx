import { FormEvent, useState } from "react";
import styles from "./styles.module.scss";

interface IpInputProps {
  ipAdress: string;
  setIpAdress: (ip: string) => void;
}

export function IpInnput({ ipAdress, setIpAdress }: IpInputProps) {
  const [ipValue, setIpValue] = useState("");

  function handleIpAdress(event: FormEvent) {
    event.preventDefault();
    if (ipValue.length < 7) return;

    setIpAdress(ipValue);
    setIpValue("");
  }

  return (
    <form className={styles.container} onSubmit={handleIpAdress}>
      <input
        value={ipValue}
        onChange={(event) => setIpValue(event.target.value)}
        placeholder="Serach for any IP address or domain"
      />
      <button type="submit" />
    </form>
  );
}
