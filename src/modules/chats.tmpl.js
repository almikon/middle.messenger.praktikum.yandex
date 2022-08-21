export const template = `<div class="chats__container">
    <div class="chatsList">
        <div class="profileLink"><a href="{{profileLink.url}}">{{profileLink.text}}</a></div>
        <input class="search" placeholder="Поиск"></input>
        <div class="chatsList">
            {{#each chatsList__items}}
            <div class="chatsList__item">
                <div>
                    <img src={{this.img}} alt={{this.title}} class="chat__avatar">
                </div>
                <div>
                    <p class='chat__title'>{{this.title}}</p>
                    <p class='chat__text'>{{this.text}}</p>
                </div>
            </div>
            {{/each}}
        </div>
    </div>
    <div class="currentChat">
        {{chooseChat}}
    </div>
</div>`