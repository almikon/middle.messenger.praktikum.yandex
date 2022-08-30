import '../../less/form.less';
import tmpl from './logIn.hbs'

const context = {
    title: "Вход",
    inputs: {
        login: {
            id: "Логин",
            type: "text",
            name: "login",
            placeholder: "Логин"
        },
        password: {
            id: "Пароль",
            type: "password",
            name: "password",
            placeholder: "Пароль"
        }
    },
    button__text: "Вход",
    footerNote: {
        text: "Нет аккаунта?",
        url: "signUp.html"
    },
    url: "chats.html"
};

export const htmlLogin = tmpl(context)