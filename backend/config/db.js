const mongoose = require('mongoose')
const env = require('dotenv').config()

const connectWithDatabase = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGODB_URI)
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connectWithDatabase