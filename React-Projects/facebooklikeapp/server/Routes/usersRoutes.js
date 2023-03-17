const express = require('express')
const {createUser, updateUser, getUser} = require('../Controllers/usersController');
const route = express.Router();

route.post("/", createUser);
route.put('/:id', updateUser);
route.get('/:id', getUser )

module.exports = route;