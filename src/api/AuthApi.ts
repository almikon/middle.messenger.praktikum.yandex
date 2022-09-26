import BaseAPI from './baseApi'

export interface ILogInData {
    login: string
    password: string
}

export interface ISignupData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string,
    avatar: string | null;
    display_name: string | null
}

export interface IUser {
    id: number;
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
    avatar?: string;
    display_name?: string
}

export class AuthApi extends BaseAPI {
    constructor() {
        super('/auth')
    }

    logIn(data: ILogInData) {
        const options: Record<string, string | ILogInData> = {}
        options.data = data

        return this.HTTPTransport.post('/signin', options)
    }

    signUp(data: ISignupData) {
        const options: Record<string, any> = {}
        options.data = data

        return this.HTTPTransport.post('/signup', options)
    }

    getUser(): Promise<IUser> {

        return this.HTTPTransport.get('/user')
    }

    logout() {
        return this.HTTPTransport.post('/logout')
    }
    create = undefined
    read = undefined
    update = undefined
    delete = undefined
}

export default new AuthApi()