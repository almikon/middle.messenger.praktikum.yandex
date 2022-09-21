import ChatsApiController from "../../controllers/ChatsApiController"
import ProfileApiController from "../../controllers/ProfileApiController"
import Block from "../../utils/Block"
import { Button } from "../Button"
import tmpl from './modal.hbs'
interface IModal{
    buttonValue: string
    inputId:string
    inputType: string
    inputClass?:string
    title: string
    label:string
}
export class Modal extends Block {
    constructor(props: IModal){
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
        }
        if(addUser.value){
            console.log(addUser.value)
            ChatsApiController.addUser()
        }
        if(deleteUser.value){
            console.log(deleteUser.value)
            ChatsApiController.deleteUser()
        }
        this.hide()
    }
    protected render(): DocumentFragment {

        return this.compile(tmpl, this.props)
    }
}
