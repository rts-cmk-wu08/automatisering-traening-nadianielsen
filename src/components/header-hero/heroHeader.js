// import {hero} from "../../data.js"
import "./heroHeader.scss"
import headerTextBox from "./headerTextBox.js"
// console.log(hero)

let heroHeader = function() {
let element = document.createElement('header')
element.classList.add('header')

fetch("http://localhost:4000/hero")
.then(response => response.json())
.then(hero => {
    element.innerHTML = `
        <img class="header__img" src="${hero.image}" alt="">
    `
    
    element.append(headerTextBox(hero))
})

return element
}
export default heroHeader