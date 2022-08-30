import '../../less/changeSettings.less'
import user__avatar from '../../../static/img/user_avatar.png'
import back_arrow from '../../../static/img/back_arrow.png'
import tmpl from './changeSettings.hbs'

// function changeAvatar() {
//     const modal = document.querySelector(".modal");
//     modal.style.display = "none";
// }
// function setAvatar() {
//     const modal = document.querySelector(".modal");
//     modal.style.display = "block";
//     return modal
// }

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

export const htmlChangeSettings = tmpl(context)