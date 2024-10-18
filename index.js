const mongoose = require('mongoose');
const express = require('express')
const model = require('./models/product.model.js')
const app = express()

//middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send('different text again')
})

app.post('/api/products', async (req,res) => {
    try {
        await Product.create
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

