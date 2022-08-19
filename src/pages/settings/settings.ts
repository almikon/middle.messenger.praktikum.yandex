import Handlebars from "handlebars";
import '../../less/settings.less'
import user__avatar from '../../../static/img/user_avatar.png'
import back_arrow from '../../../static/img/back_arrow.png'

const tmpl = `  
<div class="right__back">
    <img src={{back_arrow}} alt="Назад" class="back_arrow">
</div> 
<div class="container">
            <img src={{user__avatar}} alt="Ваш аватар" class="user__avatar">

            <p class="user__title">{{user}}</p>
            
            <div class-"user__settings">
                {{#each user__settings}}
                    <div class="user__settings-item"><p class="user__set_name">{{this.name}}</p> <p class="user__set_value">{{this.value}}</p></div>
                {{/each}}
            </div>

            {{#each options}}
                <div class="options__item"><a href={{this.url}}>{{this.item}}</a></div>
            {{/each}}
            
            <div class="options__exit"><a href="index.html">{{option__exit}}</a></div>
</div>
`
const template = Handlebars.compile(tmpl)
const context = {
    back_arrow: back_arrow,
    user__avatar: user__avatar,
    user: "Иван",
    user__settings: {
        email: {
            name: "Почта",
            value: "pochta@yandex.ru"
        },
        login: {
            name: "Логин",
            value: "ivanivanov"
        },
        firat_name: {
            name: "Имя",
            value: "Иван"
        },
        second_name: {
            name: "Фамилия",
            value: "Иванов"
        },
        display_name: {
            name: "Имя в чате",
            value: "Иван"
        },
        phone: {
            name: "Телефон",
            value: "+7 (909) 967 30 30"
        },
    },
    options: {
        change__data: {
            item: "Изменить данные",
            url: "changeSettings.html"
        },
        change__password: {
            item: "Изменить пароль",
            url: "changePassword.html"
        }
    },
    option__exit: "Выйти"
};

export const htmlSettings = template(context)