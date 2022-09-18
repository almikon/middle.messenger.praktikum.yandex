import '../../less/settings.less'
import userAvatar from '../../../static/img/userAvatar.png'
import tmpl from './settings.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import UserApiController from '../../controllers/UserApiController';
import { withStore } from '../../utils/Store';

const context = {
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
}
export class SettingsPageCore extends Block{
    init(){
        UserApiController.fetchUser()
        console.log(context)
        this.children.button = new Button({
            class: 'back__button',
            events: {
                click: () => window.history.back()
            }})
        this.children.exitButton = new Button({
                class: 'exit__button',
                value:'Выход',
                events: {
                    click: () => UserApiController.logout()
                }})


        console.log(this.props)
    }
    render() {
        return this.compile(tmpl, this.props);
    }
}

const withUser = withStore((state) => ({...state.user}))
export const SettingsPage = withUser(SettingsPageCore)