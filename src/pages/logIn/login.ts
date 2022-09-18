import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import '../../less/form.less';
import Block from '../../utils/Block';
import tmpl from './logIn.hbs'
import { PATTERNS } from '../../constants'
import Store, { StoreEvents } from '../../utils/Store';
import UserApiController from '../../controllers/UserApiController';
import getData from '../../utils/GetData';
import { logInData } from '../../api/UserApi';

export class LogInPage extends Block{
    constructor() {
        super(
        {
            title: "Вход",
            login: "Логин",
            password: "Пароль",
            footerNote: {
                text: "Нет аккаунта?",
                url: "signUp.html"
            },
            url: "chats.html"
        });
    }
    init() {
        this.children.button = new Button({
            class: 'form__button',
            value: "Вход",
            events: {
                click: () => this.logIn()
            }
        }
        )

        this.children.loginInput = new Input({
            name: 'login',
            classes: [
                'form__input',
                'required',
                'login'
            ],
            pattern: PATTERNS.LOGIN
        })

        this.children.passwordInput = new Input({
            name: 'password',
            classes: [
                'form__input',
                'required',
                'password'
            ],
            pattern: PATTERNS.PASSWORD
        })
    }

    public logIn() {
        const data = getData()
        Store.on(StoreEvents.Updated, () => {
            this.setProps(Store.getState());
        });
        const inputs = document.querySelectorAll('.wrong')
        if (inputs.length) {
            console.log('Есть ошибки')
        } else {
            UserApiController.logIn(data as unknown as logInData)
        }
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
