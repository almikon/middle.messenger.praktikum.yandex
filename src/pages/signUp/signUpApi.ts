import HTTPTransport from '../../utils/HTTPTransport';

const SignUpApiInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2');

export class SignUpApi{
    signUp(data: Record<string, string>) {
        const options: Record<string, any> = {}
        options.data = data
        options.headers = {
            'content-type': 'application/json'
        }
        
        const response = SignUpApiInstance.post('/auth/signup',options);
        return response
    }
}