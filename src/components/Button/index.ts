
import Block from "../../utils/Block"
import tmpl from './button.hbs'

interface ButtonProps {
    class: string,
    value: string,
    goTo: string,
    type?: string
}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super('button', props)
        this.element?.classList.add(props.class)
        if (this.props.class === 'form__button') {
            this.element?.addEventListener('click', () => {
                this.getData()
                this.goTo(this.props.goTo)
            })
        }
        if (this.props.class === 'send__button') {
            this.element?.addEventListener('click', () => {
                this.getData()
            })
        }

    }
    protected goTo(adress: string) {
        document.location.pathname = adress
    }
    protected getData() {
        let res: Record<string, string> = {}
        const inputList = document.querySelectorAll('.required')

        inputList.forEach(input => {
            console.log(input)
            // if (!input) {
            //     res[input.name] = input.value
            // }
            // else {
            //     console.log(input.value)
            //     alert(`${input.name} не может быть пустым!`)
            // }
        })
        console.log(res)
    }
    protected checkIsEmpty() {

    }
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
