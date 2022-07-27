const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const StudentsRouter = require('./routes/students.api')
const TeachersRouter = require('./routes/teachers.api')
const envirment = process.env.ENVIRMENT
const mongoURI = process.env.MONGODB_URI

mongoose.connect(mongoURI) 
    .then(() => console.log("connected to dataBase"))
    
    const app = express()
    const port = process.env.PORT

app.use(express.json())
if (envirment == "development"){
    app.use(cors())
}
app.use("/student" , StudentsRouter)
app.use("/teacher" , TeachersRouter)



app.listen(port , function () {
    console.log("Up and running on port " + port);
})

