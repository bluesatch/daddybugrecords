const express = require('express')
const router = express.Router()

const PORT = process.env.PORT || 3005

router.get('/api', (req, res)=> {
    res.json({
        'All Albums': `http://localhost:${PORT}/api/album`,
        'All Artists': `http://localhost:${PORT}/api/artist`,
        'All Bands': `http://localhost:${PORT}/api/band`,
        'All Genres': `http://localhost:${PORT}/api/genre`,
        'All Labels': `http://localhost:${PORT}/api/label`,
        'All Users': `http://localhost:${PORT}/api/user`
    })
})

router.use('/api/artist', require('./api/artistRoutes'))
router.use('/api/band', require('./api/bandRoutes'))
router.use('/api/genre', require('./api/genreRoutes'))
router.use('/api/label', require('./api/labelRoutes'))
router.use('/api/user', require('./api/userRoutes'))
router.use('/api/album', require('./api/albumRoutes'))

router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 Error This page does not exist! </h1>')
    }
})

module.exports = router