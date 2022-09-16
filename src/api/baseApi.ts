import HTTPTransport from '../utils/HTTPTransport';

export default abstract class BaseAPI {
  protected HTTPTransport: HTTPTransport;

  protected constructor(endpoint: string) {
    this.HTTPTransport = new HTTPTransport(endpoint);
  }

  public abstract create?(data: unknown): Promise<unknown>;

  public abstract read?(identifier?: string): Promise<unknown>;

  public abstract update?(identifier: string, data: unknown): Promise<unknown>;

  public abstract delete?(identifier: string): Promise<unknown>;
}