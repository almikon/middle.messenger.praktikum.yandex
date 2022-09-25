import store from '../utils/Store'
import router from '../utils/Router'
import AuthAPI, { ILogInData, ISignupData, AuthApi } from '../api/AuthApi'

class AuthApiController {
  private readonly api: AuthApi

  constructor() {
    this.api = AuthAPI;
  }

  async logIn(data: ILogInData) {
    try {
      await this.api.logIn(data)
      router.go('/messenger')
    } catch (e: any) {
      console.error(e)
    }
  }

  async signup(data: ISignupData) {
    try {
      await this.api.signUp(data);
      await this.fetchUser()

      router.go('/messenger')
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
