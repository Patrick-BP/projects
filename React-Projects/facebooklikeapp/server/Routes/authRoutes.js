const express = require('express')
const {login } = require('../Controllers/usersController');
const route = express.Router();


route.post('/login', login )


module.exports = route;