import crearProducto from "../controllers/create.product.js";

import express from "express"
import { obtenerPorNombre, obtenerProductoPorId, obtenerProductos } from "../controllers/read-product.js";
import actualizarProducto from "../controllers/update-product.js";
import borrarProducto from "../controllers/delete-product.js";

const productRoute = express.Router()

productRoute.get("/obtener-productos", obtenerProductos)

productRoute.get("/obtener-producto/:id", obtenerProductoPorId)

productRoute.get("/obtener-producto-por-nombre/:nombre", obtenerPorNombre)

productRoute.post("/add-product", crearProducto)

productRoute.put("/actualizar-producto/:id", actualizarProducto)


productRoute.delete("/borrar-producto/:id", borrarProducto)



export default productRoute