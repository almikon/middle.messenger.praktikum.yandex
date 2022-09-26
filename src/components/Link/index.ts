import Block from '../../utils/Block';
import Router from '../../utils/Router';
import tmpl from './link.hbs';

interface ILinkProps {
    to: string;
    label: string;
    events?: {
        click: () => void;
    };
}

export class Link extends Block {
    constructor(props: ILinkProps) {
        super({
            ...props,
            events: {
                click: () => this.navigate()
            },
        });
    }

    navigate() {
        Router.go(this.props.to);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}