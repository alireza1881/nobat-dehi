const userStatus = Array.from(document.querySelectorAll(".status"))
const onlyDoctorData = document.querySelector(".only-doctor")
const signInBox = document.querySelector("form")
const btn = document.querySelector("button")
const response = document.querySelector(".signin-box h4")
const authenticationQuestion = document.querySelector(".authentication-question")
const passwordBox = document.querySelectorAll(".password-box")

let nameInput
let codeMelliInput
let cityInput
let fieldInput =
cityInput = document.querySelector("#city")
fieldInput = document.querySelector("#field")
let addresInput
let passwordInput
let confirmPasswordInput
let authenticationInput
let selectedItem = userStatus[1]
let selectedIndex = null
let randomNum = null
let citySelected = "همدان"
let fieldSelected = ""
let isDoctor = false
let usersArray = []
let newUser = {}
let questionArray = [
    { url: "images/first.jpg", value: "K99" },
    { url: "images/second.jpg", value: "MSK" },
    { url: "images/third.jpg", value: "PSM" }
]


cityInput.addEventListener("change",()=>{
    citySelected = cityInput.value
    console.log(citySelected)
})

fieldInput.addEventListener("change",()=>{
    fieldSelected = fieldInput.value
})

userStatus[1].style.opacity = "1"
userStatus.forEach((item) => {
    item.addEventListener("click", () => {
        selectedIndex = userStatus.findIndex(function (itm) {
            return itm == selectedItem
        })
        if (item !== selectedItem) {
            item.style.opacity = "1"
            selectedItem = item
            userStatus[selectedIndex].style.opacity = "0.5"
        }
        if (selectedItem == userStatus[0]) {
            onlyDoctorData.style.display = "block"
            isDoctor = true
        } else {
            onlyDoctorData.style.display = "none"
            isDoctor = false
        }
    })
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
const setSrc = () => {
    randomNum = Math.floor(Math.random() * 3)
    authenticationQuestion.setAttribute("src", questionArray[randomNum].url)
    console.log(randomNum)
}
btn.addEventListener("click", event => {
    event.preventDefault()
    
    nameInput = document.querySelector("#name").value
    codeMelliInput = document.querySelector("#code-melli").value

    addresInput = document.querySelector("#addres").value
    passwordInput = document.querySelector("#password").value
    confirmPasswordInput = document.querySelector("#confirm").value
    authenticationInput = document.querySelector("#authentication").value    
        if (nameInput && codeMelliInput && cityInput && passwordInput && confirmPasswordInput && authenticationInput) {
        if (questionArray[randomNum].value == authenticationInput) {
            if (codeMelliInput.length == 10) {
                    if (passwordInput.length >= 8) {
                        if (usersArray.every(user => user.codeMelli !== codeMelliInput)) {
                            if (passwordInput == confirmPasswordInput) {
                                newUser = {
                                    Id: usersArray.length + 1,
                                    name: nameInput,
                                    codeMelli: codeMelliInput,
                                    city: citySelected,
                                    field: fieldSelected,
                                    addres: addresInput,
                                    password: passwordInput,
                                    isDoctor: isDoctor,
                                    apoints:[]
                                }
                                usersArray.push(newUser)
                                localStorage.setItem("users",JSON.stringify(usersArray))
                                console.log(usersArray)
                                console.log("go to login page")
                                response.style.color ="green"
                                response.innerHTML = "کاربر به درستی ثبت شد"
                                setTimeout(()=>location.assign("login.html"),2000)
                            } else {
                                response.style.color ="red"
                                response.innerHTML = "گذرواژه با تکرار آن مطابقت ندارد"
                            }
                        } else {
                            console.log("code melli ghablan sabt shode")
                            response.style.color ="red"
                            response.innerHTML = "کاربری با کد ملی وارد شده قبلا ثبت شده"
                        }
                    }else {
                        console.log("password kutahe")
                         response.style.color ="red"
                        response.innerHTML = "گذرواژه نمیتواند کمتر از 8 کاراکتر باشد"
                    }
                }else {
                console.log("code melli dorost nist")
                response.style.color ="red"
                response.innerHTML = "کد ملی درست نیست"
            }
        } else {
            console.log("auth isn`t correct:(")
            response.style.color ="red"
            response.innerHTML = "وارد"
        }
    } else {
        console.log(nameInput)
        response.style.color ="red"
        response.innerHTML = "لطفا همه مقادیر خواسته شده را وارد کنید"
    }

})
authenticationQuestion.addEventListener("click", setSrc)
window.addEventListener("load", ()=>{
    let getUsers = JSON.parse(localStorage.getItem("users"))
    if(getUsers){
        usersArray = getUsers
    }else{
        console.log(":)")
        usersArray = fualtUsersArray = [
            {Id: 1,name: "محمد محمدی",codeMelli: "0123456789", city: "همدان", field: "کودک", addres: "همدان خیابان بوعلی", password: "12345678", idDoctor: true ,apoints:[]},
            {Id: 2,name: "علی علوی",codeMelli: "0123456799", city: "همدان", field: "چشم", addres: "همدان خیابان خواجه رشید", password: "87654321", idDoctor: true ,apoints:[]},
            {Id: 3,name: "امیر امیری",codeMelli: "0123456799", city: "تهران", field: "ارتوپد", addres: "تهران بلوار ولیعصر", password: "87654321", idDoctor: true ,apoints:[]},
            {Id: 4,name: "جواد جوادی",codeMelli: "0123459999", city: "تهران", field: "", addres: "", password: "12341234", idDoctor: false ,apoints:[]},
            {Id: 5,name: "مجید مجیدی",codeMelli: "0123499999", city: "همدان", field: "", addres: "", password: "12344321", idDoctor: false ,apoints:[]}
        ]
    }
    setSrc()
})
