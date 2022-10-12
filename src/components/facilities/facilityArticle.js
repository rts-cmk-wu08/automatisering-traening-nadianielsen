let facilityArticle = function(facility) {
    let element = document.createElement('article')
    element.classList.add('facilityarticle')
    element.innerHTML = `
          <img class="advantages__img" src="${facility.icon}" alt="icon">
        <h1 class="advantages__font advantages__text">${advantage.headline}</h1>
        <p class="advantages__font advantages__p">${advantage.text}</p>
        `
    
    return element
    }
    export default facilityArticle