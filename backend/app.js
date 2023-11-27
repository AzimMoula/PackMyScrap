require('dotenv').config()
const express = require('express')
const scrapRoutes = require('./routes/scrapRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use(scrapRoutes)

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