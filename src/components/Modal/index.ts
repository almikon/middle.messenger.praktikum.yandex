import ProfileApiController from "../../controllers/ProfileApiController"
import Block from "../../utils/Block"
import { Button } from "../Button"
import tmpl from './modal.hbs'

export class Modal extends Block{
    init(){this.children.changeButton = new Button({
        class: 'form__button',
        value:'Поменять',
        events: {
            click: () => this.changeAvatar()
        }
        })
    }    
    public changeAvatar(){
        const avatar = document.querySelector('#uploadAvatarImage') as HTMLInputElement
        if(avatar.files){
            const avatarFile = avatar.files[0]
            let formData = new FormData()
            formData.append('avatar', avatarFile)
            ProfileApiController.changeAvatar(formData)
        }else{
            alert('error')
        }

    }
    protected render(): DocumentFragment {

        return this.compile(tmpl, this.props)
    }
}
