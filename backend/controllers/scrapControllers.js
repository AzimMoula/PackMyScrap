const scrapList = require('../models/scrapListModel')

const getScrapList = async (req, res) => {
    const scrapItems = await scrapList.find({})

    res.status(200).json(scrapItems)
}

const createAppointment = async (req, res) => {
    const {  }
}