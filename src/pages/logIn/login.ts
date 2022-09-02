import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import '../../less/form.less';
import Block from '../../utils/Block';
import tmpl from './logIn.hbs'

const context = {
    title: "Вход",
    login: "Логин",
    password: "Пароль",
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
        })
        this.children.loginInput = new Input({
            name: 'login',
            classes: [
                'form__input',
                'required',
                'login'
            ],
            pattern: '^(?=.*[a-zA-Z])([a-zA-Z0-9-_]+){3,20}$'
        })
        this.children.passwordInput = new Input({
            name: 'password',
            classes: [
                'form__input',
                'required',
                'password'
            ],
            pattern: '(?=.*[A-Z]).'
        })
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
