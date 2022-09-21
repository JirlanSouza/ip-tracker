import { FakeIpGeoLocationApi } from "../../services/api/data/fakeIpGeoLocationApi";
import { HttpClient } from "../../services/api/httpCliente";
import { IpGeolocationService } from "../../services/IpGeolocation";

console.log(import.meta.env);
const httpClient = import.meta.env.PROD
  ? new HttpClient(import.meta.env.VITE_GEOLOCATION_API_BASE_URL)
  : new FakeIpGeoLocationApi();
const ipGeoLocationService = new IpGeolocationService(httpClient, import.meta.env.VITE_GEOLOCATION_API_PATH);

console.log(ipGeoLocationService);

export { ipGeoLocationService };
