
import "./style.css"
import {imageHeader, home} from "./home.js"
import aboutPage from "./about.js"

const content = document.getElementById("content")



const homePage = document.getElementById("home")
const menu = document.getElementById("menu")

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
    
})


home(content);

