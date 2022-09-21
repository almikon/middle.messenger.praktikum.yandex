import '../../less/settings.less'
import tmpl from './settings.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import UserApiController from '../../controllers/UserApiController';
import { withStore } from '../../utils/Store';
import { UserInfo } from '../../components/UserInfo';
import { Title } from '../../components/Title';
import { Avatar } from '../../components/Avatar';
import router from '../../utils/Router'
export class SettingsPageCore extends Block {

    init() {

        UserApiController.fetchUser()
        console.log(this.props)
        this.children.avatar = new Avatar({
            userAvatar: 'https://ya-praktikum.tech/api/v2/resources' + this.props.avatar,
            altText: 'Ваш аватар'
        })
        this.children.title = new Title({
            value: this.props.login,
            class: "user__title"
        })
        this.children.backButton = new Button({
            class: 'back__button',
            events: {
                click: () => router.go('/chats.html')
            }
        })
        this.children.exitButton = new Button({
            class: 'exit__button',
            value: 'Выход',
            events: {
                click: () => UserApiController.logout()
            }
        })
        this.children.email = new UserInfo({
            name: 'Почта',
            value: this.props.email
        })
        this.children.login = new UserInfo({
            name: 'Логин',
            value: this.props.login
        })
        this.children.firstName = new UserInfo({
            name: 'Имя',
            value: this.props.first_name
        })
        this.children.secondName = new UserInfo({
            name: 'Фамилия',
            value: this.props.second_name
        })
        this.children.phone = new UserInfo({
            name: 'Телефон',
            value: this.props.phone
        })
        this.children.displayName = new UserInfo({
            name: 'Имя в чате',
            value: this.props.display_name
        })


    }
    render() {

        return this.compile(tmpl, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }))
export const SettingsPage = withUser(SettingsPageCore)