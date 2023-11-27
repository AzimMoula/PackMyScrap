const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    // type of vehicle for pickup
    vehicle: {
        Type: String
    },
    // date & time of pickup
    month: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('booking', bookingSchema)