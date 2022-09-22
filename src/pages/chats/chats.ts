import '../../less/chats.less'
import clip__img from '../../../static/img/clip.png'
import forwardArrow from '../../../static/img/forwardArrow.png'
import tmpl from './chats.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PATTERNS } from '../../constants'
import store, { withStore } from '../../utils/Store'
import getData from '../../utils/GetData'
import { NewChat } from '../../components/NewChat'
import ChatsApiController from '../../controllers/ChatsApiController'
import { ChatList } from '../../components/ChatList'
import { CurrentChat } from '../../components/CurrentChat';

export class ChatsPageCore extends Block {
    constructor() {
        super({ ...store.getState(),
        clip__img: clip__img,
        forwardArrow:forwardArrow,
        profileLink: {
            url: '/settings',
            text: 'Профиль'}
 })
    }
    protected init(): void {
        ChatsApiController.getChats()

        this.children.newChat = new NewChat({
            title: 'Создать новый чат',
            buttonClass: 'form__button',
            buttonValue: 'Создать',
            inputName: 'title',
            id: 'newChatTitle',
            inputClasses: ['form__input', 'required']
        })
        this.children.button = new Button({
            class: 'send__button',
            events: {
                click: () => this.sendData()
            }
        })

        this.children.input = new Input({
            name: 'Message',
            classes: ['message', 'required'],
            pattern: PATTERNS.NOTEMPTY
        })

        this.children.currentChat = new CurrentChat({
                title: 'Выберите чат'
        })

    }
    sendData() {
        const message = getData()
        console.log(message)
    }
    protected componentDidUpdate(): boolean {
        if(this.props.chats){
            this.children.chatList = new ChatList({
                pr: this.children,
                chats: this.props.chats
            })
        }

    return super.componentDidUpdate()
}
    render() {
        return this.compile(tmpl, this.props);

    }
}

const withChats = withStore((state) => ({ ...state }))
export const ChatsPage = withChats(ChatsPageCore)