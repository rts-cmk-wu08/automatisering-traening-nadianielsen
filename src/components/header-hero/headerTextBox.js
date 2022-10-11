

let headerTextBox = function() {
let element = document.createElement('div')
element.classList.add('headerTextBox')
element.innerHTML = `
    <h1>${hero.headline}</h1>
`
element.append(headerTextBox())

return element
}
export default headerTextBox