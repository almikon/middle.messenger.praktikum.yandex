import HTTPTransport from '../../utils/HTTPTransport'
import {BaseApi} from '../../api/baseApi'

const chatsAPIInstance = new HTTPTransport('api/v1/chats')

export class ChatsAPI extends BaseApi {
    create() {
        return chatsAPIInstance.post('/', {title: 'string'})
    }

    request() {
        return chatsAPIInstance.get('/full')
    }
}
