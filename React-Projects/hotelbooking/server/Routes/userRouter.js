const express = require('express');
const route = express.Router();
const {addUser, getAllUsers, deleteUser} = require('../Controllers/userController');


route.post('/add', addUser);
route.get('/all', getAllUsers);
route.delete('/del/:id', deleteUser);


module.exports =  route