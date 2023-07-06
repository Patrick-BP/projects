const express = require('express');

const {getAllCommentsByPostId, save, getCommentsById, deleteCommentsById } = require('../Controllers/commentsController')

const route = express.Router();

route.get('/post/:id', getAllCommentsByPostId);
route.post('/new', save);
route.get('/:id', getCommentsById);
route.delete('/:id', deleteCommentsById)


module.exports = route;