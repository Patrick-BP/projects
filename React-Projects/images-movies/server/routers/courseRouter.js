const express = require('express');
const courseController = require('../controllers/courseController');
const route = express.Router();

route.get('/', courseController.getAll);
route.post('/add', courseController.save);
route.get('/:courseId', courseController.getById);

module.exports = route