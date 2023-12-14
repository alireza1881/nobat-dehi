const template = document.createElement("template")
template.innerHTML=`
    <link rel="stylesheet" href="component/chatIcon/chatIcon.css">
    <a href="subport.html" class="chat-float-icon">
        <span class="chat-icon-shape">
            <span class="detail-box">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </span>
    </a>
`
class ChatIcon extends HTMLElement{
    constructor(){
        super()

        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
export {ChatIcon}