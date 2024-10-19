const Product = require('../models/product.model.js')

//get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//get product by id
const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//post product
const postProduct = async (req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async (req,res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message: error.message})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteProduct =  async (req,res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id, req.body)
        if(!product){
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json({message: "Product deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports ={
    getProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
}