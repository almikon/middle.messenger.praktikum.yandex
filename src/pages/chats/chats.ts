import '../../less/chats.less'
import chat__avatar from '../../../static/img/userAvatar.png'
import companion__avatar from '../../../static/img/userAvatar.png'
import clip__img from '../../../static/img/clip.png'
import dots from '../../../static/img/dots.png'
import forwardArrow from '../../../static/img/forwardArrow.png'
import camera from '../../../static/img/camera.png'
import tmpl from './chats.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PATTERNS } from '../../constants'
const context = {
    date: '19 июня',
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
    },
    dots: dots,
    clip__img: clip__img,
    forwardArrow: forwardArrow,
    companion__avatar: companion__avatar,
    profileLink: {
        url: "settings.html",
        text: "Профиль >"
    },
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
    chooseChat: "Выберите чат чтобы отправить сообщение"
}

export class ChatsPage extends Block{
    constructor() {
        super(context);
    }
    protected init(): void {
        this.children.button = new Button({
            class: 'send__button',
            value: this.props.button__text,
            goTo: this.props.goTo,
            events: {
                click: () => this.checkData()
            }
        }
        )
        this.children.input = new Input({
            name: 'Message',
            classes: ['message', 'required'],
            pattern: PATTERNS.NOTEMPTY
        })
    }
    public checkData() {
        let res: Record<string, string> = {}
        const inputList = document.querySelectorAll('input')
        inputList.forEach(input => {
            if (input.classList.contains('required')) {
                if (input.value.length > 0) {
                    res[input.name] = input.value
                }
                else {
                    console.log(`${input.name} не может быть пустым!`)
                    input.classList.add('wrong')
                }
            }
        })
        console.log(res)
    }
    render() {
        return this.compile(tmpl, this.props);
    }
}