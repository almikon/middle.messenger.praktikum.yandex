import store from "./Store";


class WSSocket {
    private socketInst: WebSocket | null = null;
    constructor(chatId: number, userId: number, token: string) {
        const soketUrl = `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`;
        const soket = new WebSocket(soketUrl);

        soket.onmessage = this.onmessage.bind(this);
        soket.onerror = this.error.bind(this);
        soket.onclose = this.close.bind(this);
        soket.onopen = this.onopen.bind(this);
        this.socketInst = soket;
    }

    onopen() {
        console.log('Соединение установлено');
        this.send(JSON.stringify({ type: 'ping' }));
    }

    close() {
        console.log('Соединение закрыто');
    }

    error(e: Event) {
        console.log(`Ошибка: ${e}`);
    }

    onmessage(event: MessageEvent) {
        console.log(event.data)
        return
        const message = JSON.parse(event.data);
        if (Array.isArray(message) && message.length > 0) {
            store.set('newMessage', message);
        } else if (typeof message === 'object' && !Array.isArray(message) && message.type === 'message') {
            store.set('newMessage', message);
        }
    }

    send(data: string) {
        this.socketInst?.send(data);
    }

    getStatus() {
        return this.socketInst?.readyState;
    }
}

export default WSSocket;