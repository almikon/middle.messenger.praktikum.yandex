import store from '../utils/Store';
import router from '../utils/Router';
import UserApi, { logInData, SignupData } from '../api/UserApi';

export class UserApiController {
//   private readonly api : use

  constructor() {
    this.api = UserApi;
  }

  async logIn(data: logInData) {
    try {
      await this.api.signin(data);

      router.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go('/profile');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    const user = await this.api.read();

    store.set('user', user);
  }

  async logout() {
    try {
      await this.api.logout();

      router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new UserApiController();