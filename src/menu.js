import image1 from "./images/makoto_food.png"
import image2 from "./images/mitsuru_food.png"
import image3 from "./images/akihiko_food.png"
import image4 from "./images/elizabeth_food.png"
import image5 from "./images/fuuka_food.png"
import image6 from "./images/trio_drinks.png"
import image7 from "./images/john_persona3.png"


function createMenu(parent){
    const wrapper = document.createElement("div")
    wrapper.classList.add("menu-page")

    const article = document.createElement("div")
    article.classList.add("article")

    const card1 = document.createElement("div")
    card1.classList.add("cards")
    const img1 = document.createElement("img")
    img1.src = image1
    card1.appendChild(img1)

    const card2 = document.createElement("div")
    card2.classList.add("cards")
    const img2 = document.createElement("img")
    img2.src = image2
    card2.appendChild(img2) 

    const card3 = document.createElement("div")
    card3.classList.add("cards")
    const img3 = document.createElement("img")
    img3.src = image3
    card3.appendChild(img3) 

    const card4 = document.createElement("div")
    card4.classList.add("cards")
    const img4 = document.createElement("img")
    img4.src = image4
    card4.appendChild(img4)
    
    const card5 = document.createElement("div")
    card5.classList.add("cards")
    const img5 = document.createElement("img")
    img5.src = image5
    card5.appendChild(img5) 

    const card6 = document.createElement("div")
    card6.classList.add("cards")
    const img6 = document.createElement("img")
    img6.src = image6
    card6.appendChild(img6) 


    const footer = document.createElement('div')
    footer.classList.add("footer")

    const imageContainer = document.createElement('div')
    imageContainer.classList.add("img-container")

    const img7 = document.createElement("img")
    img7.src = image7
  
    article.appendChild(card1)
    article.appendChild(card2)
    article.appendChild(card3)
    article.appendChild(card4)
    article.appendChild(card5)
    article.appendChild(card6)
    wrapper.appendChild(article)
    imageContainer.appendChild(img7)
    footer.appendChild(imageContainer)
    wrapper.appendChild(footer)
    parent.appendChild(wrapper)
}



export default createMenu;