const express = require('express');
const {Router} = express;
const router = Router();

const {Container} = require('../Classes/class')


export const prodContainer = new Container("../files/products.txt")

router.get("/:id?", validId, getProducts);

router.post("/", isAdmin , postProducts);

router.put("/:id", isAdmin, existsProduct, putProducts);

router.delete("/:id", isAdmin, existsProduct, deleteProducts);


module.exports = router;