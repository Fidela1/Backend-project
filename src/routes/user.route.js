const express = require('express');
const authentication = require('../controllers/auth.controller');
const checkIfUserExist = require('../middleware/middleware')

const router = express.Router()

router.post('/signup',
checkIfUserExist, 
authentication.signup
)
router.post('/login', authentication.login)
module.exports = router;