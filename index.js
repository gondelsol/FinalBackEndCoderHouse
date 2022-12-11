const express = require('express')
const app = express()
//import express from "express";
//export const tipeOfClient = false;

const PORT =  process.env.PORT || 8080
//export const tipeOfClient = false;



const cartRoute = require('./routes/cartRoute');
const productRouter = require ('./routes/productRoute.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/cart', cartRoute);
app.use('/api/products', productRouter);


const server = app.listen(PORT, () => {
    console.log(`The server is listening to port ${server.address().port}/`)
})


server.on('error', error => console.log('There is an error' + error))