require('dotenv').config()
const express = require('express')
const scrapRoutes = require('./routes/scrapRoutes')

const app = express()

app.use(exprss.json())

app.use('/api/scrap', scrapRoutes)

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})