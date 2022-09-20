import ChatsAPI, { ChatsApi } from '../api/ChatsApi';
import store from '../utils/Store';

export class ChatsApiController {
  private readonly api: ChatsApi
  constructor() {
    this.api = ChatsAPI;
  }

  async createChat(title: string) {

    try {
      await this.api.create(title)
    } catch (e) {
      console.error(e)
    }
    return location.reload()
  }
  async getChats() {

    try {
      const chats = await this.api.read()
      store.set('chats', chats)
    } catch (e) {
      console.error(e)
    }
  }
}

export default new ChatsApiController()
