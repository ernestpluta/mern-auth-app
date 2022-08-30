const express = require('express')
const path = require('path')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use('/api/users', require('./routes/userRoutes.js'))
app.use(express.static(path.resolve(__dirname, '../frontend/build')));


// show other routes 
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });


app.listen(3002)
