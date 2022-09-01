import '../../less/userSettings.less'
import user__avatar from '../../../static/img/user_avatar.png'
import back_arrow from '../../../static/img/back_arrow.png'
import tmpl from './changePassword.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';

const context = {
    back_arrow: back_arrow,
    user__avatar: user__avatar,
    user: "Иван",
    user__settings: {
        oldPassword: {
            name: "Старый пароль",
            value: "**********"
        },
        newPassword: {
            name: "Новый пароль",
            value: "**********"
        },
        checkNewPassword: {
            name: "Повторите новый пароль",
            value: "**********"
        },
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
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}