import '../../less/userSettings.less'
import tmpl from './changePassword.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PATTERNS } from '../../constants'
import getData from '../../utils/GetData';
import { withStore } from '../../utils/Store';
import { Avatar } from '../../components/Avatar';
import { Title } from '../../components/Title';
import ProfileApiController from '../../controllers/ProfileApiController';
import router from '../../utils/Router'

export class ChangePasswordPageCore extends Block {
    init() {
        //TODO: avatar src doesn't work (reason: not found)
        this.children.avatar = new Avatar({
            userAvatar: this.props.avatar,
            altText: 'Ваш аватар'
        })
        this.children.title = new Title({
            value: this.props.login
        })
        this.children.button = new Button({
            class: 'form__button',
            value: 'Сохранить',
            events: {
                click: () => this.changePassword()
            }
        })
        this.children.backButton = new Button({
            class: 'back__button',
            events: {
                click: () => router.go('/chats.html')
            }
        })

        this.children.oldPasswordInput = new Input({
            name: 'oldPassword',
            placeholder: '********',
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.PASSWORD
        })
        this.children.passwordInput = new Input({
            name: 'newPassword',
            placeholder: '********',
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.PASSWORD
        })
        this.children.checkPasswordInput = new Input({
            name: 'checkPassword',
            placeholder: '********',
            classes: [
                'form__input',
                'required'
            ],
            pattern: PATTERNS.PASSWORD
        })
    }
    public changePassword() {
        const data = getData()
        const inputs = document.querySelectorAll('.wrong')
        if (inputs.length || data.newPassword != data.checkPassword) {
        } else {
            delete data.checkPassword
            ProfileApiController.changePassword(data)
        }
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }))
export const ChangePasswordPage = withUser(ChangePasswordPageCore)