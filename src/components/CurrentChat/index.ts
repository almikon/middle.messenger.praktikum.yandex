import Block from "../../utils/Block"
import { withStore } from "../../utils/Store"
import { messages } from "../Messages"
import { Modal } from "../Modal"
import { Title } from "../Title"
import tmpl from './currentChat.hbs'


interface ICurrentChat {
    title?: string,
    chat?: any,
    getMessage?: string
}

class CurrentChatCore extends Block {

    constructor(props: ICurrentChat) {
        super(props)
    }
    protected init(): void {
        this.children.addUser = new Title({
            class: '',
            value: 'Добавить участника',
            events: {
                click: () => this.addUserToChat()
            }
        })
        this.children.deleteUser = new Title({
            class: '',
            value: 'Удалить участника',
            events: {
                click: () => this.deleteUserFromChat()
            }
        })
        this.children.modalAdd = new Modal({
            buttonValue: 'Добавить',
            inputId: 'addModal',
            inputType: 'text',
            inputClass: 'form__input',
            title: 'Добавить пользователя',
            label: 'Логин'
        })
        this.children.modalDelete = new Modal({
            buttonValue: 'Удалить',
            inputId: 'deleteModal',
            inputType: 'text',
            inputClass: 'form__input',
            title: 'Удалить пользователя',
            label: 'Логин'
        })

        this.children.messages = new messages({
            messages: []

        })
    }

    protected componentDidUpdate(): boolean {
        if (this.props.getMessage) {
            this.children.messages.setProps({
                messages: this.props.getMessage
            })
        }
        return true
    }

    public addUserToChat() {
        const addModal = document.querySelector('.addModal') as HTMLElement

        addModal.style.display = 'block'
        const modal = document.querySelector('.addModal') as HTMLElement
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none'
            }
        })
    }
    public deleteUserFromChat() {
        const deleteModal = document.querySelector('.deleteModal') as HTMLElement
        deleteModal.style.display = 'block'
        const modal = document.querySelector('.deleteModal') as HTMLElement
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none'
            }
        })
    }
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}

const withChatId = withStore((state) => ({ ...state }))
export const currentChat = withChatId(CurrentChatCore)
