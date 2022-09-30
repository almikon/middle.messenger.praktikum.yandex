import Block from "../../utils/Block";
import tmpl from './title.hbs'
interface ITitle {
    value: string,
    class: string,
    events?:{
        click:()=>void
    }
}
export class Title extends Block {
    constructor(props: ITitle) {
        super(props)
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
