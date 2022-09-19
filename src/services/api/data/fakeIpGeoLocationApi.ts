import { IHttpClient } from "../IHttpCliente";

import data from "./data.json";

export class FakeIpGeoLocationApi implements IHttpClient {
  get<T>(path: string): Promise<T | Error> {
    return new Promise((resolve) => setTimeout(() => resolve(data as T), 1000));
  }
}
