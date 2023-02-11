const Cart = require('../models/Cart.js')
const cart = require('../models/Cart.js')

module.exports = {
    create: async (req, res) => {
        try {
            const newCart = await Cart.create(req.body)
            res.status(200).json(newCart)
        } catch (err) {
            res.status(500).json(err)
        }

    },
    update: async (req, res) => {
        try {
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedProd)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
            await Cart.findByIdAndDelete(req.params.id)
            res.status(200).json('Cart deleted!')
        } catch (err) {
            res.status(500).json(err)
        }
    },
    find: async (req, res) => {
        try {
            const fetchedCart = await products.find({ userId: req.params.userId })
            res.status(200).json(fetchedProd)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    findAll: async (req, res) => {
        try {
            const allProducts = await products.find()
            res.status(200).json(allProducts)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}