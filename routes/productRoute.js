import express from "express";
import { tipeOfClient } from '../index.js';
import {getProducts, postProducts, putProducts, deleteProducts} from "../controllers/products/productsHandlers.js";
import { validId, existsProduct } from "../controllers/products/productsValidations.js";
import Container from "../Classes/class.js";

//const tipeOfClient = false;

const {Router} = express;
const productRouter = Router();


export const prodContainer = new Container( "../files/products.txt")

productRouter.get("/:id?", validId, getProducts);

productRouter.post("/", tipeOfClient , postProducts);

productRouter.put("/:id", tipeOfClient, existsProduct, putProducts);

productRouter.delete("/:id", tipeOfClient, existsProduct, deleteProducts);


export default productRouter;