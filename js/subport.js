let $ = document
// const selectedPage = ShadowRoot.querySelector("header")
console.log(document.querySelector("header-site header"))

const inputMsg = document.querySelector(".input-msg-box input")
const chatBox = document.querySelector(".chat-box")

let pageUrl = $.URL

const sendMsgFunc = event => {
    if (event.keyCode == 13) {
        chatBox.insertAdjacentHTML("afterbegin", `<user-Msg user-massage="${inputMsg.value}"></user-Msg>`)
        setTimeout((() => {
            chatBox.insertAdjacentHTML("afterbegin", `<subport-msg subport-massage="با سلام خدمت شما کاربر محترم در حال حاضر پشتیبان ها آفلاین هستند"></subport-msg>`)
        }), 3000)
        inputMsg.value = ""
        // chatBox.scrollTo()
    }
}
inputMsg.addEventListener("keypress", sendMsgFunc)