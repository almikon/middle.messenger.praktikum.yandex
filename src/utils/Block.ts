import { EventBus } from "./EventBus";
import { nanoid } from 'nanoid';

class Block<P extends Record<string, any> = any> {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    public id = nanoid(4);
    protected props: Record<string, any>;
    public children: Record<string, Block<P>>;
    public arrayChildren: Record<string, Block[]>
    private eventBus: () => EventBus;
    private _element: HTMLElement | null = null;


    public constructor(propsWithChildren: P) {
        const eventBus = new EventBus();

        const { props, children, arrayChildren } = this._getChildrenAndProps(propsWithChildren);

        this.children = children;
        this.props = this._makePropsProxy(props);
        this.arrayChildren = arrayChildren
        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    private _getChildrenAndProps(childrenAndProps: P) {
        const props: Record<string, any> = {}
        const children: Record<string, Block<P>> = {}
        const arrayChildren: Record<string, Block[]> = {}
        Object.entries(childrenAndProps).forEach(([key, value]) => {

            if (Array.isArray(value) && value.every((element: unknown) => element instanceof Block)) {
                arrayChildren[key] = value as Block[];
            } else if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { props: props as P, children, arrayChildren };
    }

    private _addEvents() {
        const { events = {} } = this.props as { events: Record<string, () => void> };
        Object.keys(events).forEach(eventName => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }


    private _init() {
        this.init();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init() {
    }

    private _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() { }

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);

        Object.values(this.children).forEach(child => child.dispatchComponentDidMount());
    }

    private _componentDidUpdate() {
        if (this.componentDidUpdate()) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate() {
        return true;
    }

    setProps = (nextProps: any) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);

        this.eventBus().emit(Block.EVENTS.FLOW_CDU);
    };

    get element() {
        return this._element;
    }

    private _render() {
        const fragment = this.render();

        const newElement = fragment.firstElementChild as HTMLElement;

        if (this._element && newElement) {
            this._element.replaceWith(newElement);
        }

        this._element = newElement;

        this._addEvents();
    }

    protected compile(template: (context: any) => string, context: any) {
        const contextAndStubs = { ...context };

        Object.entries(this.arrayChildren).forEach(([arrayName, array]) => {
            Object.entries(array).forEach(([, component]) => {
                if (Array.isArray(contextAndStubs[arrayName])) {
                    contextAndStubs[arrayName].push(`<div data-id="${component.id}"></div>`);
                } else {
                    contextAndStubs[arrayName] = [`<div data-id="${component.id}"></div>`];
                }
            });
        });

        Object.entries(this.children).forEach(([name, component]) => {
            contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
        });

        const html = template(contextAndStubs);

        const temp = document.createElement('template');

        temp.innerHTML = html;

        const replace = (component: Block<P>) => {
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

            if (!stub) {
                return;
            }

            component.getContent()?.append(...Array.from(stub.childNodes));
            stub.replaceWith(component.getContent()!);
        };

        Object.entries(this.arrayChildren).forEach(([, array]) => {
            Object.entries(array).forEach(([, component]) => {
                replace(component);
            });
        });

        Object.entries(this.children).forEach(([, component]) => {
            replace(component);
        });


        return temp.content;
    }

    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    getContent() {
        return this.element;
    }

    private _makePropsProxy(props: any) {
        return new Proxy(props, {
            set(target, prop, value) {
                target[prop] = value
                return target[prop]
            },
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
        })

    }

    show() {
        this.getContent()!.style.display = "block";
    }

    hide() {
        this.getContent()!.style.display = "none";
    }
}

export default Block;
