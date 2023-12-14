const template = document.createElement("template")
template.innerHTML= `
    <link rel="stylesheet" href="./component/header/header.css">
    <header>
        <div class="menu">
            <span class="menu-btn">
                <span class="menu-shape">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </span>
            <ul class="slider-menu">
                <span class="close-btn">X</span>    
                <a href="index.html"><li>صفحه اصلی</li></a>
                <a href="doctorsList.html"><li>دسته بندی</li></a>
                <a href="subport.html"><li>پشتیبانی</li></a>
                <a class="login-btn" href="login.html"><li>ورود</li></a>
            </ul>
            <ul class="normal-menu">
                <a href="index.html"><li>صفحه اصلی</li></a>
                <a href="doctorsList.html"><li>دسته بندی</li></a>
                <a href="subport.html"><li>پشتیبانی</li></a>
                <a class="login-btn" href="login.html"><li>ورود</li></a>
            </ul>
        </div>
        <span class="logo">
            <a  href="index.html"><img src="./images/logo.png" alt="logo image"></a>
        </span>
    </header>
`
class Header extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        const sliderMenu = this.shadowRoot.querySelector(".slider-menu")
        const menuBtn = this.shadowRoot.querySelector(".menu-btn")
        const closeBtn = this.shadowRoot.querySelector(".close-btn")
        const loginBtn = this.shadowRoot.querySelectorAll(".login-btn")
        const headerItems = this.shadowRoot.querySelectorAll(".menu a")
        let currentUser = JSON.parse(localStorage.getItem("currentUser"))
        let pageUrl = location.pathname.split("/").pop()
        let i
        if(currentUser){
            for(i=0; i < loginBtn.length; i++){
                loginBtn[i].setAttribute("href", "profile.html")
                loginBtn[i].firstChild.innerHTML = "پروفایل"
            }
        }
        for(i=0; i < headerItems.length; i++){
            if(headerItems[i].getAttribute("href") == pageUrl){
                headerItems[i].firstChild.classList.add("selected")
            }
        }

        menuBtn.addEventListener("click", ()=>{
            sliderMenu.style.display = "flex"
            sliderMenu.style.animation = "sliderOpen 0.3s"
        })
        closeBtn.addEventListener('click', ()=>{
            sliderMenu.style.animation = "sliderClose 0.3s"
            setTimeout(()=>{
                sliderMenu.style.display = "none"
            }, 300)
        })
    }
}
export {Header}