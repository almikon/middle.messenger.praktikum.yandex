import Handlebars from 'handlebars';
import '../../less/chats.less'
const tmpl = `  
<div class="chats__container">
    <div class="chatsList">
        <div class="profileLink"><a href="{{profileLink.url}}">{{profileLink.text}}</a></div>
        <input class="search" placeholder="Поиск"></input>
        <div class="chatsList__list">
            {{#each chatsList__list}}
                <div class="chatsList__item">{{chatsList__item}}</div>
            {{/each}}
        </div>
    </div>
    <div class="currentChat">
        {{chooseChat}}
    </div>
</div> `


const template = Handlebars.compile(tmpl)
const context = {
    profileLink: {
        url: "settings.html",
        text: "Профиль >"
    },
    chooseChat: "Выберите чат чтобы отправить сообщение"
};

export const htmlChats = template(context)