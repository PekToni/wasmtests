const mongoose = require('mongoose')

const musicSchema = mongoose.Schema({
  id: Number,
  artist: String,
  album: String,
  track: String
})

module.exports = mongoose.model('Music', musicSchema)