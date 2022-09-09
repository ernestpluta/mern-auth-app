const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const env = require('dotenv').config()
const authToken = async (req, res, next) =>{
    try{
        const authToken = req.cookie.token
        if (authToken){
            const result = await jwt.verify(authToken, process.env.JWT_ACCESS_TOKEN)
            if(result){
                console.log("authorized")
            }
            else{
                console.log("wrong, not authorized")
            }
        }
        else {
            console.log('you are not authorized')
            // return res.redirect('/signup')
        }


    }
    catch(err){
        console.log(err)
    }
    next()
}
module.exports = { authToken }