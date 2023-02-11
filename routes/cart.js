const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cartController.js')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken.js')


router.post('/', verifyToken, cartController.create)
router.put('/:id', verifyTokenAndAuth, cartController.update)
router.delete('/:id', verifyTokenAndAuth, cartController.delete)
router.get('/:userId', verifyTokenAndAuth, cartController.find)
router.get('/all', verifyTokenAndAdmin, cartController.findAll)











module.exports = router