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
import store, { withStore } from '../../utils/Store'
import getData from '../../utils/GetData'
import { NewChat } from '../../components/NewChat'
import { ChatItem } from '../../components/ChatItem'
import ChatsApiController from '../../controllers/ChatsApiController'

/*
TODO:
    список чатов пользователя, 
    создать новый чат, - OK
    добавить пользователя в чат, 
    удалить пользователя из чата
*/
export class ChatsPageCore extends Block {
    constructor() {
        super({ ...store.getState() })
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
    }
    sendData() {
        const message = getData()
        console.log(message)
    }
    protected componentDidUpdate(): boolean {
        
        this.children.chatItem = new ChatItem({
            title: 'this.props.chats.title'
        })
        return super.componentDidUpdate()
    }
    render() {
        return this.compile(tmpl, this.props);

    }
}

const withChats = withStore((state) => ({ ...state }))
export const ChatsPage = withChats(ChatsPageCore)