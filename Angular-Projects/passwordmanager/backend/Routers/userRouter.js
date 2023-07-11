const express = require('express');

const { save, getUserById, updateUserById, deleteUserByid, login } = require('../Controllers/userController')

const route = express.Router();


route.post('/login', login)
route.post('/new', save);
route.get('/:id', getUserById);
route.patch('/:id', updateUserById);
route.delete('/:id', deleteUserByid)


module.exports = route;