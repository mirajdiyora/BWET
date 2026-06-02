const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userId:{
        type:Number,
        unique:true,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userPassword:{
        type:String,
        required:true
    },
    userPhone:{
        type:Number,
        unique:true
    }

},{timestamps: true});

module.exports = mongoose.model("user", userSchema)