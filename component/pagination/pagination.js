const template = document.createElement("template")
template.innerHTML = `
    <link rel="stylesheet" href="component/pagination/pagination.css">
    <div class="pagination">
        <span class="btn arrow previous-btn"><span></span></span>
        <span class="btn" onclick="selectBtn(1)">1</span>
        <span class="btn" onclick="selectBtn(2)">2</span>
        <span class="btn" onclick="selectBtn(3)">3</span>
        <span class="btn arrow next-btn"><span></span></span>
    </div>
    `

class Pagination extends HTMLElement{
    constructor(){
        super()

        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallBack(){
        let pagination = this.shadowRoot.querySelector(".pagination")
        let btnNumber = this.getAttribute("btn-nim")
        pagination.innerHTML =`
        <span class="btn" onclick="selectBtn(${btnNumber})">${btnNumber}</span>
        `
    }
    static observedAttributes(){
        return ["btn-num"]
    }
}
export {Pagination}