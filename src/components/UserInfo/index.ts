import Block from "../../utils/Block";
import tmpl from './UserInfo.hbs'
interface IUserInfo {
    name: string,
    value: string
}
export class UserInfo extends Block {
    constructor(props: IUserInfo) {
        super(props)
    }

    protected render(): DocumentFragment {
        return this.compile(tmpl, this.props)
    }
}
