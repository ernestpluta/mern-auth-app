const express = require('express')
const router = express.Router()
const { sendHello, loginUser, registerUser, logoutUser} = require ('../controllers/userControllers.js');
const { authToken } = require('../middleware/authToken')


// router.get('/login', sendHello).post('/login', authToken, loginUser)
// router.post('/login', authToken, loginUser)
// router.post('/register', registerUser)
router.post('/api/auth/login', authToken, loginUser)
router.post('/api/auth/register', registerUser)
// router.get('/dashboard', authToken)
// router.get('/signup', sendHello).post('/register', registerUser)
// router.get('/logout', logoutUser)

module.exports = router