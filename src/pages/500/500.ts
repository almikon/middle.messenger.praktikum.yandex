import '../../less/errorPage.less'
import Block from '../../utils/Block';
import tmpl from './500.hbs'

export class Page500Page extends Block{
    constructor() {
        super({
            error: {
                title: "505",
                description: "Мы уже фиксим"
            },
            footerNote: {
                url: "./chats.html",
                text: "Назад к чатам"
            }
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}