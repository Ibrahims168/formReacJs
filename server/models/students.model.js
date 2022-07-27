const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    fullName: String,
    age: Number,
    class: String
})

const Student = mongoose.model("student" , studentSchema)

module.exports = Student 


