import '../../less/errorPage.less'
import Block from '../../utils/Block';
import tmpl from './404.hbs'

export class Page404Page extends Block{
    constructor() {
        super({
            error: {
                title: "404",
                description: "Не туда попали"
            },
            footerNote: {
                url: "./messenger",
                text: "Назад к чатам"
            }
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}