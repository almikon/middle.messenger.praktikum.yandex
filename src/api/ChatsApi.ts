import BaseAPI from './baseApi'

export interface IcreateChat {
    title: string
}

export class ChatsApi extends BaseAPI {
    constructor() {
        super('/chats')
    }

    create(title: string) {
        const options: Record<string, any> = {}
        options.data = { 'title': title }
        return this.HTTPTransport.post('', options)

    }
    read() {
        return this.HTTPTransport.get('')
    }
    update(chatId: number, userId: number) {

        const options: Record<string, any> = {}
        options.data = { 'users': [userId], 'chatId': chatId }
        return this.HTTPTransport.put('/users', options)
    }
    delete = undefined
}

export default new ChatsApi()