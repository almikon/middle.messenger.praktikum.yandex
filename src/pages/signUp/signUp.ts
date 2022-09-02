import '../../less/form.less'
import tmpl from './signUp.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

const context = {
    title: "Регистрация",
    email: {
        id: "Почта",
        type: "email",
        name: "email",
        placeholder: "pochta@yandex.ru"
    },
    login: {
        id: "Логин",
        type: "text",
        name: "login",
        placeholder: "Логин"
    },
    first_name: {
        id: "Имя",
        type: "text",
        name: "first_name",
        placeholder: "Иван"
    },
    second_name: {
        id: "Фамилия",
        type: "text",
        name: "second_name",
        placeholder: "Иванов"
    },
    phone: {
        id: "Телефон",
        type: "phone",
        name: "phone",
        placeholder: "+7 (909) 967 30 30"
    },
    password: {
        id: "Пароль",
        type: "password",
        name: "password",
        placeholder: "Пароль"
    },
    checkpassword: {
        id: "Пароль (ещё раз)",
        type: "password",
        name: "checkPassword",
        placeholder: "Пароль (ещё раз)"
    },
    button__text: "Зарегистрироваться",
    footerNote: {
        text: "Войти",
        url: "./index.html"
    }
}
export class signUpPage extends Block {
    constructor(props = context) {
        super('div', props);
    }

    init() {
        this.children.button = new Button({
            class: 'form__button',
            value: this.props.button__text,
            goTo: '/chats.html'
        })
        this.children.loginInput = new Input({
            name: 'login',
            placeholder: this.props.login.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: '^(?=.*[a-zA-Z])([a-zA-Z0-9-_]+){3,20}$'
        })
        this.children.passwordInput = new Input({
            name: 'password',
            placeholder: this.props.password.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: '(?=.*[A-Z]).'
        })
        this.children.emailInput = new Input({
            name: 'email',
            placeholder: this.props.email.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: '^\\S+@\\S+\\.\\S+$'
        })
        this.children.first_nameInput = new Input({
            name: 'first_name',
            placeholder: this.props.first_name.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: '^[A-ZА-Я][a-zа-я-]*$'
        })
        this.children.second_nameInput = new Input({
            name: 'second_name',
            placeholder: this.props.second_name.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: '^[A-ZА-Я][a-zа-я-]*$'
        })
        this.children.phoneInput = new Input({
            name: 'phone',
            placeholder: this.props.phone.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: '^[\+][0-9]{10,15}$'
        })
        this.children.checkpasswordInput = new Input({
            name: 'checkpassword',
            placeholder: this.props.checkpassword.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: '(?=.*[A-Z]).'
        })
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
