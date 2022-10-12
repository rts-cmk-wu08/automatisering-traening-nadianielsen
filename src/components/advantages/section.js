import advSection from "./advSection.js"
import "./section.scss"
import "./advSection.scss"

let section = function() {
    let element = document.createElement('section')
    element.classList.add("section")
    element.innerHTML = `
        <h2 class="section__h2">Our advantages</h2>
    `
    
    element.append(advSection())

    return element
}
    export default section