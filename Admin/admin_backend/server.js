require('dotenv').config();
                                                                                                                                                                                                                                                

const express = require('express')
const mongoose = require('mongoose')
const courseRoutes = require('./Routes/courses')
const adminRoutes = require('./Routes/admin')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/courses', courseRoutes)
app.use('/api/admin', adminRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
        console.log('Connected to database and listening on port' , process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })