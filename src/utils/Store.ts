import Block from "./Block";
import { EventBus } from "./EventBus";
import set from "./Set";

export enum StoreEvents {
    Updated = "Updated"
}

export class Store extends EventBus {
    private state: any = {}

    public getState() {
            console.log(this.state.user)
            return this.state
    }

    public set(path: string, value: any) {
        set(this.state, path, value);
        this.emit(StoreEvents.Updated, this.getState())
    }

    
}

const store = new Store();

export function withStore(mapStateToProps: (state: any) => any) {

    return function wrap(Component: typeof Block) {
        let previousState: any;

        return class WithStore extends Component {

            constructor(props: any) {
                previousState = mapStateToProps(store.getState());

                super({ ...props, ...previousState });

                store.on(StoreEvents.Updated, () => {
                    const stateProps = mapStateToProps(store.getState());

                    previousState = stateProps;

                    this.setProps({ ...stateProps });
                });
            }
        }

    }

}
export default store