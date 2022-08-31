
import Block from "../../utils/Block"
import tmpl from './button.hbs'

interface ButtonProps {
    class: string,
    value: string,
    events: {
        click: () => void
    }
}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super('button', props)
        this.element?.classList.add(props.class)
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
