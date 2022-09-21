import ChatsAPI, { ChatsApi } from '../api/ChatsApi';
import store from '../utils/Store';
import UserApiController from './UserApiController';

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
      console.log(e)
    }
  }

  async addUser(chatId: number, login: string) {
    const userId: any = await UserApiController.getUserByLogin(login)

    await this.api.update(chatId, userId[0].id)

  }
  async deleteUser() {

  }
}

export default new ChatsApiController()
