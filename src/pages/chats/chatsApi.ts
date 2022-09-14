import HTTPTransport from '../../utils/HTTPTransport';
import {BaseApi} from '../../api/baseApi';

const chatsAPIInstance = new HTTPTransport();
// const chatAPIInstance = new HTTPTransport('api/v1/chats');

export class ChatsAPI extends BaseApi {
    create() {
        // Здесь уже не нужно писать полный путь /api/v1/chats/
        return chatsAPIInstance.post('/', {title: 'string'});
    }

    request() {
        // Здесь уже не нужно писать полный путь /api/v1/chats/
        return chatsAPIInstance.get('/full');
    }
}