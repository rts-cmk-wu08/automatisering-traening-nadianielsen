import serviceSection from "./serviceSection.js"
import "./serviceSection.scss"
import "./servSection.scss"


let servSection = function() {
    let element = document.createElement('section')
    element.classList.add("service")
    element.innerHTML = `
        
    `
    
    element.append(serviceSection())

    return element
}
    export default servSection