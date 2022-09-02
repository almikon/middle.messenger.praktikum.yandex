const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};
function queryStringify(data: Record<string, string>) {
    let res = '?';
    for (let key in data) {
        res += key + '='
        res += data[key].toString()
        res += '&'
    }
    return (res.substring(0, res.length - 1))
}
class HTTPTransport {
    get = (url: string, options: Record<any, any> = {}) => {

        return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
    };
    put = (url: string, options: Record<any, any> = {}) => {

        return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
    };
    post = (url: string, options: Record<any, any> = {}) => {

        return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
    };
    delete = (url: string, options: Record<any, any> = {}) => {

        return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
    };


    request = (url: string, options: Record<any, any>, timeout = 5000) => {

        const { headers, data, method } = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            if (method === METHODS.GET) {
                let urlWithParam = url + queryStringify(data)
                xhr.open(method, urlWithParam);
            } else {
                xhr.open(method, url);
            }
            for (let header in headers) {
                xhr.setRequestHeader(header, headers[header])
            }

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}