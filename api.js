let contenedor_padre = document.querySelector(".contenedor-padre")

async function api (){
    const rick = await fetch("https://rickandmortyapi.com/api/character/,35,102,64,37")
    let traerRick = await rick.json()
    console.log(traerRick)
    for(let i = 0;i < traerRick.length; i++){
        let carta = document.createElement ("section")
        carta.classList.add("contenedor-ficha")
        contenedor_padre.appendChild(carta)
        let imagen = document.createElement("section")
        carta.appendChild(imagen)
        let parrafo = document.createElement("section")
        carta.appendChild(parrafo)
        imagen.innerHTML += `<img src= ${traerRick[i].image} class= "styleImg"></img>`
        parrafo.innerHTML += `<p>Nombre:${traerRick[i].name}</p><p>Status:${traerRick[i].status}</p><p>Especie:${traerRick[i].species}</p><p>Gender: ${traerRick[i].gender}</p>`}
    
}
api()

