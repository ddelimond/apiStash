const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController.js')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken.js')


router.post('/', verifyToken, orderController.create)
router.put('/:id', verifyTokenAndAdmin, orderController.update)
router.delete('/:id', verifyTokenAndAuth, orderController.delete)
router.get('/:userId', verifyTokenAndAdmin, orderController.find)
router.get('/all', verifyTokenAndAdmin, orderController.findAll)








module.exports = router