
const { timeStamp } = require('console')
const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')


const userSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: boolean,
        default: false
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema)