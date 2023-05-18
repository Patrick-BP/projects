const express = require('express');
const MovieController = require('../controllers/MovieController');
const route = express.Router();


route.get('/:movieId', MovieController.getById);
route.get('/', MovieController.getAll);
route.get('/search/', MovieController.search);
route.post('/filter', MovieController.filter);

module.exports = route