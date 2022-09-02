import '../../less/changeSettings.less'
import user__avatar from '../../../static/img/user_avatar.png'
import back_arrow from '../../../static/img/back_arrow.png'
import tmpl from './changeSettings.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

const context = {
    back_arrow: back_arrow,
    user__avatar: user__avatar,
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

export class changeSettingsPage extends Block {
    constructor(props = context) {
        super('div', props);
    }

    init() {
        this.children.button = new Button({
            class: 'form__button',
            value: this.props.button__text,
            goTo: '/settings.html'
        });
        this.children.loginInput = new Input({
            name: 'login',
            placeholder: this.props.login.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: '^(?=.*[a-zA-Z])([a-zA-Z0-9-_]+){3,20}$'
        })
        this.children.emailInput = new Input({
            name: 'email',
            placeholder: this.props.email.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: '^\\S+@\\S+\\.\\S+$'
        })
        this.children.first_nameInput = new Input({
            name: 'first_name',
            placeholder: this.props.first_name.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: '^[A-ZА-Я][a-zа-я-]*$'
        })
        this.children.second_nameInput = new Input({
            name: 'second_name',
            placeholder: this.props.second_name.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: '^[A-ZА-Я][a-zа-я-]*$'
        })
        this.children.phoneInput = new Input({
            name: 'phone',
            placeholder: this.props.phone.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: '^[\+][0-9]{10,15}$'
        })
        this.children.display_nameInput = new Input({
            name: 'phone',
            placeholder: this.props.display_name.placeholder,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: '^(?!\s*$).+'
        })
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}