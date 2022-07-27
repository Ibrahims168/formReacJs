const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teacherSchema = new Schema({
    fullName: String,
    Subject: String
})
const Teacher = mongoose.model("teacher" , teacherSchema)

module.exports = Teacher
