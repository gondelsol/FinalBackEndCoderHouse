import express from "express";
import Container from "../Classes/class.js";


const {Router} = express;
const cartRouter = Router();

import { postCart, deleteCart, getProductsInCart, postProductInCart, deleteProductInCart } from '../controllers/cart/cartHandlers.js';
import { existsCart, existsProductForCartPost, existsProductInCart } from '../controllers/cart/cartsValidations.js'

export const cartContainer = new Container ('../files/carts.txt')

cartRouter.delete("/:id?", existsCart, deleteCart);

cartRouter.post("/", postCart);

cartRouter.get("/:id/productos", existsCart, getProductsInCart);

cartRouter.post("/:id/productos/:id_prod", existsCart, existsProductForCartPost, postProductInCart);

cartRouter.delete("/:id/productos/:id_prod", existsCart, existsProductInCart, deleteProductInCart);

export default cartRouter;