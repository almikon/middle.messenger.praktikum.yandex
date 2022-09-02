import '../../less/settings.less'
import user__avatar from '../../../static/img/user_avatar.png'
import back_arrow from '../../../static/img/back_arrow.png'
import tmpl from './settings.hbs'
import Block from '../../utils/Block';

const context = {
    back_arrow: back_arrow,
    user__avatar: user__avatar,
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

export class settingsPage extends Block {
    constructor(props = context) {
        super('div', props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
