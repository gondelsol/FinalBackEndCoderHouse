import express from "express";
import { tipeOfClient } from '../index.js';
import {getProducts, postProducts, putProducts, deleteProducts} from "../controllers/products/productsHandlers.js";
import { validId, existsProduct } from "../controllers/products/productsValidations.js";
import Container from "../Classes/class.js";

//const tipeOfClient = false;

const {Router} = express;
const router = Router();



export const prodContainer = new Container("../files/products.txt")

router.get("/:id?", validId, getProducts);

router.post("/", tipeOfClient , postProducts);

router.put("/:id", tipeOfClient, existsProduct, putProducts);

router.delete("/:id", tipeOfClient, existsProduct, deleteProducts);


export default productRouter;