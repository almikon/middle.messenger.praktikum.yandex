import HTTPTransport from '../../utils/HTTPTransport';
import {BaseApi} from '../../api/baseApi';


const chatMessagesAPIInstance = new HTTPTransport();
// const chatMessagesAPIInstance = new HTTPTransport('api/v1/messages');

export class ChatMessagesAPI extends BaseApi {
    request({id}) {
        return chatMessagesAPIInstance.get(`/${id}`);
    }
}