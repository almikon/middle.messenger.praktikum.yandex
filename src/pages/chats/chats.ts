import '../../less/chats.less'
import chat__avatar from '../../../static/img/user_avatar.png'
import companion__avatar from '../../../static/img/user_avatar.png'
import clip__img from '../../../static/img/clip.png'
import dots from '../../../static/img/dots.png'
import forward__arrow from '../../../static/img/forward_arrow.png'
import camera from '../../../static/img/camera.png'
import tmpl from './chats.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

const context = {
    date: '19 июня',
    currentChat__main_messages: {
        msg1: {
            author: '',
            image: false,
            content: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории —
             НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 
             500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. 
             <br>
             Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. 
             Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`
        },
        msg2: {
            author: '',
            image: true,
            content: camera
        },
        msg3: {
            author: 'me',
            image: false,
            content: 'Круто!'
        }
    },
    dots: dots,
    clip__img: clip__img,
    forward__arrow: forward__arrow,
    companion__avatar: companion__avatar,
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
        },

    },
    chooseChat: "Выберите чат чтобы отправить сообщение"
};

export class chatsPage extends Block {
    constructor(props = context) {
        super('div', props);
    }
    protected init(): void {
        this.children.button = new Button({
            class: 'send__button'
        });
        this.children.input = new Input({
            name: 'Message',
            classes: ['message', 'required'],
            pattern: '^(?!\s*$).+'
        })
    }
    render() {
        return this.compile(tmpl, this.props);
    }
}