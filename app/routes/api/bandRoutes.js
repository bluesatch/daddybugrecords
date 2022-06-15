const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/bandDao')

router.get('/', (req, res)=> {
    dao.findAll(res, 'band')
})

router.get('/sort', (req, res)=> {
    dao.sort(req, res)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, 'band', req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res)
})

router.patch('/update', (req, res)=> {
    dao.update(req, res)
})

module.exports = router