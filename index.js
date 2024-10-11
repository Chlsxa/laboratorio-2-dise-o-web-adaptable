import { configDotenv } from "dotenv"
import express from "express"
import mongoConnection from "./database/mongo.connection.js"
import productRoute from "./routes/router.product.js"
import cors from "cors"
configDotenv()

mongoConnection()

let port = process.env.port

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api", productRoute)

app.listen(port,() => {console.log(`servidor corriendo en http://localhost:${port}`);
} )