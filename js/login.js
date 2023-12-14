const authenticationQuestion = document.querySelector(".authentication-question")
const passwordBox = document.querySelectorAll(".password-box")
const response = document.querySelector(".login-box h4")
const btn = document.querySelector("button")
let codeInput
let passwordInput
let authenticationInput
let currentUser = null
let randomNum = null
let usersArray = []
let questionArray = [
    { url: "images/first.jpg", value: "K99" },
    { url: "images/second.jpg", value: "MSK" },
    { url: "images/third.jpg", value: "PSM" }
]

const setSrc = () => {
    randomNum = Math.floor(Math.random() * 3)
    authenticationQuestion.setAttribute("src", questionArray[randomNum].url)
    console.log(randomNum)
}
btn.addEventListener("click", () => {

    codeInput = document.querySelector("#code").value
    passwordInput = document.querySelector("#password").value
    authenticationInput = document.querySelector("#authentication").value

    if (codeInput && passwordInput && authenticationInput) {
        if (questionArray[randomNum].value == authenticationInput) {
            console.log(":)")
            usersArray.some(user =>{
                if(user.codeMelli == codeInput && user.password == passwordInput){
                    response.innerHTML = ""
                    currentUser = user
                    localStorage.setItem("currentUser", JSON.stringify(currentUser))
                    location.assign("profile.html")
                }else{
                    console.log("code or pass isn`t correct:(")
                    response.style.color ="red"
                    response.innerHTML = "کد ملی یا گذرواژه به درستی وارد نشده"
                }
            })
            console.log(currentUser)
        } else {
            console.log("auth isn`t correct:(")
            response.style.color ="red"
            response.innerHTML = "کد احراز هویت به درستی وارد نشده"
        }
    } else {
        response.style.color ="red"
        response.innerHTML = "لطفا همه مقادیر خواسته شده را وارد کنید"
    }
})
passwordBox.forEach((btn) => {
    btn.lastElementChild.addEventListener("click", () => {
        if (btn.firstElementChild.type == "password") {
            btn.firstElementChild.type = "text"
            btn.lastElementChild.setAttribute("src", "./images/hide-password.jpg")
        } else {
            btn.firstElementChild.type = "password"
            btn.lastElementChild.setAttribute("src", "./images/show-password.jpg")
        }
    })
})

authenticationQuestion.addEventListener("click", setSrc)
window.addEventListener("load", ()=>{
    let getUsers = JSON.parse(localStorage.getItem("users"))
    if(getUsers){
        usersArray = getUsers
    }else{
        location.assign("index.html")
    }
    setSrc()
})
