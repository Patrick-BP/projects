const express = require('express');
const MovieController = require('../controllers/MovieController');
const route = express.Router();

route.get('/', MovieController.getAll);
route.post('/', MovieController.save);
route.get('/:movieId', MovieController.getById);
route.delete('/:movieId', MovieController.delById);
route.put('/:movieId', MovieController.updateById);

module.exports = route