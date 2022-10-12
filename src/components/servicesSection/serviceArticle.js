let serviceArticle = function(service) {
    let element = document.createElement('article')
    element.classList.add('servicearticle')
    element.innerHTML = `
        <img class="services__img" src="${service.illustration}" alt="">
        <h2 class="services__h2">${service.headline}</h2>
        <p class="services__font services__text">${service.text}</p>
        <p class="services__font services__text">${service.linktext}</p>
    `
    
    return element
    }
    export default serviceArticle