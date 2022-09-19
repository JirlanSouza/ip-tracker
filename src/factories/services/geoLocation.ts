import { FakeIpGeoLocationApi } from "../../services/api/data/fakeIpGeoLocationApi";
import { HttpClient } from "../../services/api/httpCliente";
import { IpGelocationService } from "../../services/IpGeolocation";

const httpClient = import.meta.env.PROD
  ? new HttpClient(import.meta.env.GELOCATION_API_BASE_URL)
  : new FakeIpGeoLocationApi();
const IpGeoLocationService = new IpGelocationService(httpClient, import.meta.env.GET_GELOCATION_API_PATH);

export { IpGeoLocationService };
