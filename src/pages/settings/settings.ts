import '../../less/settings.less'
import userAvatar from '../../../static/img/userAvatar.png'
import tmpl from './settings.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import UserApiController from '../../controllers/UserApiController';
import store, { withStore } from '../../utils/Store';
import { UserInfo } from '../../components/UserInfo';

export class SettingsPageCore extends Block {
    init() {
        UserApiController.fetchUser()
        this.children.button = new Button({
            class: 'back__button',
            events: {
                click: () => window.history.back()
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
        this.children.first_name = new UserInfo({
            name: 'Имя',
            value: this.props.first_name
        })
        this.children.second_name = new UserInfo({
            name: 'Фамилия',
            value: this.props.second_name
        })
        this.children.phone = new UserInfo({
            name: 'Телефон',
            value: this.props.phone
        })

        console.log(store.getState())
    }
    render() {
        return this.compile(tmpl, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }))
export const SettingsPage = withUser(SettingsPageCore)