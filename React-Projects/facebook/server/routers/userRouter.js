
const express = require('express');
const {saveUser, login, getProfile} = require('../controllers/userController')
const route = express.Router();

route.post('/save', saveUser);
route.post('/login', login);
route.get('/profile', getProfile);

module.exports = route