import store from '../utils/Store';
import router from '../utils/Router';
import ProfileAPI, { ProfileApi } from '../api/ProfileApi';

import UserAPI, { SignupData, UserApi } from '../api/UserApi';

export class ProfileApiController {
  private readonly api: ProfileApi
  private readonly userapi: UserApi
  constructor() {
    this.api = ProfileAPI;
    this.userapi = UserAPI
  }

  async update(data: SignupData) {
    await this.api.update(data);
    await this.fetchUser()

    router.go('/settings.html')
  }

  async fetchUser() {
    const user = await this.userapi.getUser();

    store.set('user', user)
  }
}

export default new ProfileApiController()
