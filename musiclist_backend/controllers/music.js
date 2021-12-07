const musicRouter = require('express').Router()
const Music = require('../models/music')

musicRouter.get('/', async (request, response) => {
    const tracks = await Music.find({})
    response.json(tracks.map(t => t))
  })

musicRouter.post('/', async (request, response) => {
const track = new Music({
    id: request.body.id,
    artist: request.body.artist,
    album: request.body.album,
    track: request.body.track
})

const savedTrack = await track.save()
response.json(savedTrack)
})


musicRouter.delete('/:id', async (request, response) => {
    await Music.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

module.exports = musicRouter