
import "./style.css"
import  home from "./home.js"
import aboutPage from "./about.js"
import createMenu from "./menu.js"
import createContactMenu from "./contact.js"

const content = document.getElementById("content")
// commenting so i wont forget this later on
const overlay = document.createElement('div') //transition overlay
overlay.classList.add('page-overlay')
document.body.appendChild(overlay) // appending the overlay to the entire viewport

function navigate(loadPage){
    if(overlay.classList.contains('active')) return;

    overlay.classList.add('active')
    //waits for the css animation to finish first before executing anything
    overlay.addEventListener('transitionend',()=>{
        content.innerHTML = ''
        loadPage(content) // apending function from different modules to the content div so it will show in the webpage
        overlay.classList.remove('active') // to reverse the animation
    })
}


const homePage = document.getElementById("home")
const menu = document.getElementById("menu")
const contact = document.getElementById("contact")

homePage.addEventListener("click", () => {
    navigate(home)
})

about.addEventListener("click", () =>{
    navigate(aboutPage)
})

menu.addEventListener("click", ()=>{
    navigate(createMenu)
})

contact.addEventListener("click", () => {
    navigate(createContactMenu)
})


home(content);

