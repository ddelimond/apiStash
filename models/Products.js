const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    productId: {
        type: Number,
        required: true,
        unique: true
    },

    image: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    desc: {
        type: String
    },

    color: {
        type: Array,
        required: true
    },

    size: {
        type: Array,
        required: true
    },

    category: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)