const itemBox = document.querySelector(".items-box")
const pagination = document.querySelector(".pagination")
const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const city = document.querySelector("#city-filter")
const field = document.querySelector("#field-filter")
const setFilterBtn = document.querySelector(".set-filter-btn")
const apointmentScreen = document.querySelector(".apointment")
const apointmentBox = document.querySelector(".apointment-box")
const response = document.querySelector(".apointment-box h4")
const apointmentDateInput = document.querySelector(".date-sec input")
const apointSubmitBtn = document.querySelector(".submit")
const apointCancelBtn = document.querySelector(".cancel")
const selectedDoctorName = document.querySelector("#name label")
const selectedDoctorField = document.querySelector("#field label")
const selectedDoctorAddres = document.querySelector(".addres label")

let currentPage = 1
let itemCount = 4
let filterFullName = null
let citySelected
let fieldSelected
let userInPage
let endIndex
let startIndex
let currentUser = JSON.parse(localStorage.getItem("currentUser"))
let filterObj = {}
let apointmentsArray = []
let usersArray
let doctorsArray

city.addEventListener("change", () => {
    citySelected = city.value
    console.log(citySelected)
})
field.addEventListener("change", () => {
    fieldSelected = field.value
    console.log(fieldSelected)
})

setFilterBtn.addEventListener("click", () => {
    if (firstName.value || lastName.value) {
        filterFullName = firstName.value + " " + lastName.value
        filterFullName.trim()
    }

    filterArr = [filterFullName, fieldSelected, citySelected]
    itemBox.innerHTML = ""
    let filterStatus = filterArr.some(item => {
        return item
    })
    if (filterStatus) {
        doctorsArray.forEach(doctor => {
            if (doctor.name.includes(filterArr[0]) || doctor.city == filterArr[2] || doctor.field == filterArr[1]) {
                itemBox.innerHTML += `
                            <doctor-item doctor-name="${doctor.name}" doctor-field="${doctor.field}" doctor-city="${doctor.city}" click-func="apointmentFunc(${doctor.Id})"></doctor-item>
                            `
                console.log(":)")
            }
        })
    }
    else {
        itemBox.innerHTML = `
                <h2>پزشکی با مشخصات وارد شده یافت نشد:(</h2>
            `
    }
})
const apointmentFunc = doctorId => {
    console.log(doctorId)
    apointmentScreen.style.display = "flex"
    if (currentUser) {
        doctorsArray.some(doctor => {
            if (doctor.Id == doctorId) {
                selectedDoctorName.innerHTML = doctor.name
                selectedDoctorField.innerHTML = doctor.field
                selectedDoctorAddres.innerHTML = doctor.addres
            }
        })
        let idEntry = doctorId
        apointSubmitBtn.setAttribute("onclick", `submitFunc(${idEntry})`)
        apointCancelBtn.addEventListener("click", canceled)
    } else {
        apointmentBox.innerHTML = ""
        apointmentBox.append(document.createElement("h3"), document.createElement("a"))
        let first = apointmentBox.firstChild
        let last = apointmentBox.lastChild
        first.classList.add("login-msg")
        first.innerHTML = "برای دریافت نوبت ابتدا باید وارد شوید"
        last.setAttribute("href", "./login.html")
        last.classList.add("login-btn")
        last.innerHTML = "ورود"
        setTimeout(() => {
            apointmentScreen.style.display = "none"
        }, 3000)
    }
}
const canceled = () => {
    console.log("in canceled func :)")
    apointmentScreen.style.display = "none"
    apointmentDateInput.value = ""
    selectedDoctorName.innerHTML = ""
    selectedDoctorField.innerHTML = ""
    selectedDoctorAddres.innerHTML = ""
    response.innerHTML = ""
}
const submitFunc = doctorId => {
    let doctorArray = usersArray.find(user => user.Id == doctorId)
    let now = new Date
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    console.log("befor first if")
    if (month < 10) {
        month = "0" + month
    }
    let date = now.getDate()
    console.log("befor second if")
    if (date < 10) {
        date = "0" + date
    }
    console.log("befor third if")
    let todayDate = year + "-" + month + "-" + date
    if (apointmentDateInput.value >= todayDate) {
        console.log("in third if")
        let newApointment = {
            doctor: doctorArray.name,
            user: currentUser.name,
            date: apointmentDateInput.value
        }
        console.log("new apointment data: ", newApointment)
        apointmentsArray.push(newApointment)
        localStorage.setItem("apointments", JSON.stringify(apointmentsArray))
        usersArray.filter(user => {
            if ((user.Id == currentUser.Id) || (user.Id == doctorId)) {
                user.apoints.push(newApointment)
                localStorage.setItem("users", JSON.stringify(usersArray))

            }
        })
        response.style.color = "green"
        response.innerHTML = "نوبت ثبت شد :)"
        setTimeout(
            canceled
            , 2000)

    } else {
        response.style.color = "red"
        response.innerHTML = "لطفا تاریخ مورد نظر را وارد کنید"
    }
}
const showItem = (array, currentPage, itemCount) => {
    itemBox.innerHTML = ""
    endIndex = itemCount * currentPage
    startIndex = endIndex - itemCount
    userInPage = array.slice(startIndex, endIndex)
    userInPage.forEach(doctor => {
        itemBox.innerHTML += `
            <doctor-item doctor-name="${doctor.name}" doctor-field="${doctor.field}" doctor-city="${doctor.city}" click-func="apointmentFunc(${doctor.Id})"></doctor-item>
        `
    })
}
const showBtn = (array, itemCount) => {
    let page = Math.ceil(array.length / itemCount)
    for (i = 1; i <= page; i++) {
        pagination.innerHTML += `<span class="btn" onclick="selectBtn(${i})">${i}</span>`
        if (i == currentPage) {
            pagination.children[i - 1].classList.add("selected-btn")
        }
    }
}
const selectBtn = (selected) => {
    let prePage = document.querySelector(".selected-btn")
    prePage.classList.remove("selected-btn")
    currentPage = selected
    pagination.children[selected - 1].classList.add("selected-btn")
    showItem(doctorsArray, currentPage, itemCount)
}
window.addEventListener("load", () => {
    let getUsers = JSON.parse(localStorage.getItem("users"))
    if (getUsers) {
        usersArray = getUsers
        console.log(":)")
    } else {
        console.log(":(")
        location.assign("index.html")
    }
    doctorsArray = usersArray.filter(user => user.field !== "")
    let getApointments = JSON.parse(localStorage.getItem("apointments"))
    if (getApointments) {
        apointmentsArray = getApointments
    } else {
        apointmentsArray = []
    }
    showItem(doctorsArray, currentPage, itemCount)
    showBtn(doctorsArray, itemCount)

})