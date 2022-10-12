import {services} from "../../data.js"
import serviceArticle from "./serviceArticle.js"

let serviceSection = function() {
    let element = document.createElement('div')
    element.classList.add('services')
    
    services.forEach(service => {
    
        element.append(serviceArticle(service))
    })
    return element
    }
    export default serviceSection
