
const jwt = require('jsonwebtoken')
const env = require('dotenv').config()
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const DBErrorHandler = require('../utils/DBErrorHandler')

const User = require('../model/User')

const saltRounds = 10

const sendHello = (req, res, next) => {
    res.send({message: 'hi'})
}
const newToken = async (userID) => {
   return await jwt.sign({ id: userID }, process.env.JWT_ACCESS_TOKEN, { expiresIn: 86400 })
}

const loginUser =  async (req, res, next) => {
    try{
        // check if user exists in the database
        const userFound = await User.findOne({ email: req.body.email })
        const passwordsMatch = await bcrypt.compare(req.body.password, userFound.password)

        if(userFound && passwordsMatch){

           const token = await newToken(userFound._id)
           res.cookie("token", token , { maxAge: 2 * 60 * 60 * 1000, httpOnly: true, sameSite: true }).json({ message: "User logged in" })

        }
        else{
            res.status(404).json({ message: "Incorrect email or password." })
        }
    }
    catch(err){
        console.log(err.message)
    }
}
const registerUser = asyncHandler(async(req, res) => {
    const { email: typedEmail, password: typedPassword } = req.body
    try {
        const hashedPassword = await bcrypt.hash(typedPassword, saltRounds)
        const newUser = await User.create({email: typedEmail, password: hashedPassword})
        const token = await newToken(newUser._id)
        res.status(200).json({message: "user created", token: token})
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