const express = require('express')
const router = express.Router()
const { sendHello, getSignup, getLogin } = require ('../controllers/userControllers.js');


router.get('/', sendHello)
router.post('/', getLogin)
router.get('/signup', sendHello)
router.post('/signup', getSignup)

module.exports = router