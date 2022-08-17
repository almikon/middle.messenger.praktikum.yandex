import Handlebars from 'handlebars';
import './login.less'
const tmpl = `<div class="container">
    <form class="form__data">
        <div class="form__data-inputs">
            <div class="form__title">{{title}}</div>
            {{#each inputs}}
            <label> {{this.id}}<br>
                <input class="form__input" type="{{this.type}}" name="{{this.name}}" placeholder="{{this.placeholder}}">
            </label>
            {{/each}}
        </div>
        <div class="form__data-button">
            <input type="button" class="form__button" onclick="location.href='/chats.html'" value={{button__text}} />
            <div class="footerNote"><a href="{{footerNote.url}}">{{footerNote.text}}</a></div>
        </div>
    </form>
</div>`
const template = Handlebars.compile(tmpl)
const context = {
    title: "Вход",
    inputs: {
        login: {
            id: "Логин",
            type: "text",
            name: "login",
            placeholder: "Логин"
        },
        password: {
            id: "Пароль",
            type: "password",
            name: "password",
            placeholder: "Пароль"
        }
    },
    button__text: "Вход",
    footerNote: {
        text: "Нет аккаунта?",
        url: "signUp.html"
    },
    url: "chats.html"
};

export const htmlLogin = template(context)