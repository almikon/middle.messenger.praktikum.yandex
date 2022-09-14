import '../../less/settings.less'
import userAvatar from '../../../static/img/userAvatar.png'
import backArrow from '../../../static/img/backArrow.png'
import tmpl from './settings.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';

const context = {
    backArrow: backArrow,
    userAvatar: userAvatar,
    user: "Иван",
    email: {
        name: "Почта",
        value: "pochta@yandex.ru"
    },
    login: {
        name: "Логин",
        value: "ivanivanov"
    },
    first_name: {
        name: "Имя",
        value: "Иван"
    },
    second_name: {
        name: "Фамилия",
        value: "Иванов"
    },
    display_name: {
        name: "Имя в чате",
        value: "Иван"
    },
    phone: {
        name: "Телефон",
        value: "+7 (909) 967 30 30"
    },
    change__data: {
        item: "Изменить данные",
        url: "changeSettings.html"
    },
    change__password: {
        item: "Изменить пароль",
        url: "changePassword.html"
    },
    option__exit: "Выйти"
};
type SettingsPageProps = {

}
export class SettingsPage extends Block<SettingsPageProps> {
    constructor(props = context) {
        super('div', props);
    }
    init(){
        this.children.button = new Button({
        class: 'form__button',
        value: this.props.button__text,
        goTo: this.props.goTo,
        events: {
            click: () => window.history.back()
        }
    })}
    render() {
        return this.compile(tmpl, this.props);
    }
}
