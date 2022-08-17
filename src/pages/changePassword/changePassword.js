import Handlebars from "handlebars";
import './changePassword.less'
import user__avatar from '../../../static/img/user_avatar.png'
import back_arrow from '../../../static/img/back_arrow.png'

const tmpl = `  
<div class="right__back">
    <img src={{back_arrow}} alt="Назад" class="back_arrow">
</div> 
<div class="container">
            <img src={{user__avatar}}  alt="Нажмите чтобы изменить" class="user__avatar">

            <p class="user__title">{{user}}</p>
            
            <div class-"user__settings">
                {{#each user__settings}}
                    <div class="user__settings-item">
                        <p class="user__set_name">{{this.name}}</p> 
                        <input class="settings__input" type="password" name={{this}} placeholder={{this.value}}>
                    </div>
                {{/each}}
            </div>
            <div class="form__data-button">
            <input type="button" class="form__button" onclick="location.href='/settings.html'" value={{button__text}} />
            </div>
</div>
`
const template = Handlebars.compile(tmpl)
const context = {
    back_arrow: back_arrow,
    user__avatar: user__avatar,
    user: "Иван",
    user__settings: {
        oldPassword: {
            name: "Старый пароль",
            value: "**********"
        },
        newPassword: {
            name: "Новый пароль",
            value: "**********"
        },
        checkNewPassword: {
            name: "Повторите новый пароль",
            value: "**********"
        },
    },
    button__text: "Сохранить"
};

export const htmlChangePassword = template(context)