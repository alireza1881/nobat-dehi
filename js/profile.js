const profileBtn = document.querySelector(".profile-btn")
const apointsBtn = document.querySelector(".apoints-btn")
const editProfileBtn = document.querySelector(".edit-profile-btn")
const profileSec = document.querySelector(".user-profile")
const apointsSec = document.querySelector(".apoint-box")
const editProfileSec = document.querySelector(".edit-profile")
const exitProfileSec = document.querySelector(".exit-profile")

let apointsList = JSON.parse(localStorage.getItem("apointments"))
let currentUser = JSON.parse(localStorage.getItem("currentUser"))
let usersArray = JSON.parse(localStorage.getItem("users"))
let entriesUser = Object.entries(currentUser)

// let apointsListArray = usersArray.find(user => currentUser.Id ==  user.Id).apoints

const showProfileFunc = user =>{
    const nameElem = document.querySelector(".user-profile .name label")
    const codeMelliElem = document.querySelector(".user-profile .code-melli label")
    const fieldElem = document.querySelector(".user-profile .field label")
    const cityElem = document.querySelector(".user-profile .city label")
    const roleElem = document.querySelector(".user-profile .role label")
    const passwordElem = document.querySelector(".user-profile .password label")
    const addresElem = document.querySelector(".user-profile .addres p")
    let role

    nameElem.innerHTML = user.name
    codeMelliElem.innerHTML = user.codeMelli
    cityElem.innerHTML = user.city
    passwordElem.innerHTML = user.password
    if(user.field){
        fieldElem.innerHTML = user.field
        roleElem.innerHTML = "پزشک"
        addresElem.innerHTML = user.addres
    }else{
        fieldElem.innerHTML = "کاربر"
        roleElem.innerHTML = "کاربر"
        addresElem.innerHTML = "آدرس شما در سیستم ثبت نشده"
    }
}

profileBtn.addEventListener("click", ()=>{
    profileSec.style.display = "grid"
    apointsSec.style.display = "none"
    editProfileSec.style.display = "none"
    showProfileFunc(currentUser)
})
apointsBtn.addEventListener("click", ()=>{
    apointsSec.innerHTML = ""
    apointsSec.style.display = "grid"
    profileSec.style.display = "none"
    editProfileSec.style.display = "none"

    if(currentUser.field){
        // showApoints("user")
        console.log("U R doctor :)")
        apointsList.forEach(apoint =>{
            apointsSec.innerHTML +=`<apoint-item name-entry="${apoint.user}" date-entry="${apoint.date}"></apoint-item>`
        })
    }else{
        // showApoints("doctor")
        console.log("U R user :)")
        apointsList.forEach(apoint =>{
            apointsSec.innerHTML +=`<apoint-item name-entry="${apoint.doctor}" date-entry="${apoint.date}"></apoint-item>`
        })
    }
})
// const showApoints = uName =>{
//     let variable 
//     apointsList.filter(apoint =>{
//         variable = apoint.uName
//         console.log(apoint.uName)
//         apointsSec.innerHTML +=`<apoint-item name-entry="${apoint.uName}" date-entry="${apoint.date}"></apoint-item>`
//     })
// }
editProfileBtn.addEventListener("click", ()=>{
    editProfileSec.style.display = "grid"
    apointsSec.style.display = "none"
    profileSec.style.display = "none"
    const nameElem = document.querySelector(".edit-profile .name input")
    const codeMelliElem = document.querySelector(".edit-profile .codeMelli input")
    const fieldElem = document.querySelector(".edit-profile .field input")
    const cityElem = document.querySelector(".edit-profile .city input")
    const roleElem = document.querySelector(".edit-profile .role input")
    const passwordElem = document.querySelector(".edit-profile .password input")
    const addresElem = document.querySelector(".edit-profile .addres input")
    const submitBtn = document.querySelector(".edit-profile button")

    nameElem.placeholder = currentUser.name
    codeMelliElem.placeholder = currentUser.codeMelli
    cityElem.placeholder = currentUser.city
    passwordElem.placeholder = currentUser.password
    if(currentUser.field){
        fieldElem.placeholder = currentUser.field
        roleElem.placeholder = "پزشک"
        addresElem.placeholder = currentUser.addres
    }else{
        fieldElem.placeholder = "کاربر"
        roleElem.placeholder = "کاربر"
        addresElem.placeholder = "آدرس شما در سیستم ثبت نشده"
    }
    submitBtn.addEventListener("click", ()=>{
        let inputsArray = document.querySelectorAll(".edit-profile input")
        let j = 0
        let i 
        for (let item of entriesUser) {
            for(i=0; i < inputsArray.length; i++){
                if(item[0]== inputsArray[i].parentElement.className){
                    if(inputsArray[i].value){
                        console.log(inputsArray[i].parentElement.className)
                        item[1] = inputsArray[i].value
                        console.log(item)
                    }
                }
            }
            j++
        }
        console.log(entriesUser)
        let editedUser = Object.fromEntries(entriesUser)
        currentUser = editedUser
        localStorage.setItem("currentUser", JSON.stringify(editedUser))
        console.log(editedUser)
    })
})
exitProfileSec.addEventListener("click", ()=>{
    localStorage.removeItem("currentUser")
    location.assign("login.html")
})

window.addEventListener("load", ()=>showProfileFunc(currentUser))