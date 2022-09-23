import Block from "../../utils/Block"
import tmpl from './ChatItem.hbs'

interface IChatItem {
    title: string,
    events:{
        click: ()=>void
    }
}

export class ChatItem extends Block {
    constructor(props: IChatItem) {
        super(props)
    }
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
