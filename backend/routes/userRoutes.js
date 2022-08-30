const express = require('express')
const router = express.Router()
const { sendHello } = require ('../controllers/userControllers.js');


router.get('/', sendHello)

module.exports = router