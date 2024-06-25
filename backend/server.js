const express = require ('express')
require('dotenv').config()

// express app
const app = express()

// routes (setting up a route in an Express.js)
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})

// listen for requests
app.listen (process.env.PORT, () => {
    console.log('listening on Port', process.env.PORT)
});