const mongoose = require('mongoose')

const Schema = mongoose.Schema

const scrapItemsSchema = new Schema({
    img: {
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('scrap_item', scrapItemsSchema)