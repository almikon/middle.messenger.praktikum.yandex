import '../../less/errorPage.less'
import tmpl from './500.hbs'

const context = {
    error: {
        title: "505",
        description: "Мы уже фиксим"
    },
    footerNote: {
        url: "../chats/chats.html",
        text: "Назад к чатам"
    }
};

export const html500 = tmpl(context)