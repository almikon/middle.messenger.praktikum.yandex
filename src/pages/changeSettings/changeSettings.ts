import '../../less/changeSettings.less'
import tmpl from './changeSettings.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PATTERNS } from '../../constants'
import getData from '../../utils/GetData';
import AuthApiController from '../../controllers/AuthApiController';
import { Avatar } from '../../components/Avatar';
import { Title } from '../../components/Title';
import { withStore } from '../../utils/Store';
import { ISignupData } from '../../api/AuthApi';
import { Modal } from '../../components/Modal';
import UserApiController from '../../controllers/UserApiController';

export class ChangeSettingsPageCore extends Block {

    init() {
        AuthApiController.fetchUser()
        this.children.modal = new Modal({
            buttonValue: 'Поменять',
            inputId: 'uploadAvatarImage',
            inputType: 'file',
            title: 'Загрузите файл',
            label: 'Файл',
            inputClass: 'input'
        })
    }
    public changeSettings() {
        const data = getData()
        const inputs = document.querySelectorAll('.wrong')
        if (inputs.length) {
            console.log('Есть ошибки')
        } else {
            UserApiController.update(data as unknown as ISignupData)
        }
    }
    public showModal() {
        const modal = document.querySelector('.modal') as HTMLElement
        modal.style.display = 'block'
    }
    protected componentDidUpdate(_query?: string | undefined): boolean {

        this.children.avatar = new Avatar({
            userAvatar: 'https://ya-praktikum.tech/api/v2/resources' + this.props.avatar,
            altText: 'Ваш аватар',
            events: {
                click: () => this.showModal()
            }
        })
        this.children.title = new Title({
            class: "user__title",
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
                click: () => window.history.back()
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


        const modal = document.querySelector('.modal') as HTMLElement
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none'
            }
        })
        return true
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }))
export const ChangeSettingsPage = withUser(ChangeSettingsPageCore)