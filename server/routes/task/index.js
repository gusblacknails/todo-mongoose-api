const express = require('express')
const router = express.Router()

const removeTaskById = require('./handlers/removeTaskById')
const updateTaskById = require('./handlers/updateTaskById')

router.delete('/:id', removeTaskById )
router.put('/:id', updateTaskById)

module.exports = router