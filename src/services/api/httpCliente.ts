import { Axios } from "axios";
import { IHttpClient } from "./IHttpCliente";

export class HttpClient implements IHttpClient {
  private httpClient: Axios;
  constructor(baseUrl: string) {
    this.httpClient = new Axios({ baseURL: baseUrl });
  }

  async get<T>(path: string): Promise<T | Error> {
    try {
      const response = await this.httpClient.get<T>(path);
      if (typeof response.data === "string") {
        response.data = JSON.parse(response.data);
      }

      return response.data;
    } catch (err) {
      return err as Error;
    }
  }
}
