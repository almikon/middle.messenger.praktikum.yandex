import Block from "../../utils/Block"
import tmpl from './input.hbs'

interface InputProps {
    classes: Array<string>,
    pattern: string
}

export class Input extends Block {
    constructor(props: InputProps) {
        super('input', props)
        const self = this.element
        this.props.classes.forEach(function (value: string) {
            self?.classList.add(value)
        })
        const checkContent = this.checkContent
        this.element?.addEventListener('blur', function (event) {
            const target = event.target as HTMLTextAreaElement
            checkContent(target.value, props.pattern)
        })
    }
    protected checkContent(value: string, pattern: string) {

        const reg = new RegExp(pattern)
        console.log(reg)
        console.log(reg.test(value))
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
