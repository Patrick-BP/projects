const express = require('express');
const TvshowsController = require('../controllers/TvshowsController');
const storage = require('../helper/storagePoster')
const route = express.Router();

route.get('/', TvshowsController.getAll);
route.post('/', TvshowsController.save);
route.get('/:tvId', TvshowsController.getById);
route.delete('/del/:tvId', TvshowsController.delById);
route.patch('/:tvId', TvshowsController.updateById);
route.patch('/poster/:tvId',storage, TvshowsController.updatePosterById);
route.post('/filter', TvshowsController.filter);
module.exports = route