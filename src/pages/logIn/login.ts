import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import '../../less/form.less';
import Block from '../../utils/Block';
import tmpl from './logIn.hbs'
import { PATTERNS } from '../../constants'
import Store, { StoreEvents, withStore } from '../../utils/Store';
import AuthApiController from '../../controllers/AuthApiController';
import getData from '../../utils/GetData';
import { ILogInData } from '../../api/AuthApi';
import { Link } from '../../components/Link';


export class LoginPageCore extends Block {
    constructor() {
        super({})

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
        this.children.link = new Link({
            to: '/sign-up',
            label: 'Нет аккаунта?'
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
            AuthApiController.logIn(data as unknown as ILogInData)

        }
    }

    render() {
        return this.compile(tmpl, this.props);

    }
}

const withUser = withStore((state) => ({ ...state.user }))
export const loginPage = withUser(LoginPageCore)