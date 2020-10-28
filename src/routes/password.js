const express = require('express')
const router = express.Router()
const password = require('../controllers/password')

//Routes Holerite User
//router.use(authMiddleware)
router.get('/:password', password.index)

module.exports = router