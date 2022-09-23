import BaseAPI from "./baseApi";
import { SignupData } from "./AuthApi";
export interface IChangePassword {
    oldpassword: string,
    newPassword: string
}
export class UserApi extends BaseAPI {
    constructor() {
        super('/user')
    }
    update(data: SignupData) {
        const options: Record<string, any> = {}
        options.data = data
        return this.HTTPTransport.put('/profile', options)
    }
    updatePassword(data: IChangePassword) {
        const options: Record<string, any> = {}
        options.data = data
        return this.HTTPTransport.put('/password', options)
    }
    updateAvatar(formData: FormData) {
        const options: Record<string, any> = {}
        options.data = formData
        options.type = 'file'
        return this.HTTPTransport.put('/profile/avatar', options)
    }
    getUserByLogin(login: string): {} {
        const options: Record<string, any> = {}
        options.data = { 'login': login }
        return this.HTTPTransport.post('/search', options)
    }
}

export default new UserApi()