import Handlebars from 'handlebars';
import '../../less/chats.less'
import chat__avatar from '../../../static/img/user_avatar.png'
// import {template} from '../../modules/chats.tmpl.js'
const tmpl = `  
<div class="chats__container">
    <div class="chatsList">
        <div class="profileLink"><a href="{{profileLink.url}}">{{profileLink.text}}</a></div>
        <input class="search" placeholder="Поиск"></input>
        <div class="chatsList">
            {{#each chatsList__items}}
                <div class="chatsList__item">
                    <div>
                        <img src={{this.img}} alt={{this.title}} class="chat__avatar">
                    </div>
                    <div>
                        <p class='chat__title'>{{this.title}}</p>
                        <p class='chat__text'>{{this.text}}</p>
                    </div>
                </div>
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
    chatsList__items: {
        chat1: {
            img: chat__avatar,
            title: 'Илья',
            text: 'Друзья, у меня для вас особенный выпуск новостей!...'
        },
        chat2: {
            img: chat__avatar,
            title: 'тет-а-теты',
            text: 'И Human Interface Guidelines и Material Design рекомендуют...'
        },
        chat3: {
            img: chat__avatar,
            title: '1, 2, 3',
            text: 'Миллионы россиян ежедневно проводят десятки часов свое...'
        },
        chat4: {
            img: chat__avatar,
            title: 'Design Destroyer',
            text: 'В 2008 году художник Jon Rafman  начал собирать...'
        },
        chat5: {
            img: chat__avatar,
            title: 'Стас Рогозин',
            text: 'Можно или сегодня или завтра вечером.'
        }
    },
    chooseChat: "Выберите чат чтобы отправить сообщение"
};

export const htmlChats = template(context)