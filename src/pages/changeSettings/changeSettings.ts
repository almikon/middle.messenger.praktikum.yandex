import '../../less/changeSettings.less'
import userAvatar from '../../../static/img/userAvatar.png'
import tmpl from './changeSettings.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PATTERNS } from '../../constants'
import getData from '../../utils/GetData';
import UserApiController from '../../controllers/UserApiController';
const context = {
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
    phone: {
        name: "Телефон",
        placeholder: "+7(909)967-30-30"
    },
    button__text: "Сохранить",
    goTo: './settings.html'
}
export class ChangeSettingsPage extends Block {
    constructor() {
        super(context);
    }

    init() {
        UserApiController.fetchUser()
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

        this.children.loginInput = new Input({
            name: 'login',
            placeholder: this.props.login,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.LOGIN
        })
        this.children.emailInput = new Input({
            name: 'email',
            placeholder: this.props.email,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.EMAIL
        })
        this.children.firstNameInput = new Input({
            name: 'first_name',
            placeholder: this.props.first_name,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.NAME
        })
        this.children.secondNameInput = new Input({
            name: 'second_name',
            placeholder: this.props.second_name,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.NAME
        })
        this.children.phoneInput = new Input({
            name: 'phone',
            placeholder: this.props.phone,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.PHONE
        })
    }
    public checkData() {
        const data = getData()
        const inputs = document.querySelectorAll('.wrong')
        if (inputs.length) {
            console.log('Есть ошибки')
        } else {
            console.log(data)
        }
    }   render() {
        return this.compile(tmpl, this.props);
    }
}