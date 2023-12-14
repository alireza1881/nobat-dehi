let msgBox = null
let time = null
let now = null
let hour = null
let min = null

const templateSubport = document.createElement("template")
templateSubport.innerHTML = `
    <link rel="stylesheet" href="component/msg/msg.css">
    <div class="subport-msg">
        <p></p>
        <div class="msg-detail">
            <span class="msg-time"></span>
        </div>
    </div>
`
const templateUser = document.createElement("template")
templateUser.innerHTML = `
    <link rel="stylesheet" href="component/msg/msg.css">
    <div class="user-msg">
        <p></p>
        <div class="msg-detail">
            <span class="msg-time"></span>
        </div>
    </div>
`
class SubportMsg extends HTMLElement{
    constructor(){
        super()
        
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(templateSubport.content.cloneNode(true))
    }
    connectedCallback(){
        // userMsg = msgValue
        now = new Date
        hour = now.getHours()
        min = now.getMinutes()
        msgBox = this.shadowRoot.querySelector("p")
        time = this.shadowRoot.querySelector(".msg-time")
        msgBox.innerHTML = this.getAttribute("subport-massage")
        time.innerHTML = `${hour}:${min}`
    }
    static observedAttributes(){
        return ["subport-massage"]
    }
}
class UserMsg extends HTMLElement{
    constructor(){
        super()

        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(templateUser.content.cloneNode(true))
    }
    connectedCallback(){
        // userMsg = msgValue
        now = new Date
        hour = now.getHours()
        min = now.getMinutes()
        msgBox = this.shadowRoot.querySelector("p")
        time = this.shadowRoot.querySelector(".msg-time")
        msgBox.innerHTML = this.getAttribute("user-massage")
        time.innerHTML = `${hour}:${min}`
    }
    static observedAttributes(){
        return ["user-massage"]
    }

}
export {SubportMsg, UserMsg}