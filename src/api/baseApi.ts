import HTTPTransport from '../utils/HTTPTransport';

export default abstract class BaseAPI {
  protected HTTPTransport: HTTPTransport;

  protected constructor(endpoint: string) {
    this.HTTPTransport = new HTTPTransport(endpoint);
  }
}