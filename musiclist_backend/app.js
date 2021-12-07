const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const musicRouter = require('./controllers/music')

const mongoUrl = config.MONGO_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    console.log('connected to database...')
  }).catch(err => {
    console.log(err)
  })

app.use(cors())
app.use(express.json())

app.use('/api/music', musicRouter)


module.exports = app