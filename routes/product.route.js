const express = require('express')
const router = express.Router()

const {getProducts, getProduct, postProduct, updateProduct, deleteProduct} = require('../controller/product.controller.js')


//get all products
router.get('/', getProducts)

//get product by id
router.get('/:id', getProduct)

//post product
router.post('/:id', postProduct)

//update product
router.put('/:id', updateProduct)

//delete product
router.delete('/:id', deleteProduct)

module.exports = router