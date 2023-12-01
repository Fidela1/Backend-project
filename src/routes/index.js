const express = require('express');
const userRoutes = require('./user.route')
const router = express.Router()


router.use('/auth', userRoutes)

module.exports = router