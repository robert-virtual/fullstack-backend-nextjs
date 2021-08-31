import express from "express";
import "reflect-metadata";
import productsRoutes from "./routes/products";
const app = express()

app.use(express.json())

app.use('/products',productsRoutes)


app.listen(5000,()=>{
    console.log('running on http://localhost:5000');
    
})