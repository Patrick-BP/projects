const express = require('express');
const CommentsController = require('../controllers/CommentsController');
const route = express.Router();

route.get('/', CommentsController.getAll);
route.post('/add', CommentsController.save);
route.get('/:commentId', CommentsController.getById);
route.delete('/:commentId', CommentsController.delById);
route.put('/:commentId', CommentsController.updateById);

module.exports = route