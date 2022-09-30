import { Link } from '../../components/Link';
import '../../less/errorPage.less'
import Block from '../../utils/Block';
import tmpl from './500.hbs'

export class Page500Page extends Block {
    constructor() {
        super({
            error: {
                title: "505",
                description: "Мы уже фиксим"
            }
        });
    }
    init() {
        this.children.link = new Link({
            to: '/messenger',
            label: 'Назад к чатам'
        })
    }
    render() {
        return this.compile(tmpl, this.props);
    }
}