const express = require('express');

const {getAllRepliesByCommentId, save, getReplysById, deleteRepliesById } = require('../Controllers/repliesController')

const route = express.Router();

route.get('/comment/:id', getAllRepliesByCommentId);
route.post('/new', save);
route.get('/:id', getReplysById);
route.delete('/:id', deleteRepliesById)


module.exports = route;