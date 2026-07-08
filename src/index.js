
import "./style.css"
import  home from "./home.js"
import aboutPage from "./about.js"
import createMenu from "./menu.js"
import createContactMenu from "./contact.js"

const content = document.getElementById("content")



const homePage = document.getElementById("home")
const menu = document.getElementById("menu")
const contact = document.getElementById("contact")

homePage.addEventListener("click", () => {
    content.innerHTML = ""
    home(content);
})

about.addEventListener("click", () =>{
    content.innerHTML= ""
    aboutPage(content)
})

menu.addEventListener("click", ()=>{
    content.innerHTML = ""
    createMenu(content)
})

contact.addEventListener("click", () => {
    content.innerHTML = ""
    createContactMenu(content)
})


home(content);

