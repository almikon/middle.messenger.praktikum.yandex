import BaseAPI from "./baseApi";
import { SignupData } from "./UserApi";
export interface IChangePassword{
    oldpassword: string,
    newPassword: string
}
export class ProfileApi extends BaseAPI {
    constructor() {
        super('/user')
    }
    update(data: SignupData) {
        const options: Record<string, any> = {}
        options.data = data
        return this.HTTPTransport.put('/profile', options)
    }
    updatePassword(data:IChangePassword){
        const options: Record<string, any> = {}
        options.data = data
        return this.HTTPTransport.put('/password', options)
    }
}

export default new ProfileApi()