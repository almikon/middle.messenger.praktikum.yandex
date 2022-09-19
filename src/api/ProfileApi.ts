import BaseAPI from "./baseApi";
import { SignupData } from "./UserApi";

export class ProfileApi extends BaseAPI {
    constructor() {
        super('/user')
    }
    update(data: SignupData) {
        const options: Record<string, any> = {}
        options.data = data
        return this.HTTPTransport.put('/profile', options)
    }
}

export default new ProfileApi()