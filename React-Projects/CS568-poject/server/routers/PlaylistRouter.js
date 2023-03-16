const express = require('express');
const playListController = require('../controllers/PlaylistController');
const route = express.Router();

route.get('/:userId', playListController.getAll);
route.delete('/:playlistId', playListController.delById);
route.post('/add', playListController.save);

module.exports = route 