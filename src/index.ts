import { Page404Page } from './pages/404/404';
import { Page500Page } from './pages/500/500';
import { ChangePasswordPage } from './pages/changePassword/changePassword';
import { ChangeSettingsPage } from './pages/changeSettings/changeSettings';
import { ChatsPage } from './pages/chats/chats';
import { LogInPage } from './pages/logIn/login';
import { SettingsPage } from './pages/settings/settings';
import { SignUpPage } from './pages/signUp/signUp';
import Router from './utils/Router'

const router = new Router('#app')
// const logIn = new LogInPage()
// const signUp = new SignUpPage()
// const page404 = new Page404Page()
// const page500 = new Page500Page()
// const changePassword = new ChangePasswordPage()
// const changeSettings = new ChangeSettingsPage()
// const settings = new SettingsPage()
// const chats = new ChatsPage()
router
    .use('/',new LogInPage().getContent() as HTMLElement)
    .use('/index.html',new LogInPage().getContent() as HTMLElement)
    .use('/signUp.html',new SignUpPage().getContent() as HTMLElement)
    .use('/404.html',new Page404Page().getContent() as HTMLElement)
    .use('/500.html',new Page500Page().getContent() as HTMLElement)
    .use('/changePassword.html',new ChangePasswordPage().getContent() as HTMLElement) 
    .use('/changeSettings.html',new ChangeSettingsPage().getContent() as HTMLElement)
    .use('/settings.html',new SettingsPage().getContent() as HTMLElement)
    .use('/chats.html',new ChatsPage().getContent() as HTMLElement) 
    .start()
