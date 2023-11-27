const bookingModel = require('../models/bookingModel')
const mongoose = require('mongoose')

const getBookings = async (req, res) => {
    const bookings = await bookingModel.find({})
    res.json(bookings)
}

const getOneBooking = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such booking'})
    }

    const booking = await bookingModel.findById(id)

    if(!booking) {
        return res.status(404).json({error: 'no such booking'})
    }

    res.status(200).json(booking)
}

const createBooking = async (req, res) => {
    const {vehicle,month,day,time,address} = req.body
    let emptyFields = []

    if (!vehicle) {
      emptyFields.push('vehicle')
    }
    if (!month) {
      emptyFields.push('month')
    }
    if (!day) {
      emptyFields.push('day')
    }
    if(!time) {
        emptyFields.push('time')
    }
    if(!address) {
        emptyFields.push('address')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    try {
        const newBooking = await bookingModel.create({vehicle,month,day,time,address})
        res.status(200).json(newBooking)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const deleteBooking = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such bookings'})
    }

    const booking = await bookingModel.findOneAndDelete({_id: id})

    if(!booking) {
        return res.status(404).json({error: 'no such bookings'})
    }
    res.status(200).json({booking})
}

const updateBooking = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such booking'})
    }

    const booking = await bookingModel.findOneAndUpdate({_id: id}, {...req.body})

    if(!booking) {
        return res.status(404).json({error: 'no such booking'})
    }
    res.status(200).json({booking})
}

module.exports = {
    getBookings,
    getOneBooking,
    createBooking,
    deleteBooking,
    updateBooking
}