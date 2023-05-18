const express = require('express');
const MovieController = require('../controllers/MovieController');
const storage = require('../helper/storagePoster')
const storageVideo = require('../helper/storageVideo')
const route = express.Router();

route.get('/', MovieController.getAll);
route.post('/', MovieController.save);
route.get('/:movieId', MovieController.getById);
route.delete('/del/:movieId', MovieController.delById);
route.patch('/:movieId', MovieController.updateById);
route.patch('/poster/:movieId',storage, MovieController.updatePosterById);
route.patch('/video/:movieId',storageVideo, MovieController.updateVideoById);


module.exports = route