const express = require('express')
const cookieParser = require('cookie-parser')
const connectWithDatabase = require('./config/db')
const path = require('path')
const app = express()

// database
connectWithDatabase()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// get Routes
app.use('/api', require('./routes/userRoutes.js'))
app.use(express.static(path.resolve(__dirname, '../frontend/build')));


// show other routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });


app.listen(3002)
