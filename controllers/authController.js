const user = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

            const dbUser = await user.findOne({ username: username })

            if (!dbUser) {
                console.log('User does not exist')
            } else {
                if (await bcrypt.compare(password, dbUser.password)) {
                    console.log('Successful login')
                    const accessToken = jwt.sign({
                        id: dbUser._id,
                        isAdmin: dbUser.isAdmin,
                    }, process.env.jwtSec, { expiresIn: "1d" })


                    const { password, ...others } = dbUser._doc;
                    res.status(200).json({ others, accessToken })
                } else {
                    console.log('Incorrect Password')
                    res.status(500)
                }
            }
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }
}