import '../../less/userSettings.less'
import user__avatar from '../../../static/img/user_avatar.png'
import back_arrow from '../../../static/img/back_arrow.png'
import tmpl from './changePassword.hbs'

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

export const htmlChangePassword = tmpl(context)