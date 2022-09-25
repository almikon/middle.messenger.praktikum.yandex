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
import { currentChat } from '../../components/CurrentChat';
import { ChatItem } from '../../components/ChatItem';

export class ChatsPageCore extends Block {
    sockets: string[] = []
    constructor() {
        super({
            ...store.getState(),
            clip__img: clip__img,
            forwardArrow: forwardArrow,
            profileLink: {
                url: '/settings',
                text: 'Профиль'
            }
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
            pattern: PATTERNS.NOT_EMPTY
        })

        this.children.currentChat = new currentChat({
            title: 'Выберите чат'
        })

    }
    sendData() {
        const message = getData()

        console.log(message)
    }
    protected componentDidUpdate(): boolean {
        if (this.props.chats) {
            const newChats: Array<ChatItem> = []
            console.log(this.props.chats)
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
        console.log(this.props)
        if (this.props.currentChat?.id &&
            this.props.user.id &&
            this.props.token) {
            if (!this.sockets.includes(this.props.currentChat?.id)) {
                this.sockets.push(this.props.currentChat?.id)
                const socketId = `wss://ya-praktikum.tech/ws/chats/${this.props.user.id}/${this.props.currentChat.id}/${this.props.token['token']}`
                const socket = new WebSocket(socketId);
                socket.addEventListener('open', () => {
                    console.log('Соединение установлено');
                })

                socket.addEventListener('close', event => {
                    if (event.wasClean) {
                        console.log('Соединение закрыто чисто');
                    } else {
                        console.log('Обрыв соединения');
                    }

                    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
                });

                socket.addEventListener('message', event => {
                    console.log('Получены данные', event.data);
                });

                socket.addEventListener('error', () => {
                    console.log('Ошибка');
                });
            }
        }
    }
    render() {
        return this.compile(tmpl, this.props);

    }
}

const withChats = withStore((state) => ({ ...state }))
export const ChatsPage = withChats(ChatsPageCore)