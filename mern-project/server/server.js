const express = require('express')
const server = express()
require('dotenv').config()

server.get('/', (req, res) => {
    res.send('Siema World!')
})

server.listen(3002)