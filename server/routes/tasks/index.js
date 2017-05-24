const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const getCompleted = require('./handlers/getCompleted')
const addTask = require('./handlers/addTask')

router.get('/', getAll)
router.get('/completed', getCompleted)
router.post('/', addTask)

module.exports = router