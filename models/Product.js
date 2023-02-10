const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    productId: {
        type: Number,
        required: true,
        unique: true
    },

    img: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true,
        unique: true
    },

    desc: {
        type: String
    },

    color: {
        type: String,
        required: true
    },

    size: {
        type: String,
        required: true
    },

    categories: {
        type: Array,
        required: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)