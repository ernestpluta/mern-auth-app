const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const env = require('dotenv').config()
const authToken = async (req, res, next) =>{
    try{
        const authToken = req.cookies.token
        // if (authToken){ 
        //     // console.log(authToken)
        //     const response = await jwt.verify(authToken, process.env.JWT_ACCESS_TOKEN)
        //     console.log(response)
        //     // console.log(response)
        // }
        // else{
        //     // console.log('else statement')
        //      res.redirect('/signup')
        // }
    }
    catch(err){
        console.log(err)
    }
    next()
}
module.exports = { authToken }