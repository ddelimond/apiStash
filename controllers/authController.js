const user = require('../models/User.js')
const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        try {
            const { firstname, lastname, username, password } = req.body
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = await user.create({ password: hashedPassword, firstname, lastname, username })
            res.status(200)
        } catch (error) {
            res.status(501)
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body

            console.log(username)

            const foundUser = await user.findOne({ username: username })
            res.status(200)
            console.log(foundUser)
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }
}