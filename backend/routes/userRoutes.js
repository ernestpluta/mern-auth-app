const express = require('express')
const router = express.Router()
const { sendHello, loginUser, registerUser, logoutUser} = require ('../controllers/userControllers.js');


router.get('/login', sendHello).post('/login', loginUser)
router.get('/signup', sendHello). post('/register', registerUser)
router.get('/logout', logoutUser)

module.exports = router