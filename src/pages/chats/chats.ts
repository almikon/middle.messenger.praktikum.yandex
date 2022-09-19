import '../../less/chats.less'
import companion__avatar from '../../../static/img/userAvatar.png'
import clip__img from '../../../static/img/clip.png'
import dots from '../../../static/img/dots.png'
import forwardArrow from '../../../static/img/forwardArrow.png'
import tmpl from './chats.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PATTERNS } from '../../constants'
import { withStore } from '../../utils/Store'
import { ChatItem } from '../../components/ChatItem'
import getData from '../../utils/GetData'
const context = {
    dots: dots,
    clip__img: clip__img,
    forwardArrow: forwardArrow,
    companion__avatar: companion__avatar,
    profileLink: {
        url: "settings.html",
        text: "Профиль >"
    },
    chooseChat: "Выберите чат чтобы отправить сообщение"
}
/*
    работу с чатами (список чатов пользователя, 
    создать новый чат, добавить пользователя в чат, 
    удалить пользователя из чата).
*/
export class ChatsPageCore extends Block {
    constructor() {
        super(context)
    }
    protected init(): void {
        console.log(this.props)
        this.children.newChatButton = new Button({
            class: 'form__button',
            events: {
                click: () => this.createNewChat()
            }
        })
        this.children.button = new Button({
            class: 'send__button',
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
    checkData() {
        const message = getData()
        console.log(message)
    }
    public createNewChat() {

    }
    render() {
        return this.compile(tmpl, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }))
export const ChatsPage = withUser(ChatsPageCore)