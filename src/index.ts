import { page404Page } from './pages/404/404';
import { page500Page } from './pages/500/500';
import { changePasswordPage } from './pages/changePassword/changePassword';
import { changeSettingsPage } from './pages/changeSettings/changeSettings';
import { chatsPage } from './pages/chats/chats';
import { logInPage } from './pages/logIn/login';
import { settingsPage } from './pages/settings/settings';
import { signUpPage } from './pages/signUp/signUp';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!
    const currentPath = document.location.pathname
    console.log(currentPath)

    switch (currentPath) {
        case '/index.html':
            const logIn = new logInPage()
            root.append(logIn.getContent()!)
            logIn.dispatchComponentDidMount()
            break

        case '/signUp.html':
            const signUp = new signUpPage()
            root.append(signUp.getContent()!)
            signUp.dispatchComponentDidMount()
            break

        case '/settings.html':
            const settings = new settingsPage()
            root.append(settings.getContent()!)
            settings.dispatchComponentDidMount()
            break
        case '/404.html':
            const page404 = new page404Page()
            root.append(page404.getContent()!)
            page404.dispatchComponentDidMount()
            break
        case '/500.html':
            const page500 = new page500Page()
            root.append(page500.getContent()!)
            page500.dispatchComponentDidMount()
            break
        case '/changePassword.html':
            const changePassword = new changePasswordPage()
            root.append(changePassword.getContent()!)
            changePassword.dispatchComponentDidMount()
            break
        case '/chats.html':
            const chats = new chatsPage()
            root.append(chats.getContent()!)
            chats.dispatchComponentDidMount()
            break
        case '/changeSettings.html':
            const changeSettings = new changeSettingsPage()
            root.append(changeSettings.getContent()!)
            changeSettings.dispatchComponentDidMount()
            break
    }
});