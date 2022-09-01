import { Button } from '../../components/Button';
import '../../less/form.less';
import Block from '../../utils/Block';
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
    goTo: "./chats.html",
    footerNote: {
        text: "Нет аккаунта?",
        url: "signUp.html"
    },
    url: "chats.html"
};
export class logInPage extends Block {
    constructor(props = context) {
        super('div', props);
    }

    init() {
        this.children.button = new Button({
            class: 'form__button',
            value: this.props.button__text,
            goTo: this.props.goTo
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
