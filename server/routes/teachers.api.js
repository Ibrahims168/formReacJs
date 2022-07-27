const express = require('express')
const mongoose = require('mongoose') 
const TeachersRouter = express.Router() 
const Teachers = require("../models/teachers.model")

TeachersRouter.get("/getTeachers", async function(req, res) { 
    try {
        const teachers = await Teachers.find()
        res.send(teachers)    
    } 
    catch (error) {
        res.statusCode(500)
    }
}) 


TeachersRouter.post("/addTeachers", async function(req, res) { 
    const teacher = req.body
    if (!teacher) {
        res.status(500).send({ message: "invaild student values"});
    }

    const teachertDb = new Teachers(teacher)


    try {
        const dataBaseResponse = await teachertDb.save()
        res.send(dataBaseResponse)
    } 
    catch (error) {
        res.statusCode(500)
    }
}) 



module.exports = TeachersRouter
