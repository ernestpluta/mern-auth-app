const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const helmet = require('helmet')
const connectWithDatabase = require('./config/db')
const path = require('path')
const app = express()

// database
connectWithDatabase()

// middleware
app.use(helmet())
// app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// get Routes
app.use('/api/auth', require('./routes/userRoutes.js'))
app.use(express.static(path.resolve(__dirname, '../frontend/build')));


// show other routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });


app.listen(3002)
