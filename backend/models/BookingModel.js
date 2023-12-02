const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    // type of vehicle for pickup
    vehicle: {
        Type: String
    },
    // date & time of pickup
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { Timestamp: true })

module.exports = mongoose.model('booking', bookingSchema)