import { html404 } from '../src/pages/404/404.js'
import { html500 } from '../src/pages/500/500.js'
import { htmlChangePassword } from '../src/pages/changePassword/changePassword.js'
import { htmlChats } from '../src/pages/chats/chats.js'
import { htmlChangeSettings } from '../src/pages/changeSettings/changeSettings.js'
import { htmlLogin } from '../src/pages/logIn/login.js'
import { htmlSignUp } from '../src/pages/signUp/signUp.js'
import { htmlSettings } from '../src/pages/settings/settings.js'

if (window.location.pathname === '/404.html') {
    document.body.innerHTML = html404;
} else if (window.location.pathname === '/500.html') {
    document.body.innerHTML = html500;
} else if (window.location.pathname === '/changePassword.html') {
    document.body.innerHTML = htmlChangePassword;
} else if (window.location.pathname === '/chats.html') {
    document.body.innerHTML = htmlChats;
} else if (window.location.pathname === '/changeSettings.html') {
    document.body.innerHTML = htmlChangeSettings;
} else if (window.location.pathname === '/signUp.html') {
    document.body.innerHTML = htmlSignUp;
} else if (window.location.pathname === '/settings.html') {
    document.body.innerHTML = htmlSettings;
} else {
    document.body.innerHTML = htmlLogin;
}

