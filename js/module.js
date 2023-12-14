import {Header} from "../component/header/header.js"
import {Footer} from "../component/footer/footer.js"
import {ChatIcon} from "../component/chatIcon/chatIcon.js"
import {GoUp} from "../component/goUp/goUp.js"
import {Pagination} from "../component/pagination/pagination.js"
import {DoctorItem} from "../component/DoctorItem/DoctorItem.js"
import {SubportMsg} from "../component/msg/msg.js"
import {UserMsg} from "../component/msg/msg.js"
import {PopUp} from "../component/popUp/popUp.js"
import {Apoint} from "../component/apoints/apoints.js"

window.customElements.define("header-site", Header)
window.customElements.define("footer-site", Footer)
window.customElements.define("chat-icon", ChatIcon)
window.customElements.define("go-up", GoUp)
window.customElements.define("pagination-elem", Pagination)
window.customElements.define("doctor-item", DoctorItem)
window.customElements.define("subport-msg", SubportMsg)
window.customElements.define("user-msg", UserMsg)
window.customElements.define("pop-up", PopUp)
window.customElements.define("apoint-item", Apoint)