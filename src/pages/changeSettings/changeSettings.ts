import '../../less/changeSettings.less'
import userAvatar from '../../../static/img/userAvatar.png'
import backArrow from '../../../static/img/backArrow.png'
import tmpl from './changeSettings.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PATTERNS } from '../../constants'
const context = {
    backArrow: backArrow,
    userAvatar: userAvatar,
    user: "Иван",
    email: {
        name: "Почта",
        placeholder: "pochta@yandex.ru"
    },
    login: {
        name: "Логин",
        placeholder: "ivanivanov"
    },
    first_name: {
        name: "Имя",
        placeholder: "Иван"
    },
    second_name: {
        name: "Фамилия",
        placeholder: "Иванов"
    },
    display_name: {
        name: "Имя в чате",
        placeholder: "Иван"
    },
    phone: {
        name: "Телефон",
        placeholder: "+7(909)967-30-30"
    },
    button__text: "Сохранить"
};
type ChangeSettingsPageProps = {

}
export class ChangeSettingsPage extends Block<ChangeSettingsPageProps> {
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
            placeholder: this.props.login.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.LOGIN
        })
        this.children.emailInput = new Input({
            name: 'email',
            placeholder: this.props.email.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.EMAIL
        })
        this.children.firstNameInput = new Input({
            name: 'first_name',
            placeholder: this.props.first_name.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.NAME
        })
        this.children.secondNameInput = new Input({
            name: 'second_name',
            placeholder: this.props.second_name.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.NAME
        })
        this.children.phoneInput = new Input({
            name: 'phone',
            placeholder: this.props.phone.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.PHONE
        })
        this.children.display_nameInput = new Input({
            name: 'phone',
            placeholder: this.props.display_name.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.NOTEMPTY
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