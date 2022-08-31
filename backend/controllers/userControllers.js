
const jwt = require('jsonwebtoken')
const sendHello = (req, res, next) => {
    res.send({message: 'hi'})
}
const getLogin = (req, res) => {
    const email =  req.body.email
    const password = req.body.password
    console.log(email, password)
}
const getSignup = (req, res) => {
    // const email =  req.body.email
    // const password = req.body.password
    // console.log(email, password)
}
module.exports = { sendHello, getSignup, getLogin }