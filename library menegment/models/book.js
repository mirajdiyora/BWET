const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({

    bookId:{
        type:Number,
        unique:true,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    bookAuthor:{
        type:String,
    },
    bookPublishYear:{
        type:Number,
    },
    bookQuantity:{
        type:Number,
        required:true
    },
    

},{timestamps: true});

module.exports = mongoose.model("book", bookSchema);