// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

// LISTEN
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})

module.exports = app;
