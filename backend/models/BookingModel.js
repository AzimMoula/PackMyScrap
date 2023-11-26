const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookingSchema = new Schema({
    // type of vehicle for pickup
    vehicle: {
        required: true
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
    // pickup charges
    service_charge: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Booking', BookingSchema)