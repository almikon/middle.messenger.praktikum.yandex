import Block from "../../utils/Block"
import { withStore } from "../../utils/Store"
import { Messages } from "../Messages"
import { Modal } from "../Modal"
import { Title } from "../Title"
import tmpl from './currentChat.hbs'

interface ICurrentChat {
    title?: string,
}

class CurrentChatCore extends Block {
    constructor(props: ICurrentChat) {
        super(props)
    }
    protected init(): void {
        this.children.addUser = new Title({
            class: '',
            value: 'Добавить участника',
            events: {
                click: () => this.addUserToChat()
            }
        })
        this.children.deleteUser = new Title({
            class: '',
            value: 'Удалить участника',
            events: {
                click: () => this.deleteUserFromChat()
            }
        })
        this.children.modalAdd = new Modal({
            buttonValue: 'Добавить',
            inputId: 'addModal',
            inputType: 'text',
            inputClass: 'form__input',
            title: 'Добавить пользователя',
            label: 'Логин'
        })
        this.children.modalDelete = new Modal({
            buttonValue: 'Удалить',
            inputId: 'deleteModal',
            inputType: 'text',
            inputClass: 'form__input',
            title: 'Удалить пользователя',
            label: 'Логин'
        })

        this.children.messages = new Messages({
           messages:[ 
            {
                title:'test TITLE',
                text:'TEST text'}
            ]
        })
}

    protected componentDidUpdate(query: string): boolean {
        // (this.props)
        if(this.props.currentChatId &&
            this.props.user.id &&
            this.props.token){
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${this.props.user.id}/${this.props.currentChatId}/${this.props.token['token']}`);
        
        socket.addEventListener('open', () => {
            console.log('Соединение установлено');
          
            socket.send(JSON.stringify({
              content: 'Моё первое сообщение миру!',
              type: 'message',
            }));
          });
          
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
          
          socket.addEventListener('error', ()=>{
            console.log('Ошибка');
          });
    }
        const modal = document.querySelector(query) as HTMLElement
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none'
            }
        }

        return true
    }

    public addUserToChat() {
        const addModal = document.querySelector('.addModal') as HTMLElement

        addModal.style.display = 'block'
        this.componentDidUpdate('.addModal')
    }
    public deleteUserFromChat() {
        const deleteModal = document.querySelector('.deleteModal') as HTMLElement
        deleteModal.style.display = 'block'
        this.componentDidUpdate('.deleteModal')
    }
    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}

const withChatId = withStore((state) => ({ ...state }))
export const CurrentChat = withChatId(CurrentChatCore)
