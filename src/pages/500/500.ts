import Handlebars from 'handlebars';
import '../../less/errorPage.less'

const tmpl = `  
<div class="container">
    <div class="error__title">{{error.title}}</div>
    <div class="error__description"> {{error.description}}</div>
    
    <div class="footerNote"><a href="{{footerNote.url}}">{{footerNote.text}}</a></div>
</div> 
`

const template = Handlebars.compile(tmpl)
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

export const html500 = template(context)