import Block from "../../utils/Block";
import { Message } from "../Message";
import tmpl from './messages.hbs'

interface IMessages {
    message: string
}

export class Messages extends Block {
    constructor(props: IMessages) {
        super(props)
    }
    protected componentDidUpdate(): boolean {
       if (this.props.messages){
        console.log(this.props.messages)
        const newMessages: Array<Message> = []
                newMessages.push(new Message({
                    content: this.props.messages[0].content
                }))
       }
       
       return true
    }
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
