import express from "express";
const app = express()

const PORT =  process.env.PORT || 8080
export const tipeOfClient = false;

import cartRouter from "./routes/cartRoute.js";
import productRouter from "./routes/productRoute.js";


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/cart', cartRouter);
app.use('/api/products', productRouter);


const server = app.listen(PORT, () => {
    console.log(`The server is listening to port ${server.address().port}/`)
})


server.on('error', error => console.log('There is an error' + error))