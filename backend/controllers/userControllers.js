
const sendHello = (req, res, next) => {
    res.send({message: 'hi'})
    next()
}
const getSignup = (req, res) => {
    const username =  req.body.username
    const password = req.body.password
    console.log(req)
}
const getLogin = (req, res) => {
    console.log(req.body)
}
module.exports = { sendHello, getSignup, getLogin }