const express = reuire('express')

const router = express.Router()

// home page
router.get('/', (req, res) => {
    res.json({mssg: 'home page'})
})

// scheduling form
router.post('/schedule', (req, res) => {
    res.json({mssg: 'schedule page'})
})

router.get('/scrapItems', (req, res) => {
    res.json({mssg: 'scrapItems list pages'})
})

router.post('/priceEvaluator', (req, res) => {
    res.json({mssg: 'price for scrap page'})
})

router.get('/priceEvaluator', (req, res) => {
    res.json({mssg: 'price for scrap page'})
})

module.exports = router