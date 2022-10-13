import facilitySection from "../facilities/facilitySection.js"
// import { facilities } from "../../data.js"
import "./facility.scss"
import "./facilitySection.scss"


let facility = function() {
    let element = document.createElement('section')
    element.classList.add("facility")
    element.innerHTML = `
        <h2 class="facility__h2">${facility.headline}</h2>
    `

    element.append(facilitySection())

    return element
}
    export default facility