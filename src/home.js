import headerImage from "./persona3-collab.png"

function home(parent){
    const wrapper = document.createElement("div")
    wrapper.classList.add("home-page")

    const header = document.createElement('h1')
    header.textContent = "Persona 3 Reload X Wendy's"
    wrapper.appendChild(header)
    parent.appendChild(wrapper)
    imageHeader(wrapper)
}

function imageHeader(parent){
    const image = document.createElement("img")
    image.src = headerImage
    parent.appendChild(image)
}

export  {home,imageHeader}

