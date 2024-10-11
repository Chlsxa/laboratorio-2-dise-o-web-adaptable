import productModel from "../models/model.product.js";

const borrarProducto = async (req, res) => {
    
    const {id} = req.params

    try {

        const borrar = await productModel.findByIdAndDelete(id)

        res.status(200).json({mjs:"producto eliminado exitosamente", borrar})
        
    } catch (error) {
        console.error(error);
        
    }

}

export default borrarProducto