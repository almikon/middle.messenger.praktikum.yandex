import store from '../utils/Store';
import router from '../utils/Router';
import UserAPI, { IChangePassword, UserApi } from '../api/UserApi';
import AuthAPI, { AuthApi, ISignupData } from '../api/AuthApi';

class UserApiController {
  private readonly api: UserApi
  private readonly authApi: AuthApi
  constructor() {
    this.api = UserAPI;
    this.authApi = AuthAPI;
  }

  async update(data: ISignupData) {
    try {
      await this.api.update(data);
      await this.fetchUser()

      router.go('/settings')
    } catch (e) {
      console.error(e)
    }
  }
  async changePassword(data: IChangePassword) {
    try {
      await this.api.updatePassword(data)
      await this.fetchUser()
      router.go('/settings')
    } catch (e) {
      console.error(e)
    }
  }
  async changeAvatar(formData: FormData) {
    await this.api.updateAvatar(formData)
    await this.fetchUser()
    router.go('/settings')
  }
  async fetchUser() {
    const user = await this.authApi.getUser();
    if(!user.avatar){
      delete user.avatar
    }
    if(!user.display_name){
      delete user.display_name
    }
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
