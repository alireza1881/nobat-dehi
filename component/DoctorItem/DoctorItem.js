let doctorName = null
let doctorField = null
let doctorCity = null
let apointmentBtn = null

const template = document.createElement("template")
template.innerHTML = `
    <link rel="stylesheet" href="component/DoctorItem/DoctorItem.css">
    <div class="item">
        <img  src="./images/default.jpg" alt="doctor image">
        <div class="doctor-info">
            <div>
                <span class="name"></span>
                <button class="btn">گرفتن نوبت</button>
            </div>
            <div>
                <span class="field"></span>
                <span class="city"></span>
            </div>
        </div>
    </div>
`

class DoctorItem extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback() {
        doctorName = this.shadowRoot.querySelector(".name")
        doctorField = this.shadowRoot.querySelector(".field")
        doctorCity = this.shadowRoot.querySelector(".city")
        apointmentBtn = this.shadowRoot.querySelector(".btn")
        doctorName.innerHTML = this.getAttribute("doctor-name")
        doctorField.innerHTML = this.getAttribute("doctor-field")
        doctorCity.innerHTML = this.getAttribute("doctor-city")
        apointmentBtn.setAttribute("onclick", this.getAttribute("click-func"))
        
    }
    static observedAttributes() {
        return ["doctor-name", "doctor-field", "doctor-city", "click-func"]
    }
}
export { DoctorItem }