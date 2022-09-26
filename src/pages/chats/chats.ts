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

export class ChatsPageCore extends Block {
    sockets: string[] = []
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

        this.props.curSocket.send(JSON.stringify({
            content: message.value,
            type: 'message',
        }))
        message.value = ''
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
        return true
    }
    public chooseChat(title: string, id: number) {
        const currentChat = { title: title, id: id }
        store.set('currentChat', currentChat)
        ChatsApiController.chatToken(id)
        this.children.currentChat.setProps({ title: currentChat.title })
        if (this.props.currentChat?.id &&
            this.props.user.id &&
            this.props.token) {
            if (this.props.curSocket && this.props.curSocket.url !==
                `wss://ya-praktikum.tech/ws/chats/${this.props.user.id}/${this.props.currentChat.id}/${this.props.token['token']}`) {
                this.props.curSocket.close()
            }
            const socketId = `wss://ya-praktikum.tech/ws/chats/${this.props.user.id}/${this.props.currentChat.id}/${this.props.token['token']}`
            const socket = new WebSocket(socketId);
            socket.addEventListener('open', () => {
                console.log('Соединение установлено')
            })
            const messagesList: Record<string, string> = {}
            socket.addEventListener('close', event => {
                if (event.wasClean) {
                    console.log('Соединение закрыто чисто');
                } else {
                    console.log('Обрыв соединения');
                }

                console.log(`Код: ${event.code} | Причина: ${event.reason}`);
            });

            socket.addEventListener('message', event => {
                if (event.data && event.data !== 'WS token is not valid') {
                    const newDate = event.data.split(',')[2].split(':"')[1].slice(0, -1)
                    const newMessage = event.data.split(',')[0].split(':')[1].slice(1, -1)
                    console.log(`${newMessage}`)
                    messagesList[newDate] = newMessage

                    this.children.currentChat.children.messages.setProps({ messages: messagesList })
                }
            });

            socket.addEventListener('error', () => {
                console.log('Ошибка');
            });

            store.set(`curSocket`, socket)
        }
    }

    render() {
        return this.compile(tmpl, this.props);

    }
}

const withChats = withStore((state) => ({ ...state }))
export const ChatsPage = withChats(ChatsPageCore)