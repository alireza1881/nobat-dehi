const template = document.createElement("template")
template.innerHTML=`
    <link rel="stylesheet" href="./component/goUp/goUp.css">
    <spam class="go-up-float-icon">
        <span class="circle">
            <span class="arrow"></span>
        </span>
    </spam>
`
class GoUp extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.addEventListener("click", () =>{
            console.log("clicked on go up component")
            window.scrollTo(0,0)
        })
    }
}
export {GoUp}