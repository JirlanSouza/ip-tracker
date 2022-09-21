import { useEffect, useState } from "react";

import { ipGeoLocationService } from "../../factories/services/geoLocation";

export type IpGelocationInfo = {
  ip: string;
  location: {
    description: string;
    lat: number;
    lng: number;
  };
  timeZone: string;
  isp: string;
};

export function useIpGeoLocation() {
  const [{ loading, error }, setStatus] = useState({ loading: false, error: false });
  const [ipAdress, setIpAdress] = useState("");
  const [ipGelocationInformation, setIpGelocationInformation] = useState<IpGelocationInfo>();

  useEffect(() => {
    (async () => {
      setStatus({ loading: true, error: false });
      const getGelocationResult = await ipGeoLocationService.getLocation(ipAdress);

      if (getGelocationResult instanceof Error) {
        setStatus({ loading: false, error: true });
        return;
      }

      const locationDescription = `${getGelocationResult.location.city}, ${getGelocationResult.location.region} - ${getGelocationResult.location.country}`;

      setIpGelocationInformation({
        ip: getGelocationResult.ip,
        location: {
          description: locationDescription,
          lat: getGelocationResult.location.lat + Math.random(),
          lng: getGelocationResult.location.lng + Math.random(),
        },
        timeZone: getGelocationResult.location.timezone,
        isp: getGelocationResult.isp,
      });

      setStatus({ loading: false, error: false });
    })();
  }, [ipAdress]);

  return {
    loading,
    error,
    ipAdress,
    ipGelocationInformation,
    setIpAdress,
  };
}
