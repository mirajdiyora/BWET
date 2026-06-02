const mongoose = require("mongoose");
const facultySchema = mongoose.Schema({
    name: String,
    email: String,
    department: String
}, { timestamps: true })

module.exports = mongoose.model('Faculty', facultySchema)