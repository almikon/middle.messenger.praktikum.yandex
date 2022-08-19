import Handlebars from 'handlebars';
import '../../less/form.less'

const tmpl = `  
<div class="container">
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
</div> 
`

const template = Handlebars.compile(tmpl)
const context = {
    title: "Регистрация",
    inputs: {
        email: {
            id: "Почта",
            type: "email",
            name: "email",
            placeholder: "pochta@yandex.ru"
        },
        login: {
            id: "Логин",
            type: "text",
            name: "login",
            placeholder: "Логин"
        },
        first_name: {
            id: "Имя",
            type: "text",
            name: "first_name",
            placeholder: "Иван"
        },
        second_name: {
            id: "Фамилия",
            type: "text",
            name: "second_name",
            placeholder: "Иванов"
        },
        phone: {
            id: "Телефон",
            type: "phone",
            name: "phone",
            placeholder: "+7 (909) 967 30 30"
        },
        password: {
            id: "Пароль",
            type: "password",
            name: "password",
            placeholder: "Пароль"
        },
        checkPassword: {
            id: "Пароль (ещё раз)",
            type: "password",
            name: "checkPassword",
            placeholder: "Пароль (ещё раз)"
        }
    },
    button__text: "Зарегистрироваться",
    footerNote: {
        text: "Войти",
        url: "../index/index.html"
    }
};

export const htmlSignUp = template(context)