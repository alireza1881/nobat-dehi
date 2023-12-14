const template = document.createElement("template")
template.innerHTML=`
    <link rel="stylesheet" href="component/popUp/popUp.css">
    <div class="pop-up-box">
        <h1>salam</h1>
    </div>
    `
        // <slot name="popUp-text"></slot>
    class PopUp extends HTMLElement{
        constructor(){
            super()
    
            this.attachShadow({mode: "open"})
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        }

    }
    export {PopUp}