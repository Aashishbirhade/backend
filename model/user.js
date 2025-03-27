const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://aashish:Ab%409765229769@cluster0.hjlzq8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const user = mongoose.Schema({
    name:String,
    roll:Number,
    email:String,
    age:Number
})
module.exports = mongoose.model('user',user)