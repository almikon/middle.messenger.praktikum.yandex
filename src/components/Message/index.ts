import Block from "../../utils/Block"
import tmpl from './message.hbs'

interface IMessage {
    content:string
}

export class Message extends Block {
    constructor(props: IMessage) {
        super(props)
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
