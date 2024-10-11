import productModel from "../models/model.product.js";


const obtenerProductos = async (req, res) => {
    
    try {
        const obtenerTodos = await productModel.find()

        res.status(200).json({mjs:"productos obtenidos exisamente", obtenerTodos})

    } catch (error) {
        
        console.error(error);
        

    }

}

const obtenerProductoPorId = async (req, res) => {
    
    const {id} = req.params

    try {

        const obtenerPorId = await productModel.findById(id)

        res.status(200).json({mjs:"producto obtenido exitosamente ", obtenerPorId})

    } catch (error) {
        
        console.error(error);
        

    }

}

const obtenerPorNombre = async (req, res) => {
    const {nombre} = req.body

    try {
        const buscarpornombre = await productModel.find({nombre})

        res.status(200).json({msj: "producto con el nombre encontrado exitosamente", buscarpornombre})

    } catch (error) {
        console.error(error)
        
    }
}

export {
    obtenerProductos,
    obtenerProductoPorId,
    obtenerPorNombre
}