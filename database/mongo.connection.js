import { configDotenv } from "dotenv";
import mongoose, { mongo } from "mongoose";

configDotenv()

const URL = process.env.urlmongo


let name = "hola"

console.log(name);


const mongoConnection = async () => {
    
    try {
        

        //hola
        //comentario

        await mongoose.connect(URL)
        console.log("conexion exitosa a la base de datos");
        


    } catch (error) {
        console.error(error);
        
        
        
    }

}

export default mongoConnection