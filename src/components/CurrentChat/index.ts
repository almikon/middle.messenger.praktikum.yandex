import Block from "../../utils/Block"
import { withStore } from "../../utils/Store"
import { Modal } from "../Modal"
import { Title } from "../Title"
import tmpl from './currentChat.hbs'

interface ICurrentChat {
    title?: string,
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

    }

    protected componentDidUpdate(query: string): boolean {

        const modal = document.querySelector(query) as HTMLElement
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none'
            }
        }

        return true
    }
    public addUserToChat() {
        const addModal = document.querySelector('.addModal') as HTMLElement

        addModal.style.display = 'block'
        this.componentDidUpdate('.addModal')
    }
    public deleteUserFromChat() {
        const deleteModal = document.querySelector('.deleteModal') as HTMLElement
        deleteModal.style.display = 'block'
        this.componentDidUpdate('.deleteModal')
    }
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}

const withChatId = withStore((state) => ({ ...state.currentChatId }))
export const CurrentChat = withChatId(CurrentChatCore)