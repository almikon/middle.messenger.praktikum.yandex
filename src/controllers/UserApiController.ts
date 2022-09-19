import store from '../utils/Store';
import router from '../utils/Router';
import UserAPI, { logInData, SignupData, UserApi } from '../api/UserApi';

export class UserApiController {
  private readonly api: UserApi

  constructor() {
    this.api = UserAPI;
  }

  async logIn(data: logInData) {
    try{
      await this.api.logIn(data)
      router.go('/chats.html')
    } catch (e:any){
      console.error(e)
    }
  }

  async signup(data: SignupData) {
    try{
      await this.api.signUp(data);
      await this.fetchUser()

      router.go('/chats.html')
    }catch(e:any){
      console.error(e)
    }
  }

  async fetchUser() {
    try{
      const user = await this.api.getUser();

      store.set('user', user)
    }catch(e){
      console.error(e)
    }
  }

  async logout() {
    try{
      await this.api.logout();
      router.go('/')
    }catch(e){
      console.error(e)
    }
  }
}

export default new UserApiController()
