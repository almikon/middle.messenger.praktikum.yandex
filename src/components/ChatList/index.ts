import Block from "../../utils/Block"
import { ChatItem } from "../ChatItem"
import tmpl from './chatList.hbs'

interface IChatList {
    chats: any
    pr: any
}

export class ChatList extends Block {
    constructor(props: IChatList) {
        super(props)
    }
    protected init(): void {
    if(this.props){
    for(let i = 0; i < this.props.chats.length; i++){
    let chatName = 'chat' + i
    this.children[chatName] = new ChatItem({
        title: this.props.chats[i].title,
        events:{
            click: ()=>this.chooseChat(this.props.chats[i].title)
        }
    })
}}
    }
    public chooseChat(title:string){
        this.props.pr.currentChat.setProps({title:title})
    }

    
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
