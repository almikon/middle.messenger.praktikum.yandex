import Block from "../../utils/Block";
import tmpl from './avatar.hbs'
interface IAvatar {
    userAvatar: string,
    altText: string,
    events?: {
        click: () => void
    }
}
export class Avatar extends Block {
    constructor(props: IAvatar) {
        super(props)
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
