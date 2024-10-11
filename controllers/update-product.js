import productModel from "../models/model.product.js";

const actualizarProducto = async (req, res) => {


    const {id} = req.params

    const {nombre, descripcion , precio , disponibilidad} = req.body
    
    try {
        
        const actualizar = await productModel.findByIdAndUpdate(id,{nombre, descripcion , precio , disponibilidad}, {new:true})

        res.status(200).json({mjs:"producto actualizado exitosamente", actualizar})


    } catch (error) {
        console.error(error);
        
    }
}

export default actualizarProducto