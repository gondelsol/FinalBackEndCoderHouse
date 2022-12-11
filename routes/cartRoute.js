const express = require('express');
const {Router} = express;
const cartRouter = Router();
const { Container} = require('../Classes/class')



import { postCart, deleteCart, getProductsInCart, postProductInCart, deleteProductInCart } from '../controllers/cart/cartHandlers';
import { existsCart, existsProductForCartPost, existsProductInCart } from '../controllers/cart/cartsValidations.js'

export const cartContainer = new Container ('../files/carts.txt')

cartRouter.delete("/:id?", existsCart, deleteCart);

cartRouter.post("/", postCart);

cartRouter.get("/:id/productos", existsCart, getProductsInCart);

cartRouter.post("/:id/productos/:id_prod", existsCart, existsProductForCartPost, postProductInCart);

cartRouter.delete("/:id/productos/:id_prod", existsCart, existsProductInCart, deleteProductInCart);

module.exports = router;