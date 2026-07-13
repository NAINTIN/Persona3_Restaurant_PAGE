import image1 from "./images/makoto_food.webp"
import image2 from "./images/mitsuru_food.webp"
import image3 from "./images/akihiko_food.webp"
import image4 from "./images/elizabeth_food.webp"
import image5 from "./images/fuuka_food.webp"
import image7 from "./images/junpei_drink.webp"
import image6 from "./images/yukari_drink.webp"
import image8 from "./images/aigis_drink.webp"
import image9 from "./images/john_persona3.webp"




function createCardMenu(image){
    const card = document.createElement('div')
    card.classList.add('cards')
    const img = document.createElement('img')
    img.src = image 
    card.appendChild(img)

    return card
}

function createMenu(parent){
    const wrapper = document.createElement("div")
    wrapper.classList.add("menu-page")

    const article = document.createElement("div")
    article.classList.add("article")

    const card1 = createCardMenu(image1)

    const card2 = createCardMenu(image2)
    const card3 = createCardMenu(image3)
    const card4 = createCardMenu(image4)
    const card5 = createCardMenu(image5)
    const card6 = createCardMenu(image6)
    const card7 = createCardMenu(image7)
    const card8 = createCardMenu(image8)
   
    const footer = document.createElement('div')
    footer.classList.add("footer")

    const imageContainer = document.createElement('div')
    imageContainer.classList.add("img-container")

    const img9 = document.createElement("img")
    img9.src = image9
  
    article.appendChild(card1)
    article.appendChild(card2)
    article.appendChild(card3)
    article.appendChild(card4)
    article.appendChild(card5)
    article.appendChild(card6)
    article.appendChild(card7)
    article.appendChild(card8)
    wrapper.appendChild(article)
    imageContainer.appendChild(img9)
    footer.appendChild(imageContainer)
    wrapper.appendChild(footer)
    parent.appendChild(wrapper)
}

export default createMenu;