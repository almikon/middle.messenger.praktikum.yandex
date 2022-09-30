import Block from "../../utils/Block"
import { ChatItem } from "../ChatItem"
import tmpl from './chatList.hbs'

interface IChatList {
    chats: ChatItem[]
    pr: any
}

export class ChatList extends Block {
    constructor(props: IChatList) {
        super(props)
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }

}
