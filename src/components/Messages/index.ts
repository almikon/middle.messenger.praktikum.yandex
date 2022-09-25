import Block from "../../utils/Block";
import tmpl from './messages.hbs'
interface IMessages {
    messages: Record<string, string>[]
}
export class Messages extends Block {
    constructor(props: IMessages) {
        super(props)
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}