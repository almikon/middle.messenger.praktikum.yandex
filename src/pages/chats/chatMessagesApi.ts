import HTTPTransport from '../../utils/HTTPTransport';

const chatMessagesAPIInstance = new HTTPTransport('api/v1/messages')

export class ChatMessagesAPI{


    request({id}:any) {
        return chatMessagesAPIInstance.get(`/${id}`);
    }
}