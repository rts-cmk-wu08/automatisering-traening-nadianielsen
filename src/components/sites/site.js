import sitesSection from "./sitesSection.js"
// import "./sites.scss"
// import "./sitesSection.scss"

let site = function() {
    let element = document.createElement('section')
    element.classList.add("site")
    element.innerHTML = `
        <h2 class="section__h2">${site.headline}</h2>
    `
    
    element.append(sitesSection())

    return element
}
    export default site