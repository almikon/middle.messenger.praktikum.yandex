import BaseAPI from './baseApi'

export interface logInData{
    login:string
    password:string
}

export interface SignupData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
  }

export interface User {
    id: number;
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
    avatar: string;
    }

class UserApi extends BaseAPI {
    constructor(){
        super('/auth')
    }

    logIn(data: logInData) {
        const options: Record< string, string | logInData> = {}
        options.data = data
 
        return this.HTTPTransport.post('/signin', options)
    }

    signUp(data: SignupData){
        const options: Record<string, any> = {}
        options.data = data

        return this.HTTPTransport.post('/signin', options)
    }

    getUser(): Promise<User>{

        return this.HTTPTransport.get('/user')
    }

    logout(){
        return this.HTTPTransport.post('/logout')
    }
    create = undefined
    read = undefined
    update = undefined
    delete = undefined
}

export default new UserApi()