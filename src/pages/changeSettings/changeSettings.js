import Handlebars from "handlebars";
import '../../less/changeSettings.less'
import user__avatar from '../../../static/img/user_avatar.png'
import back_arrow from '../../../static/img/back_arrow.png'

const tmpl = `
<div class="right__back">
    <img src={{back_arrow}} alt="Назад" class="back_arrow">
</div> 
<div class="container">
    <div class="avatar">
        <img src={{user__avatar}} alt="Нажмите чтобы изменить" class="user__avatar" onclick="setAvatar()">
    </div>
    <p class="user__title">{{user}}</p>

    <div class-"user__settings">
        {{#each user__settings}}
        <div class="user__settings-item">
            <p class="user__set_name">{{this.name}}</p>
            <input class="settings__input" name={{this}} placeholder={{this.value}}>
        </div>
        {{/each}}
    </div>
    <div class="form__data-button">
    <input type="button" class="form__button" onclick="location.href='/settings.html'" value={{button__text}} />
    </div>
</div>
<div class="modal">

    <div class="modalContent">
        <p class="user__title">Загрузите файл</p>
        <a href="#">Выбрать файл на компьютере</a>

        <button class="form__button" onclick="changeAvatar()">Поменять</button>
    </div>

</div>
`
function changeAvatar() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
}
function setAvatar() {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    return modal
}

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
            value: "+7(909)967-30-30"
        },
    },
    button__text: "Сохранить"
};

export const htmlChangeSettings = template(context)