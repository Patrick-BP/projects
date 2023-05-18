const express = require('express');
const CommentsController = require('../controllers/CommentsController');
const route = express.Router();

route.get('/:movieId', CommentsController.getAllComnts);
route.post('/add', CommentsController.save);
route.get('/:commentId', CommentsController.getById);
route.patch('/del/:commentId', CommentsController.delCommentById);
route.delete('/del/:commentId/:replyId', CommentsController.delReplyById);
route.put('/:commentId', CommentsController.updateById);
route.patch('/reply', CommentsController.saveReply);

module.exports = route