import axios from "axios";

let container = document.querySelector("#app")

const getProductById = async () => {

   const id = ""

  try {
    const respuesta = await axios.get (`http://localhost:3000/api/obtener-producto/$(id)`)

    console.log(respuesta.data);

    let pedirId = document.createElement("div")

    pedirId.innerHTML =`
    <input type="text" placeholder="Ingrese el id del producto">`

  } catch (error) {
    
  }
}

getProductById()

const cardProduct = async () => {

  try {

    const respuesta = await axios.get("http://localhost:3000/api/obtener-productos")

    console.log(respuesta.data);

    let obtenerTodos = await respuesta.data.obtenerTodos
    console.log(obtenerTodos);

    for (let producto of obtenerTodos){
      console.log(producto.nombre);
      let container = document.querySelector("#app")
      let cardproduct =document.createElement("div")

      cardproduct.className = "contenedor-productos"


      cardproduct.innerHTML = `

      <section>

      <p>Nombre producto:${producto.nombre} </p>

      <p>descripcion: ${producto.descripcion} </p>

      <p>precio: ${producto.precio} </p>

      <p>disponibilidad: ${producto.disponibilidad} </p>
      
      </section>
      `
    
      container.appendChild(cardproduct)
    }

  } catch (error) {
    console.log(error);
  }
}
cardProduct();

