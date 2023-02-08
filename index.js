const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.port || 8000



mongoose.connect(process.env.connectionString)
    .then(() => {
        console.log('connected to Db Successfully')
    })
    .catch((err) => {
        console.log(`failed to connect to Db error:${err}`)
    })





app.listen(port, () => {
    console.log('Backend is working!')
})
