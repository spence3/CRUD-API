const mongoose = require('mongoose');
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('different text again')
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

