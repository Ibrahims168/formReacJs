const express = require('express')
const mongoose = require('mongoose') 
const StudentsRouter = express.Router() 
const Students = require("../models/students.model")
 

StudentsRouter.get("/getStudents", async function(req, res) {
    try {
        const students = await Students.find()
        res.send(students)   
    } 
    catch (error) {
        res.statusCode(404)
    }
}) 



StudentsRouter.post("/addStudents", async function(req, res) { 
    const student = req.body
    if (!student) {
        res.status(500).send({ message: "invaild student values"});
    }

    const studentDb = new Students (student)


    try {
        const dataBaseResponse = await studentDb.save()
        res.send(dataBaseResponse)
    } 
    catch (error) {
        res.statusCode(500)
    }
}) 



module.exports = StudentsRouter
