let name = null
let date = null
let template = document.createElement("template")
template.innerHTML =`
    <link rel="stylesheet" href="component/apoints/apoints.css">
    <span class="apoint">
        <label class="name">نام:<label></label></label>
        <label class="date">تاریخ:<label></label></label>
    </span>
`

class Apoint extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        name = this.shadowRoot.querySelector(".apoint .name label")
        date = this.shadowRoot.querySelector(".apoint .date label")
        name.innerHTML = this.getAttribute("name-entry")
        date.innerHTML = this.getAttribute("date-entry")
    }
    observedAttributes(){
        return["name-entry", "date-entry"]
    }
}
export {Apoint}