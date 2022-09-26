import '../../less/form.less'
import tmpl from './signUp.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PATTERNS } from '../../constants'
import getData from '../../utils/GetData';
import AuthApiController from '../../controllers/AuthApiController';
import { ISignupData } from '../../api/AuthApi';
import { Link } from '../../components/Link';

export class SignUpPage extends Block {
    constructor() {
        super({
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
            display_name: {
                id: "Имя в чате",
                type: "text",
                name: "display_name",
                placeholder: "Имя в чате"
            },
            button__text: "Зарегистрироваться"
        });
    }

    init() {
        this.children.button = new Button({
            class: 'form__button',
            value: this.props.button__text,
            goTo: this.props.goTo,
            events: {
                click: () => this.signUp()
            }
        }
        )
        this.children.loginInput = new Input({
            name: 'login',
            placeholder: this.props.login.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.LOGIN
        })
        this.children.passwordInput = new Input({
            name: 'password',
            placeholder: this.props.password.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.PASSWORD
        })
        this.children.emailInput = new Input({
            name: 'email',
            placeholder: this.props.email.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.EMAIL
        })
        this.children.firstNameInput = new Input({
            name: 'first_name',
            placeholder: this.props.first_name.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.NAME
        })
        this.children.secondNameInput = new Input({
            name: 'second_name',
            placeholder: this.props.second_name.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.NAME
        })
        this.children.phoneInput = new Input({
            name: 'phone',
            placeholder: this.props.phone.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.PHONE
        })
        this.children.displayNameInput = new Input({
            name: 'display_name',
            placeholder: this.props.display_name.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.LOGIN
        })
        this.children.link = new Link({
            to: '/',
            label: 'Войти'
        })
    }
    public signUp() {
        const data = getData()
        const inputs = document.querySelectorAll('.wrong')
        if (inputs.length) {
            console.log('Есть ошибки')
        } else {
            AuthApiController.signup(data as unknown as ISignupData)
        }
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
