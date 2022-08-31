import '../../less/chats.less'
import chat__avatar from '../../../static/img/user_avatar.png'
import tmpl from './chats.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button';

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

export class chatsPage extends Block {
    constructor(props = context) {
        super('div', props);
    }

    init() {
        this.children.button = new Button({
            class: 'form__button',
            value: this.props.button__text,
            events: {
                click: () => {

                    console.log('clicked')
                }
            }
        });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}