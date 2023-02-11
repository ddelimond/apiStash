const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController.js')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken.js')


router.post('/', verifyTokenAndAdmin, productController.create)
router.put('/:id', verifyTokenAndAdmin, productController.update)
router.delete('/:id', verifyTokenAndAdmin, productController.delete)
router.get('/:id', verifyTokenAndAuth, productController.find)











module.exports = router