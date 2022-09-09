import '../../less/errorPage.less'
import Block from '../../utils/Block';
import tmpl from './500.hbs'

const context = {
    error: {
        title: "505",
        description: "Мы уже фиксим"
    },
    footerNote: {
        url: "./chats.html",
        text: "Назад к чатам"
    }
};

export class Page500Page extends Block {
    constructor(props = context) {
        super('div', props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}