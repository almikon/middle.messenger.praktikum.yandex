import AuthApiController from './controllers/AuthApiController';
import { Page404Page } from './pages/404/404';
import { Page500Page } from './pages/500/500';
import { ChangePasswordPage } from './pages/changePassword/changePassword';
import { ChangeSettingsPage } from './pages/changeSettings/changeSettings';
import { ChatsPage } from './pages/chats/chats';
import { loginPage } from './pages/logIn/login';
import { SettingsPage } from './pages/settings/settings';
import { SignUpPage } from './pages/signUp/signUp';
import router from './utils/Router'

window.addEventListener('DOMContentLoaded', async () => {
    router
        .use('/', loginPage)
        .use('/logIn', loginPage)
        .use('/sign-up', SignUpPage)
        .use('/404', Page404Page)
        .use('/500', Page500Page)
        .use('/changePassword', ChangePasswordPage)
        .use('/changeSettings', ChangeSettingsPage)
        .use('/settings', SettingsPage)
        .use('/messenger', ChatsPage)
    router.start()

    try {
        await AuthApiController.fetchUser()
        if(window.location.pathname === '/' || window.location.pathname === '/logIn' || window.location.pathname === '/sign-up'){
        router.go('/messenger')}
    } catch (e) {
        console.error(e)
    }
})
