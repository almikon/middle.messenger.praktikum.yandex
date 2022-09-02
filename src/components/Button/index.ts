
import Block from "../../utils/Block"
import tmpl from './button.hbs'

interface ButtonProps {
    class: string,
    value?: string,
    goTo?: string
}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super('button', props)
        this.element?.classList.add(props.class)
        this.element?.addEventListener('click', () => {
            this.checkData()
        })

    }
    protected checkData() {
        this.getData()
        const inputs = document.querySelectorAll('.wrong')
        if (inputs.length) {
            console.log('Есть ошибки')
        } else {
            if (this.props.goTo) {
                this.goTo(this.props.goTo)
            }
        }
    }
    protected goTo(adress: string) {
        document.location.pathname = adress
    }
    protected getData() {
        let res: Record<string, string> = {}
        const inputList = document.querySelectorAll('input')
        inputList.forEach(input => {
            if (input.classList.contains('required')) {
                if (input.value.length > 0) {
                    res[input.name] = input.value
                }
                else {
                    console.log(`${input.name} не может быть пустым!`)
                    input.classList.add('wrong')
                }
            }
        })
        console.log(res)
    }
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
