import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import '../../less/form.less';
import Block from '../../utils/Block';
import tmpl from './logIn.hbs'
import { PATTERNS } from '../../constants'
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
type LogInPageProps = {

}
export class LogInPage extends Block<LogInPageProps> {
    constructor(props = context) {
        super('div', props);
    }
    init() {
        this.children.button = new Button({
            class: 'form__button',
            value: this.props.button__text,
            goTo: this.props.goTo,
            events: {
                click: () => this.checkData()
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
    public checkData() {
        this.getData()
        const inputs = document.querySelectorAll('.wrong')
        if (inputs.length) {
            console.log('Есть ошибки')
        } else {
            this.goTo(this.props.goTo)
        }
    }
    public goTo(adress: string) {
        document.location.pathname = adress
    }
    public getData() {
        let res: Record<string, string> = {}
        const inputList = document.querySelectorAll('input')
        inputList.forEach(input => {
            if (input.classList.contains('required')) {
                if (input.value.length > 0) {
                    res[input.name] = input.value
                }
                else {
                    console.log(`${input.name} не может быть пустым!`)
                    input.classList.add('wrong')
                }
            }
        })
        console.log(res)
    }
    render() {

        return this.compile(tmpl, this.props);
    }
}
