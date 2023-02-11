const Order = require('../models/Order.js')

module.exports = {
    create: async (req, res) => {
        try {
            const newOrder = await Order.create(req.body)
            res.status(200).json(newOrder)
        } catch (err) {
            res.status(500).json(err)
        }

    },
    update: async (req, res) => {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedProd)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
            await Order.findByIdAndDelete(req.params.id)
            res.status(200).json('Order deleted!')
        } catch (err) {
            res.status(500).json(err)
        }
    },
    find: async (req, res) => {
        try {
            const fetchedOrder = await Order.find({ userId: req.params.userId })
            res.status(200).json(fetchedOrder)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    findAll: async (req, res) => {
        try {
            const allOrders = await Order.find()
            res.status(200).json(allProducts)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}