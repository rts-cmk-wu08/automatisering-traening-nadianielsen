import {hero} from "../../data.js"
import "./heroHeader.scss"
import headerTextBox from "./headerTextBox.js"
console.log(hero)

let heroHeader = function() {
let element = document.createElement('header')
element.classList.add('header')
element.innerHTML = `
    <img class="header__img" src="${hero.image}" alt="">
`

return element
}
export default heroHeader