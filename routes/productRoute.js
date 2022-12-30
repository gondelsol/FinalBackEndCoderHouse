import express from "express";
import Container from "../Classes/class.js";

const {Router} = express;
const productRouter = Router();

import { isAdmin } from "../controllers/validation.js";
import {getProducts, postProducts, putProducts, deleteProducts} from "../controllers/products/productsHandlers.js";
import { validId, existsProduct } from "../controllers/products/productsValidations.js";


//const tipeOfClient = false;




export const prodContainer = new Container( '../files/products.txt')

productRouter.get("/:id?", validId, getProducts);

productRouter.post("/", isAdmin , postProducts);

productRouter.put("/:id", isAdmin, existsProduct, putProducts);

productRouter.delete("/:id", isAdmin, existsProduct, deleteProducts);


export default productRouter;