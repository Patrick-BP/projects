const express = require('express');
const playListController = require('../controllers/PlayListController');
const route = express.Router();

route.get('/:userId', playListController.getAll);
route.delete('/del/:userId/:movieId', playListController.delById);
route.post('/add', playListController.save);
route.get('/check/:userId/:movieId', playListController.check);
module.exports = route 