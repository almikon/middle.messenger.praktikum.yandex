import UserApiController from './controllers/UserApiController';
import { Page404Page } from './pages/404/404';
import { Page500Page } from './pages/500/500';
import { ChangePasswordPage } from './pages/changePassword/changePassword';
import { ChangeSettingsPage } from './pages/changeSettings/changeSettings';
import { ChatsPage } from './pages/chats/chats';
import { LogInPage } from './pages/logIn/login';
import { SettingsPage } from './pages/settings/settings';
import { SignUpPage } from './pages/signUp/signUp';
import router from './utils/Router'


window.addEventListener('DOMContentLoaded', async () => {
    router
        .use('/', LogInPage)
        .use('/index.html', LogInPage)
        .use('/signUp.html', SignUpPage)
        .use('/404.html', Page404Page)
        .use('/500.html', Page500Page)
        .use('/changePassword.html', ChangePasswordPage)
        .use('/changeSettings.html', ChangeSettingsPage)
        .use('/settings.html', SettingsPage)
        .use('/chats.html', ChatsPage)


    try {
        await UserApiController.fetchUser()
        router.start()
    } catch (e){
        console.error(e)
        router.go('/')
    }
})