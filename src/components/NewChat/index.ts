import Block from "../../utils/Block"
import tmpl from './ChatItem.hbs'

interface INewChat {
    title: string
}

export class NewChat extends Block {
    constructor(props: INewChat) {
        super(props)
    }
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
