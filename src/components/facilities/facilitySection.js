import {facilities} from "../../data.js"
import facilityArticle from "./facilityArticle.js"
console.log(facilities)

let facilityArticle = function() {
let element = document.createElement('div')
element.classList.add('facilities')

facilities.forEach(facility => {

    element.append(facilityArticle(facility))
})
return element
}
export default facilityArticle