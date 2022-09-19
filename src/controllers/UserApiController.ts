import store from '../utils/Store';
import router from '../utils/Router';
import UserAPI, { logInData, SignupData, UserApi } from '../api/UserApi';
import ProfileAPI, { ProfileApi } from '../api/ProfileApi';

export class UserApiController {
  private readonly api: UserApi
  private readonly profile: ProfileApi

  constructor() {
    this.api = UserAPI;
    this.profile = ProfileAPI
  }

  async logIn(data: logInData) {
    await this.api.logIn(data)
    await this.fetchUser()

    console.log(`login`)
    console.log(store.getState())
    router.go('/chats.html')
  }

  async signup(data: SignupData) {
    await this.api.signUp(data);
    await this.profile.update(data)
    await this.fetchUser()

    router.go('/chats.html')
  }

  async fetchUser() {
    const user = await this.api.getUser();

    store.set('user', user)
  }

  async logout() {
    await this.api.logout();
    await this.fetchUser()
    router.go('/')
  }
}

export default new UserApiController()
