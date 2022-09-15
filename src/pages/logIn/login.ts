import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import '../../less/form.less';
import Block from '../../utils/Block';
import tmpl from './logIn.hbs'
import { PATTERNS } from '../../constants'
import Router from '../../utils/Router';
import getData from '../../utils/GetData';
import { LoginApi } from './loginApi';
import Store, { StoreEvents } from '../../utils/Store';
const context = {
    title: "Вход",
    login: "megaMEGAmegaMEGa",
    password: "sjhdbckhubdkehbchwekebhjcbekjh",
    button__text: "Вход",
    footerNote: {
        text: "Нет аккаунта?",
        url: "signUp.html"
    },
    url: "chats.html"
};

interface ILogInPageProps {
}

export class LogInPage extends Block<ILogInPageProps> {
    constructor(props = context) {
        super('div', props);
    }
    init() {
        this.children.button = new Button({
            class: 'form__button',
            value: this.props.button__text,
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
        Store.on(StoreEvents.Updated, () => {
            // вызываем обновление компонента, передав данные из хранилища
            this.setProps(Store.getState());
        });
        const logInRequest = new LoginApi()
        const data = getData()
        logInRequest.logIn(data).then(data => Store.set('loginResponse', data))
        const resp = logInRequest.logIn(data).then(data => { return data }) as unknown as string
        console.log(resp)
        // const inputs = document.querySelectorAll('.wrong')
        // if (inputs.length) {
        //     console.log('Есть ошибки')
        // } else {


        // const router = new Router('#app')
        // router.go('/chats.html')
        // }
    }

    render() {

        return this.compile(tmpl, this.props);
    }
}
