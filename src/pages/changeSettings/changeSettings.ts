import '../../less/changeSettings.less'
import tmpl from './changeSettings.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PATTERNS } from '../../constants'
import getData from '../../utils/GetData';
import UserApiController from '../../controllers/UserApiController';
import { Avatar } from '../../components/Avatar';
import { Title } from '../../components/Title';
import { withStore } from '../../utils/Store';
import { SignupData } from '../../api/UserApi';
import ProfileApiController from '../../controllers/ProfileApiController';
import { Modal } from '../../components/Modal';
import router from '../../utils/Router'
export class ChangeSettingsPageCore extends Block {

    init() {
        UserApiController.fetchUser()
        //TODO: avatar src doesn't work (reason: not found)
        this.children.avatar = new Avatar({
            userAvatar: this.props.avatar,
            altText: 'Ваш аватар',
            events: {
                click: () => this.showModal()
            }
        })
        this.children.title = new Title({
            value: this.props.login
        })
        this.children.button = new Button({
            class: 'form__button',
            value: 'Сохранить',
            events: {
                click: () => this.changeSettings()
            }
        })

        this.children.backButton = new Button({
            class: 'back__button',
            events: {
                click: () => router.go('/chats.html')
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
        this.children.displayNameInput = new Input({
            name: 'display_name',
            placeholder: this.props.display_name,
            classes: [
                'settings__input',
                'required'
            ],
            pattern: PATTERNS.NAME
        })
        this.children.modal = new Modal({})
    }
    public changeSettings() {
        const data = getData()
        const inputs = document.querySelectorAll('.wrong')
        if (inputs.length) {
            console.log('Есть ошибки')
        } else {
            ProfileApiController.update(data as unknown as SignupData)
        }
    }
    public showModal() {
        const modal = document.querySelector('.modal') as HTMLElement
        modal.style.display = 'block'
    }

    render() {
        const modal = document.querySelector('.modal') as HTMLElement
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none'
            }
        }
        return this.compile(tmpl, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }))
export const ChangeSettingsPage = withUser(ChangeSettingsPageCore)