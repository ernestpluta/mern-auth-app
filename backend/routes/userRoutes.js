const express = require('express')
const router = express.Router()
const { sendHello, getSignup, getLogin } = require ('../controllers/userControllers.js');


router.get('/login', sendHello)
router.post('/login', getLogin)
router.get('/signup', sendHello)
router.post('/signup', getSignup)

module.exports = router