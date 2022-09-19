export interface IHttpClient {
  get<T>(path: string): Promise<T | Error>;
}
