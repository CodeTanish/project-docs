const express = require('express')
const { register } = require('../controller/user.controller')
const router = express.Router()

router.post('/auth/register', register);

module.exports = router