const template = document.createElement("template")
template.innerHTML= `
    <link rel="stylesheet" href="./component/footer/footer.css">
    <footer>
        <div class="right-sec">
            <a href="./index.html">صفحه اصلی</a>
            <a href=".doctorsList.html">دسته بندی</a>
            <a href="./subport.html">پشتبانی</a>
            <a href="./login.html">ورود</a>
        </div>
        <div class="center-sec">
            <a>Github</a>
            <a>Telegram</a>
            <a>Linkedin</a>
            <a>Instagram</a>
        </div>
        <div class="left-sec">
            <img><img><img>
        </div>
    </footer>
`
class Footer extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
export {Footer}