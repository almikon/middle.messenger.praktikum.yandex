
import Block from "../../utils/Block"
import tmpl from './button.hbs'

type ButtonProps = {
    class: string,
    value?: string,
    goTo?: string,
    events: {
        click: () => void
    }
}

export class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props)
        this.element?.classList.add(props.class)
        this.props.events = {
            click: () => { }
        }
    }
    public click() {
        this.props.events.click()
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
