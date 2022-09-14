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
const logIn = new LogInPage()
const signUp = new SignUpPage()
const page404 = new Page404Page()
const page500 = new Page500Page()
const  = new LogInPage()
const signUp = new SignUpPage()
const logIn = new LogInPage()
const signUp = new SignUpPage()
router
    .use('/',logIn.getContent() as HTMLElement)
    .use('/index.html',logIn.getContent() as HTMLElement)
    .use('/signUp.html',signUp.getContent() as HTMLElement)
    .use('/',logIn.getContent() as HTMLElement)
    .use('/index.html',logIn.getContent() as HTMLElement)
    .use('/signUp.html',signUp.getContent() as HTMLElement) 
    .start()

// window.addEventListener('DOMContentLoaded', () => {
//     const root = document.querySelector('#app')!
//     const currentPath = document.location.pathname
//     switch (currentPath) {
//         case '/index.html':
//             const logIn = new LogInPage()
//             root.append(logIn.getContent()!)
//             logIn.dispatchComponentDidMount()
//             break

//         case '/signUp.html':
//             const signUp = new SignUpPage()
//             root.append(signUp.getContent()!)
//             signUp.dispatchComponentDidMount()
//             break

//         case '/settings.html':
//             const settings = new SettingsPage()
//             root.append(settings.getContent()!)
//             settings.dispatchComponentDidMount()
//             break
//         case '/404.html':
//             const page404 = new Page404Page()
//             root.append(page404.getContent()!)
//             page404.dispatchComponentDidMount()
//             break
//         case '/500.html':
//             const page500 = new Page500Page()
//             root.append(page500.getContent()!)
//             page500.dispatchComponentDidMount()
//             break
//         case '/changePassword.html':
//             const changePassword = new ChangePasswordPage()
//             root.append(changePassword.getContent()!)
//             changePassword.dispatchComponentDidMount()
//             break
//         case '/chats.html':
//             const chats = new ChatsPage()
//             root.append(chats.getContent()!)
//             chats.dispatchComponentDidMount()
//             break
//         case '/changeSettings.html':
//             const changeSettings = new ChangeSettingsPage()
//             root.append(changeSettings.getContent()!)
//             changeSettings.dispatchComponentDidMount()
//             break
//         default:
//             document.location.pathname = '/index.html'
//     }
// });