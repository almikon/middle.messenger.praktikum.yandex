import store from '../utils/Store'
import router from '../utils/Router'
import AuthAPI, { logInData, SignupData, AuthApi } from '../api/AuthApi'

export class AuthApiController {
  private readonly api: AuthApi

  constructor() {
    this.api = AuthAPI;
  }

  async logIn(data: logInData) {
    try {
      await this.api.logIn(data)
      router.go('/chats.html')
    } catch (e: any) {
      console.error(e)
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signUp(data);
      await this.fetchUser()

      router.go('/chats.html')
    } catch (e: any) {
      console.error(e)
    }
  }

  async fetchUser() {
    const user = await this.api.getUser();

    store.set('user', user)
  }

  async logout() {
    try {
      await this.api.logout();
      router.go('/')
    } catch (e) {
      console.error(e)
    }
  }
}

export default new AuthApiController()
