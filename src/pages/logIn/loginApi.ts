import HTTPTransport from '../../utils/HTTPTransport'

const LoginApiInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2')

export class LoginApi{
    async logIn(data: Record<string, string>) {
        const options: Record<string, any> = {}
        options.data = data
        data['login']="megaMEGAmegaMEGa"
        data['password']="sjhdbckhubdkehbchwekebhjcbekjh"
        
        options.headers = {
            'content-type': 'application/json'
        }
        
        return await LoginApiInstance.post('/auth/signin',options)
        .then(r=>{return r.text()})
    }
}
