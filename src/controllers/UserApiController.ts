import store from '../utils/Store';
import router from '../utils/Router';
import UserAPI, { IChangePassword, UserApi } from '../api/UserApi';
import AuthAPI, { AuthApi, SignupData } from '../api/AuthApi';

export class UserApiController {
  private readonly api: UserApi
  private readonly authApi: AuthApi
  constructor() {
    this.api = UserAPI;
    this.authApi = AuthAPI;
  }

  async update(data: SignupData) {
    try {
      await this.api.update(data);
      await this.fetchUser()

      router.go('/settings.html')
    } catch (e) {
      console.error(e)
    }
  }
  async changePassword(data: IChangePassword) {
    try {
      await this.api.updatePassword(data)
      await this.fetchUser()
      router.go('/settings.html')
    } catch (e) {
      console.error(e)
    }
  }
  async changeAvatar(formData: FormData) {
    await this.api.updateAvatar(formData)
    await this.fetchUser()
    router.go('/settings.html')
  }
  async fetchUser() {
    const user = await this.authApi.getUser();

    store.set('user', user)
  }

  async getUserByLogin(login: string) {
    try {
      return await this.api.getUserByLogin(login)
    }
    catch (e) {
      console.log(e)
    }
  }
}
export default new UserApiController()
