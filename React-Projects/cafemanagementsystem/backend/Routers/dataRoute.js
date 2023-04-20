const express = require('express');
const { getLengths} = require('../Controllers/dataController')
const route =  express.Router();

route.get('/length', getLengths);


module.exports = route