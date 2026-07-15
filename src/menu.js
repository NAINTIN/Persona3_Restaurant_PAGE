import image1 from "./images/makoto_food.webp"
import image2 from "./images/mitsuru_food.webp"
import image3 from "./images/akihiko_food.webp"
import image4 from "./images/elizabeth_food.webp"
import image5 from "./images/fuuka_food.webp"
import image7 from "./images/junpei_drink.webp"
import image6 from "./images/yukari_drink.webp"
import image8 from "./images/aigis_drink.webp"
import image9 from "./images/john_persona3.webp"




function createCardMenu(image,caption){
    const card = document.createElement('div')
    card.classList.add('cards')

    const img = document.createElement('img')
    img.src = image
    
    const text = document.createElement('p')
    text.textContent = caption

    card.appendChild(img)
    card.appendChild(text)

    return card
}

function createMenu(parent){
    const wrapper = document.createElement("div")
    wrapper.classList.add("menu-page")

    const article = document.createElement("div")
    article.classList.add("article")

    const card1 = createCardMenu(image1,"Wild Duck Burger")

    const card2 = createCardMenu(image2,"Spicy Bacon Arrabbiata")
    const card3 = createCardMenu(image3, "Cheese Nuggets with Ketchup")
    const card4 = createCardMenu(image4, "Fried Chicken Takoyaki")
    const card5 = createCardMenu(image5, "Yamagishi Fuuka Burger")
    const card6 = createCardMenu(image6,"Strawberry Milk Float")
    const card7 = createCardMenu(image7, "Blue Soft Serve")
    const card8 = createCardMenu(image8, "Lemon Mango Tapioca")
   
    
  
    article.appendChild(card1)
    article.appendChild(card2)
    article.appendChild(card3)
    article.appendChild(card4)
    article.appendChild(card5)
    article.appendChild(card6)
    article.appendChild(card7)
    article.appendChild(card8)
    wrapper.appendChild(article)
    wrapper.appendChild(footerDialogue())
    parent.appendChild(wrapper)
}

function footerDialogue(){
    const footer = document.createElement('div')
    footer.classList.add("footer")

    const imageContainer = document.createElement('div')
    imageContainer.classList.add("img-container")

    const img9 = document.createElement("img")
    img9.src = image9

    imageContainer.appendChild(img9)
    footer.appendChild(imageContainer)

    return footer
}

export default createMenu;