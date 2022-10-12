import "./headerTextBox.scss"

let headerTextBox = function(hero) {
let element = document.createElement('div')
element.classList.add('headertextbox')
element.innerHTML = `
    <h1 class="headertextbox__heading">${hero.headline}</h1>
    <p class="headertextbox__text">${hero.copy}</p>
    <button class="headertextbox__btn"><img class="headertextbox__icon" src="${hero.icon}" alt="">Explore</button>
`

return element
}
export default headerTextBox