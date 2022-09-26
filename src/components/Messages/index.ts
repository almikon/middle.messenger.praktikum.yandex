import Block from "../../utils/Block";
import { withStore } from "../../utils/Store";
import tmpl from './messages.hbs'

interface IMessages {
    messages?: Record<string, string>
}

export class MessagesCore extends Block {
    constructor(props: IMessages) {
        super(props)
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}

const withMessages = withStore((state) => ({ ...state }))
export const messages = withMessages(MessagesCore)