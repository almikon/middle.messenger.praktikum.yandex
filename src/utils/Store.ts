import { EventBus } from "./EventBus";
import set from "./Set";

export enum StoreEvents {
    Updated = "Updated"
}

class Store extends EventBus {
    private state: Record<any,any> = {}

    public getState():Record<any,any> {
        return this.state;
    }

    public set(path: string, value: any) {
        set(this.state, path, value);
        this.emit(StoreEvents.Updated)
    }
}

export default new Store()