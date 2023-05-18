const express = require('express');
const episodeController = require('../controllers/episodeController');

const storageVideo = require('../helper/storageEpisVideo')
const route = express.Router();

route.get('/', episodeController.getAll);
route.post('/', episodeController.save);
route.get('/:episId', episodeController.getEpisodesTvshowById);
route.get('/:tvId/:episId', episodeController.getEpisodeTvshowById);
route.delete('/del/:episId', episodeController.delById);
route.patch('/video/:episId',storageVideo, episodeController.updateVideoById);



module.exports = route