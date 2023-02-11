

const express = require('express')
const router = express.Router()
const stripe = require('stripe')(process.env.stripKey)
const stripeController = require('../controllers/stripeController')

router.post('/', stripeController.pay)







module.exports = router