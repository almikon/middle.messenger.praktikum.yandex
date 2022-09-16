import HTTPTransport from '../../utils/HTTPTransport'

const LoginApiInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2')

export class LoginApi {
    async logIn(data: Record<string, string>) {
        const options: Record<string, any> = {}
        options.data = data

        options.headers = {
            'content-type': 'application/json'
        }


        return await LoginApiInstance.post('/auth/signin', options).then(response => {return response})
    }
}
