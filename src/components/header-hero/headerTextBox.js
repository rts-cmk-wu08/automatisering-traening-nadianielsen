import "./headerTextBox.scss"

let headerTextBox = function(hero) {
let element = document.createElement('div')
element.classList.add('headertextbox')
element.innerHTML = `
    <h1 class="header__heading">${hero.headline}</h1>
`

return element
}
export default headerTextBox