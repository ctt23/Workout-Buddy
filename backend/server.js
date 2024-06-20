const express = require ('express')

// express app
const app = expres()

// listen for requests
app.listen (4000, () => {
    console.log("listening on Port 4000")
});