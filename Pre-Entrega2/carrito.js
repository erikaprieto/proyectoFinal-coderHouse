let inputAnimal = document.createElement("input")
inputAnimal.type = "text"
inputAnimal.placeholder = "Ingrese un Animal"
inputAnimal.id = "inputAnimal"
inputAnimal.className = "textfield"

let inputImagen = document.createElement("input")
inputImagen.type = "text"
inputImagen.placeholder = "Ingrese la imagen del animal"
inputImagen.id = "inputImagen"
inputImagen.className = "textfield"


function creadorDeInput(type, placeholder, id, className) {
    let input = document.createElement("input")
    input.type = type;
    input.placeholder = placeholder;
    input.id = id;
    input.className = className;
    
    return input;
}

let inputDescripcion = creadorDeInput("text", "Ingrese descripcion", "inputDescripcion", "textfield")

document.body.append(inputAnimal)
document.body.append(inputDescripcion)
document.body.append(inputImagen)

let boton = document.createElement("button")
boton.innerText = "Guardar"
document.body.append(boton)


let animalValor
let imagenValor
let descripcionValor


inputAnimal.addEventListener("blur", (event) => {
    animalValor = event.target.value
})

inputImagen.addEventListener("blur", (event) => {
    imagenValor = event.target.value
})

inputDescripcion.addEventListener("blur", (event) => {
    descripcionValor = event.target.value
})

let body_section = document.createElement("section")
document.body.append(body_section)

let animales = JSON.parse(localStorage.getItem("animales"))

if (animales === null ) {
    animales = []
    
    console.log(animales);
    
}

animales.forEach(animal => {
    let body_article = document.createElement("article")
    let article_h2 = document.createElement("h2")
    let article_imagen = document.createElement("img")
    let article_p = document.createElement("p")
    
    article_h2.innerText = animal.animal;
    article_p.innerText = animal.tamaño;
    article_imagen.src = animal.imagen;
    article_imagen.alt = animal.animal;
    
    body_article.append(article_h2)
    body_article.append(article_imagen)
    body_article.append(article_p)
    body_section.append(body_article)


});




boton.addEventListener("click", () => {
    let animal = {
        animal: animalValor,
        imagen: imagenValor,
        tamaño: descripcionValor
    }
console.log(animales);
    animales.push(animal)
    

    animalValor = ""
    imagenValor = ""
    descripcionValor = ""
    inputAnimal.value = ""
    inputImagen.value = ""
    inputDescripcion.value = ""
    console.log(animales);

    let stringAnimales = JSON.stringify(animales)
    localStorage.setItem("animales", stringAnimales)

    let body_article = document.createElement("article")
    let article_h2 = document.createElement("h2")
    let article_imagen = document.createElement("img")
    let article_p = document.createElement("p")

    article_h2.innerText = animal.animal;
    console.log(animal.animal);
    article_p.innerText = animal.tamaño;
    article_imagen.src = animal.imagen;
    article_imagen.alt = animal.animal;

    body_article.append(article_h2)
    body_article.append(article_imagen)
    body_article.append(article_p)
    body_section.append(body_article)

})
