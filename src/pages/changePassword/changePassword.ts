import '../../less/userSettings.less'
import userAvatar from '../../../static/img/userAvatar.png'
import tmpl from './changePassword.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PATTERNS } from '../../constants'

const context = {
    userAvatar: userAvatar,
    user: "Иван",
    oldPassword: {
        name: "Старый пароль",
        placeholder: "**********"
    },
    password: {
        name: "Новый пароль",
        placeholder: "**********"
    },
    checkPassword: {
        name: "Повторите новый пароль",
        placeholder: "**********"
    },
    button__text: "Сохранить",
    goTo: './settings.html'
};
type ChangePasswordPageProps = {

}
export class ChangePasswordPage extends Block<ChangePasswordPageProps> {
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
        })
        this.children.backButton = new Button({
            class: 'back__button',
            events: {
                click: () => window.history.back()
            }
        })

        this.children.oldPasswordInput = new Input({
            name: 'oldPassword',
            placeholder: this.props.oldPassword.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.PASSWORD
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
        this.children.checkPasswordInput = new Input({
            name: 'checkPassword',
            placeholder: this.props.checkPassword.placeholder,
            classes: [
                'form__input',
                'required'
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