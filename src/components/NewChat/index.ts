import { PATTERNS } from "../../constants"
import ChatsApiController from "../../controllers/ChatsApiController"
import Block from "../../utils/Block"
import { Button } from "../Button"
import { Input } from "../Input"
import tmpl from './newChat.hbs'

interface INewChat {
    title: string,
    buttonClass: string,
    buttonValue: string,
    inputClasses: Array<string>,
    inputName: string,
    id: string
}

export class NewChat extends Block {
    constructor(props: INewChat) {
        super(props)
    }
    protected init(): void {
        this.children.button = new Button({
            class: this.props.buttonClass,
            value: this.props.buttonValue,
            events: {
                click: () => this.createNewChat()
            }
        })
        this.children.chatName = new Input({
            classes: this.props.inputClasses,
            pattern: PATTERNS.NOT_EMPTY,
            name: this.props.inputName,
            id: this.props.id
        })

    }
    public createNewChat() {
        const newChatTitle = document.getElementById('newChatTitle') as HTMLInputElement
        if (newChatTitle.value) {
            ChatsApiController.createChat(newChatTitle.value)
        }
        newChatTitle.value = ''
    }
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
