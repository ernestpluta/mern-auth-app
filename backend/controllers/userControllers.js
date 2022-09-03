
const jwt = require('jsonwebtoken')
const env = require('dotenv').config()
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const DBErrorHandler = require('../utils/DBErrorHandler')

const User = require('../model/User')

const sendHello = (req, res, next) => {
    res.send({message: 'hi'})
}
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    // const response = await User.findOne({email})
})
const registerUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const salt = 10
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
        const newUser = await User.create({email: email, password: hashedPassword})
        res.status(200).json({message: "user created"})
    }
    catch(err){
        let errorHandled = err
        if(err.name === "MongoServerError"){
            errorHandled = DBErrorHandler(err)
        }
        res.status(401).json({message: errorHandled.message})
    }
})

const logoutUser = asyncHandler(async(req, res) => {
    res.send({message: "Logout route in development"})
})
module.exports = { sendHello, loginUser, registerUser, logoutUser }