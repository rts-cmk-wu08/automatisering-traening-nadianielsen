// import {facilities} from "../../data.js"
import facilityArticle from "./facilityArticle.js"
// console.log(facilities)

let facilitySection = function() {
let element = document.createElement('div')
element.classList.add('facilities')

fetch("http://localhost:4000/facilities")
.then(response => response.json())
.then(facilities => {
    facilities.options.forEach(facility => {
        element.append(facilityArticle(facility))
    })
})
return element
}
export default facilitySection