require('dotenv').config()
const express = require('express')
const userRoutes = require('./routes/userRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use('/auth', userRoutes)

app.use('/bookings', bookingRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        // listen to port
        app.listen(process.env.PORT, () => {
            console.log('listening for requests on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })
