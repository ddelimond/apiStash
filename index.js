const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.port || 3000

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// connect to db
mongoose.connect(process.env.connectionString)
    .then(() => {
        console.log('connected to Db Successfully')
    })
    .catch((err) => {
        console.log(`failed to connect to Db error:${err}`)
    })

// crud routes
app.use('/auth', require('./routes/auth.js'))
app.use('/user', require('./routes/user.js'))
app.use('/product', require('./routes/product.js'))
app.use('/cart', require('./routes/cart.js'))
app.use('/order', require('./routes/order.js'))


app.listen(port, () => {
    console.log('Backend is working!')
})
