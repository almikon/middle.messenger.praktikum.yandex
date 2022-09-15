import queryStringify from './QueryStringify'

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

export default class HTTPTransport {
    baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }
    get = (url: string, options: Record<any, any> = {}) => {

        url += queryStringify(options.data)
        return this.request(this.baseUrl + url, { ...options, method: METHODS.GET }, options.timeout)
    };
    put = (url: string, options: Record<any, any> = {}) => {

        return this.request(this.baseUrl + url, { ...options, method: METHODS.PUT }, options.timeout)
    };
    post = (url: string, options: Record<any, any> = {}) => {

        return this.request(this.baseUrl + url, { ...options, method: METHODS.POST }, options.timeout)
    };
    delete = (url: string, options: Record<any, any> = {}) => {

        return this.request(this.baseUrl + url, { ...options, method: METHODS.DELETE }, options.timeout)
    };


    request = (url: string, options: Record<any, any>, timeout = 5000) => {

        const { headers, data, method } = options;
        const JSONdata = JSON.stringify(data)
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.open(method, url)

            for (let header in headers) {
                xhr.setRequestHeader(header, headers[header])
            }


            xhr.onabort = reject
            xhr.onerror = reject
            xhr.timeout = timeout
            xhr.ontimeout = reject

            if (method === METHODS.GET) {
                xhr.send();
            } else {
                xhr.send(JSONdata)
            }

            xhr.onload = function () {
                resolve(xhr.response)
            };

        })
    }
}