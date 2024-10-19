const mongoose = require('mongoose');
const express = require('express')
const Product = require('./models/product.model.js')
const app = express()

//middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send('different text again')
})

//get all
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get one
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//create product
app.post('/api/products', async (req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//update a product by id
app.put('/api/product/:id', async (req,res) => {
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
})

//delete a product by id
app.put('/api/product/:id', async (req,res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id, req.body)
        if(!product){
            return res.status(404).json({message: error.message})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//connect to database and server
mongoose.connect('mongodb+srv://spencer:vv6WigoykZn038Ku@backenddb.hpzvx.mongodb.net/CRUD-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to database')
    app.listen(2000, () => {
        console.log("Server is running on http://localhost:2000")
    })
})
  .catch(() => {
    console.log('Connection failed!')
})

