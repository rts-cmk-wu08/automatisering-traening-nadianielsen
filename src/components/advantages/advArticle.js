let advArticle = function(advantage) {
let element = document.createElement('article')
element.classList.add('adv__article')
element.innerHTML = `
      <img class="advantages__img" src="${advantage.icon}" alt="icon">
    <h1 class="advantages__font advantages__text">${advantage.headline}</h1>
    <p class="advantages__font advantages__p">${advantage.text}</p>
    `

return element
}
export default advArticle