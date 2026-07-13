
import headerimg from "./images/persona3-collab.png"
import makotoImg from "./images/makoto_burger.jpg"
import yukariImg from "./images/yukari_ice.jpg"
import aigisImg from "./images/aigis_maid.jpg"
import authorImg from "./images/persona3_wendys.jpg"
import ctaImg from "./images/john_persona3-box-art.png"

function home(parent){
    const wrapper = document.createElement("div")
    wrapper.classList.add("home-page")

    const header = document.createElement("div")
    header.classList.add("header")
    const left = document.createElement("div")
    left.classList.add("left-header")
    const right = document.createElement("div")
    right.classList.add("right-header")
    const imageContainer = document.createElement("div")
    imageContainer.classList.add("headimg-container")
    
    const headerImage = document.createElement("img")
    headerImage.src = headerimg

   


    const title = document.createElement("h2")
    title.textContent = "Persona 3 Reload X Wendy's Collaboration!"
    left.appendChild(title)

    const subtitle = document.createElement("p")
    subtitle.textContent = "Persona 3 Reload x Wendy's is a limited-time crossover promotion where Wendy's Japan collaborates with Atlus's popular JRPG Persona 3 Reload. The tie-in features specially themed menu items — like burgers, chicken nuggets, and drinks — packaged and named after the game's characters (Makoto, Yukari, Junpei, Fuuka, etc.), along with exclusive collectible packaging, character art, and promotional merchandise tied to the collaboration."
    left.appendChild(subtitle)

    const hr = document.createElement("hr")

    imageContainer.appendChild(headerImage)
    right.appendChild(imageContainer)
    header.appendChild(left)
    header.appendChild(right)
    wrapper.appendChild(header)
    wrapper.appendChild(hr)

    //body content

    wrapper.appendChild(createbody())
    wrapper.appendChild(createQuote())
    wrapper.appendChild(createCTA())
    parent.appendChild(wrapper)
}


// background-image: 
    // linear-gradient(rgba(1, 1, 1, 0.08), rgba(1, 1, 1, 0.08)),
    // radial-gradient(farthest-corner at center, #666666 24%, #333333 76%);
    // background-blend-mode: normal, overlay;


function createCard(imgSrc, caption){
    const card = document.createElement("div")
    card.classList.add("body-cards")

    const image = document.createElement("img")
    image.src = imgSrc

    const text = document.createElement("p")
    text.textContent = caption

    card.appendChild(image)
    card.appendChild(text)
    return card
}


function createbody(){

    const bodyContainer = document.createElement("div")
    bodyContainer.classList.add("body-container")
    const bodyText = document.createElement("h2")
    bodyText.textContent = "Step into the Dark Hour and satisfy your hunger like never before. Wendy's teams up with Persona 3 Reload to bring a menu inspired by  S.E.E.S. and the halls of Gekkoukan High — every item wrapped in  exclusive collab packaging."
    const bodyImgContainer = document.createElement("div")
    bodyImgContainer.classList.add("bodyimg-container")
    const bodyCard1 = createCard(makotoImg, "Orpheus, eat this burger")
    const bodyCard2 = createCard(yukariImg, "Isis, show them ice cream!")
    const bodyCard3 = createCard( aigisImg, "I comprehend!")

   
    bodyContainer.appendChild(bodyText)
    bodyImgContainer.appendChild(bodyCard1)
    bodyImgContainer.appendChild(bodyCard2)
    bodyImgContainer.appendChild(bodyCard3)
    bodyContainer.appendChild(bodyImgContainer)
    return bodyContainer


}

function createQuote(){
    const quoteContainer = document.createElement("div")
    quoteContainer.classList.add("quote-container")
    const quoteImgContainer = document.createElement("div")
    quoteImgContainer.classList.add("quote-img-container")
    const quoteImg = document.createElement("img")
    quoteImg.src = authorImg
    const quote = document.createElement("div")
    quote.classList.add("quote")
    const quoteText1 = document.createElement("p")
    quoteText1.textContent = `"The Arcana is the means by which all is revealed... and also this burger is 1,400 yen."`
    const quoteText2 = document.createElement("p")
    quoteText2.textContent = `"Thou art I, and I art the special sauce".`
    const author = document.createElement("p")
    author.textContent = `-Nyx Burger Arcana`
    author.classList.add("author")

    quote.appendChild(quoteText1)
    quote.appendChild(quoteText2)
    quote.appendChild(author)
    quoteContainer.appendChild(quoteImgContainer)
    quoteImgContainer.appendChild(quoteImg)
    quoteContainer.appendChild(quote)
    

    return quoteContainer
}

function createCTA(){
    const ctaContainer = document.createElement("div")
    ctaContainer.classList.add("cta-container")

    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("cta-button-container")

    const text = document.createElement('h3')
    text.textContent = 'Ready to summon your order?'
    text.classList.add("text-container")

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('cta-img-container')

    const img = document.createElement('img')
    img.src = ctaImg

    const button1 = document.createElement("button")
    button1.innerText = 'View Menu'
    button1.classList.add("cta-button1")

    const button2 = document.createElement("button")
    button2.innerText = 'Find a location'
    button2.classList.add('cta-button2')

    imgContainer.appendChild(img)
    buttonContainer.appendChild(button1)
    buttonContainer.appendChild(button2)
    ctaContainer.appendChild(text)
    ctaContainer.appendChild(imgContainer)
    ctaContainer.appendChild(buttonContainer)

    return ctaContainer
}

export  default home

