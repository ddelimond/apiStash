const bcrypt = require('bcrypt');
const Cart = require('../models/Cart.js');
const { find } = require('../models/User.js');
const User = require('../models/User.js')

module.exports = {
    update: async (req, res) => {
        if (req.body.password) {
            req.body.password = bcrypt.hash(req.body.password, 10)
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
                { new: true }
            );
            res.status(200).json(updatedUser)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)

            res.status(200).json("Deleted user")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    find: async (req, res) => {
        try {
            const user = await User.find({ userId: req.params.userId })
            const { password, ...others } = user._doc
            res.status(200).json(others)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    findAll: async (req, res) => {
        try {
            const allCarts = await Cart.find()
            res.status(200).json(allCarts)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}