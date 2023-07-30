const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT || 3500

app.use(express.json())


app.use('/api', require('./api/users/Routes'))
app.use('/api', require('./api/brand/Router'))




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})