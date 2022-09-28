import '../../less/chats.less'
import clip__img from '../../../static/img/clip.png'
import forwardArrow from '../../../static/img/forwardArrow.png'
import tmpl from './chats.hbs'
import Block from '../../utils/Block';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { PATTERNS } from '../../constants'
import store, { withStore } from '../../utils/Store'
import { NewChat } from '../../components/NewChat'
import ChatsApiController from '../../controllers/ChatsApiController'
import { ChatList } from '../../components/ChatList'
import { currentChat } from '../../components/CurrentChat';
import { ChatItem } from '../../components/ChatItem';
import { Link } from '../../components/Link';
import WSSocket from '../../utils/WSSocket';

export class ChatsPageCore extends Block {
    sockets: WSSocket[] = []
    chatsId: number[] = []
    tokens: string[] = []
    constructor() {
        super({
            ...store.getState(),
            clip__img: clip__img,
            forwardArrow: forwardArrow
        })
    }
    protected init(): void {
        ChatsApiController.getChats()
        this.children.link = new Link({
            to: '/settings',
            label: 'Профиль ->'
        })

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
            pattern: PATTERNS.NOT_EMPTY
        })

        this.children.currentChat = new currentChat({
            title: 'Выберите чат'
        })

    }
    sendData() {

        const message = document.querySelector('input.message') as HTMLInputElement
        try {
            if (this.props.curSocket.getState() === 1) {
                this.props.curSocket.send(JSON.stringify({
                    content: message.value,
                    type: 'message',
                }))
            } else {
                this.props.curSocket.onopen()
            }
            message.value = ''
        }
        catch {
            console.log('Не выбран чат!')
        }
    }

    protected componentDidUpdate(): boolean {


        if (this.props.chats) {
            const newChats: Array<ChatItem> = []
            this.props.chats.forEach((chat: any) => {
                newChats.push(new ChatItem({
                    title: chat.title,
                    events: {
                        click: () => this.chooseChat(chat.title, chat.id)
                    }
                }
                ))
            })

            this.children.chatList = new ChatList({
                pr: this.children,
                chats: newChats
            })
        }
        this.getSocket()
        return true
    }
    getSocket() {
        if (this.props.currentChat?.id &&
            this.props.user.id &&
            this.props.token &&
            !this.tokens.includes(this.props.token)) {
            if (!this.chatsId.includes(this.props.currentChat?.id)) {
                this.chatsId.push(this.props.currentChat?.id);
                const socket = new WSSocket(this.props.currentChat?.id, this.props.user.id, this.props.token['token'])
                this.sockets.push(socket)
                this.tokens.push(this.props.token)
                store.set(`curSocket`, socket)
            }
        }
    }
    public async chooseChat(title: string, id: number) {
        const currentChat = { title: title, id: id }
        await ChatsApiController.chatToken(id)
        store.set('currentChat', currentChat)
        this.children.currentChat.setProps({ title: `${currentChat.title} : ${currentChat.id}` })
        this.children.currentChat.children.messages.setProps({ messages: [] })
        store.set('messages', store.getState().curSocket.getOld() || [])
        this.getSocket()
        this.children.currentChat.children.messages.setProps({ messages: store.getState().messages })
        console.log(this.props)
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

const withChats = withStore((state) => ({ ...state }))
export const ChatsPage = withChats(ChatsPageCore)