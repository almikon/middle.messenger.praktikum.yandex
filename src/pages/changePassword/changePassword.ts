import '../../less/userSettings.less'
import user__avatar from '../../../static/img/user_avatar.png'
import back_arrow from '../../../static/img/back_arrow.png'
import tmpl from './changePassword.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

const context = {
    back_arrow: back_arrow,
    user__avatar: user__avatar,
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
    button__text: "Сохранить"
};

export class changePasswordPage extends Block {
    constructor(props = context) {
        super('div', props);
    }

    init() {
        this.children.button = new Button({
            class: 'form__button',
            value: this.props.button__text,
            goTo: '/settings.html'
        })
        this.children.oldPasswordInput = new Input({
            name: 'oldPassword',
            placeholder: this.props.oldPassword.placeholder,
            classes: [
                'form__input',
                'required'
            ],
            pattern: '(?=.*[A-Z]).'
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
        this.children.checkPasswordInput = new Input({
            name: 'checkPassword',
            placeholder: this.props.checkPassword.placeholder,
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