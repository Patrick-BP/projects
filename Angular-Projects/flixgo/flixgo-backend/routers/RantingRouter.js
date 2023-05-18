const express = require('express');
const RatingController = require('../controllers/RatingController');
const route = express.Router();

route.get('/:userId/:movieId', RatingController.getAverage);
route.post('/add', RatingController.save);
route.get('/check/:userId/:movieId', RatingController.check);
module.exports = route 