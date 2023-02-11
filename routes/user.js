const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken.js')

router.put('/:id', verifyTokenAndAuth, userController.update)
router.delete('/:id', verifyTokenAndAuth, userController.delete)
router.get('/find/:id', verifyTokenAndAdmin, userController.find)
router.get('/all', verifyTokenAndAdmin, userController.findAll)











module.exports = router