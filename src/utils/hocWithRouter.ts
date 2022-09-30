import Block from '../utils/Block';
import Router from '../utils/Router';

export function withRouter(Component: typeof Block) {
    type TProps = typeof Component extends typeof Block<infer P extends Record<string, any>> ? P : any;

    return class WithRouter extends Component {
        constructor(props: TProps & IPropsWithRouter) {
            super({ ...props, router: Router });
        }
    }
}

export interface IPropsWithRouter {
    router: typeof Router;
}
