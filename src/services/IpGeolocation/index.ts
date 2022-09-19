import { IHttpClient } from "../api/IHttpCliente";
import { IpGelocationInformation } from "./IpGelocationInformation";

export class IpGelocationService {
  load = false;
  error = false;

  constructor(private api: IHttpClient, private apiPath: string) {}

  async getLocation(ip: string): Promise<IpGelocationInformation | Error> {
    const path = `${this.apiPath}${ip}`;

    return await this.api.get<IpGelocationInformation | Error>(path);
  }
}
