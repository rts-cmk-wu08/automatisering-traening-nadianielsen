import advSection from "./advSection.js"
import "./section.scss"
import "./advSection.scss"

let section = function() {
    let element = document.createElement('section')
    element.classList.add("section")
    element.innerHTML = `
        <h1 class="section__h1">Our advantages</h1>
    `
    
    element.append(advSection())

    return element
}
    export default section