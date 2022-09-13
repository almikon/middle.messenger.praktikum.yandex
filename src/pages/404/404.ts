import '../../less/errorPage.less'
import Block from '../../utils/Block';
import tmpl from './404.hbs'

const context = {
    error: {
        title: "404",
        description: "Не туда попали"
    },
    footerNote: {
        url: "./chats.html",
        text: "Назад к чатам"
    }
};
type Page404Props = {

}
export class Page404Page extends Block<Page404Props> {
    constructor(props = context) {
        super('div', props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}