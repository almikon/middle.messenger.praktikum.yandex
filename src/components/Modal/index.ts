import ChatsApiController from "../../controllers/ChatsApiController"
import ProfileApiController from "../../controllers/UserApiController"
import Block from "../../utils/Block"
import store from "../../utils/Store"
import { Button } from "../Button"
import tmpl from './modal.hbs'
interface IModal {
    buttonValue: string
    inputId: string
    inputType: string
    inputClass?: string
    title: string
    label: string
}
export class Modal extends Block {
    constructor(props: IModal) {
        super(props)
    }

    init() {
        this.children.changeButton = new Button({
            class: 'form__button',
            value: this.props.buttonValue,
            events: {
                click: () => this.handler()
            }
        })
    }
    public handler() {
        const avatar = document.querySelector('#uploadAvatarImage') as HTMLInputElement
        const addUser = document.querySelector('#addModal') as HTMLInputElement
        const deleteUser = document.querySelector('#deleteModal') as HTMLInputElement

        if (avatar && avatar.files) {
            let formData = new FormData()
            formData.append('avatar', avatar.files[0], 'avatar.png')

            ProfileApiController.changeAvatar(formData)
        }else if (addUser.value) {

            ChatsApiController.addUser(
                store.getState().currentChat.id,
                addUser.value)
            addUser.value = ''
        }else if (deleteUser.value) {
            ChatsApiController.deleteUser(
                store.getState().currentChat.id,
                deleteUser.value)
            deleteUser.value = ''
        }
        this.hide()
    }
    protected render(): DocumentFragment {

        return this.compile(tmpl, this.props)
    }
}
