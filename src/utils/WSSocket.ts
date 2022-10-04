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
        this.socketInst?.send(JSON.stringify({ type: 'get old', content: '0' }))
    }
    getOld() {
        if (this.socketInst?.readyState === 1) {
            this.socketInst?.send(JSON.stringify({ type: 'get old', content: '0' }))
        } else {
            this.socketInst?.onopen
        }
    }
    close() {

    }

    error(e: Event) {
        console.log(`Ошибка: ${e}`);
    }

    onmessage(event: MessageEvent) {

        const message = JSON.parse(event.data);
        if (Array.isArray(message) && message.length > 0) {
            store.set('messages', message);
        } else if (typeof message === 'object' && !Array.isArray(message) && message.type === 'message' && store.getState().messages) {
            store.set('messages', [message, ...store.getState().messages]);
        } else {
            store.set('messages', message);
        }

    }

    send(data: string) {
        this.socketInst?.send(data);
    }

    getState() {
        return this.socketInst?.readyState;
    }
}

export default WSSocket;