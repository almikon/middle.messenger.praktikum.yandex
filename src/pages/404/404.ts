import '../../less/errorPage.less'
import tmpl from './404.hbs'

const context = {
    error: {
        title: "404",
        description: "Не туда попали"
    },
    footerNote: {
        url: "../chats/chats.html",
        text: "Назад к чатам"
    }
};

export const html404 = tmpl(context)