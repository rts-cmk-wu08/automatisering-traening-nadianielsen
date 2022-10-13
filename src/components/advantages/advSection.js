// import {advantages} from "../data.js"
import advArticle from "./advArticle.js"
// console.log(advantages)

let advSection = function() {
    let element = document.createElement('div')
    element.classList.add('advantages')

    fetch("http://localhost:4000/advantages")
        .then(response => response.json())
        .then(advantages => {
            advantages.forEach(advantage => {
                element.append(advArticle(advantage))
        })
    })
return element
}
export default advSection