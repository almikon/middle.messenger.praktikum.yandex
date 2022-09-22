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
        console.log('put users')
        return this.HTTPTransport.put('/users', options)
    }
    delete(chatId: number, userId: number){
        const options: Record<string, any> = {}
        options.data = { 'users': [userId], 'chatId': chatId }
        console.log('delete users')
        return this.HTTPTransport.delete('/users', options)
}
    chatToken(id:number){
        return this.HTTPTransport.post(`/token/${id}`)
    }
}

export default new ChatsApi()