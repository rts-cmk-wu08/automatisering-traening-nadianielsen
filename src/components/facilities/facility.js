import { facilities } from "../../data.js"
import "./facility.scss"

let facility = function() {
    let element = document.createElement('section')
    element.classList.add("facility")
    element.innerHTML = `
        <h2 class="facility__h2">${facilities.headline}</h2>
    `
    

    return element
}
    export default facility