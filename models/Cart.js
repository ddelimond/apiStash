const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },

    productid: {
        type: Number,
        required: true
    },

    prodName: {
        type: String,
        required: true
    },
    prodImage: {
        type: String,
        reuired: true
    },
    quantity: {
        type: Number,
        default: 1,
        requird: true
    }

})