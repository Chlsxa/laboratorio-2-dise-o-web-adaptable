import productModel from "../models/model.product.js";

const crearProducto = async (req, res) => {
    
    const {nombre, descripcion , precio, disponibilidad} = req.body

    if (!nombre && !descripcion && !precio && !disponibilidad) {
        res.status(500).json({mjs: "los atributos nombre, descripcion, precio y disponibilidad son requeridos!!!"})
    }

    try {
        
        const crear = await productModel({nombre, descripcion , precio, disponibilidad})

        crear.save()

        res.status(201).json({msj: "producto creando exitosamente", crear})

    } catch (error) {
        console.error(error);
        
    }

}

export default crearProducto