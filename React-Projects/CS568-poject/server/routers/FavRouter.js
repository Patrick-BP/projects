const express = require('express');
const FavController = require('../controllers/FavController');
const route = express.Router();

route.get('/:userId', FavController.getAll);
route.post('/add', FavController.save);
route.delete('/:userId/:movieId', FavController.delById);


module.exports = route 