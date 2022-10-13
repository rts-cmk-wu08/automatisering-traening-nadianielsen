// import {facilities} from "../../data.js"
import { sites } from "../../data.js"
import sitesArticle from "./sitesArticle.js"
// console.log(facilities)

let sitesSection = function() {
let element = document.createElement('div')
element.classList.add('sites')

fetch("http://localhost:4000/sites")
.then(response => response.json())
.then(sites => {
    sites.places.forEach(site => {
        element.append(sitesArticle(site))
    })
})
return element
}
export default sitesSection