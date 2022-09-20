import queryStringify from './QueryStringify'

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

export default class HTTPTransport {
    static YA_URL = 'https://ya-praktikum.tech/api/v2'
    protected baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = HTTPTransport.YA_URL + baseUrl
    }

    get<Response>(url: string, options: Record<any, any> = {}): Promise<Response> {

        url += queryStringify(options.data)
        return this.request<Response>(this.baseUrl + url, { ...options, method: METHODS.GET }, options.timeout)
    };
    put<Response>(url: string, options: Record<any, any> = {}): Promise<Response> {

        return this.request(this.baseUrl + url, { ...options, method: METHODS.PUT }, options.timeout)
    };
    post<Response>(url: string, options: Record<any, any> = {}): Promise<Response> {

        return this.request(this.baseUrl + url, { ...options, method: METHODS.POST }, options.timeout)
    };
    delete<Response>(url: string, options: Record<any, any> = {}): Promise<Response> {

        return this.request(this.baseUrl + url, { ...options, method: METHODS.DELETE }, options.timeout)
    };

    private request<Response>(url: string, options: Record<any, any>, timeout = 5000): Promise<Response> {

        const { data, method } = options;
        const JSONdata = JSON.stringify(data)

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.open(method, url)
            if (options.type) {

            } else {
                xhr.setRequestHeader('content-type', 'application/json')
            }


            xhr.onabort = reject
            xhr.onerror = reject
            xhr.timeout = timeout
            xhr.ontimeout = reject

            xhr.withCredentials = true
            xhr.responseType = 'json'

            if (method === METHODS.GET) {
                xhr.send();
            } else if (options.type) {
                xhr.send(data)
            }
            else {
                xhr.send(JSONdata)
            }

            xhr.onload = function () {
                resolve(xhr.response)
            };

        })
    }
}
