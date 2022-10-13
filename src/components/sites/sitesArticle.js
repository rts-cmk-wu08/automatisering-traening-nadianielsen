let sitesArticle = function(site) {
    console.log(site)
      let element = document.createElement('article')
      element.classList.add('sitesarticle')
      element.innerHTML = `
            <img class="facilities__img" src="${facility.icon}" alt="icon">
          <h1 class="facilities__font facilities__text">${facility.headline}</h1>
          <p class="facilities__font facilities__p">${facility.text}</p>
          `
      
      return element
      }
      export default facilityArticle