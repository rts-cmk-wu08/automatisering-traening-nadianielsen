import heroHeader from "./components/header-hero/heroHeader.js"
import section from "./components/advantages/section.js"

let element = document.querySelector(".wrapper")

element.append(heroHeader())
element.append(section())