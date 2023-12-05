const express = require('express');
const authentication = require('../controllers/auth.controller');

const router = express.Router()

router.post('/signup', authentication.signup)
router.post('/login', authentication.login)
module.exports = router;