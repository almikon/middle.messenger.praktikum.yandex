import Block from "../../utils/Block"
import tmpl from './currentChat.hbs'

interface ICurrentChat {
    title: string,

}

export class CurrentChat extends Block {
    constructor(props: ICurrentChat) {
        super(props)
    }
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
