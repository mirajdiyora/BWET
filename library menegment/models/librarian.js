const mongoose = require('mongoose')

const librarianSchema = mongoose.Schema({

    librarianId:{
        type:Number,
        unique:true,
        required:true
    },
    librarianName:{
        type:String,
        required:true
    },
    librarianEmail:{
        type:String,
        required:true
    },
    librarianPassword:{
        type:String,
        required:true
    },
    librarianPhone:{
        type:Number,
        unique:true
    },

},{timestamps: true});

module.exports = mongoose.model("librarian", librarianSchema);