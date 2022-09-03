
const jwt = require('jsonwebtoken')
const env = require('dotenv').config()
const asyncHandler = require('express-async-handler')

const User = require('../model/User')

const sendHello = (req, res, next) => {
    res.send({message: 'hi'})
}
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    // const response = await User.findOne({email})
    // console.log(response)
    // res.status(400).send(`User with email: ${email} already exists`)
})
const registerUser = asyncHandler(async(req, res) => {
    // const response = await User.find({name: req.body.email, password: req.body.password})
    res.status(409).send(`User with email: ${req.body.email} already exists`)
})

const logoutUser = asyncHandler(async(req, res) => {
    res.send({message: "Logout route in development"})
})
module.exports = { sendHello, loginUser, registerUser, logoutUser }