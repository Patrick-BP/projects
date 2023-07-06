const express = require('express');

const {getAllComments, save, getCommentsById, deleteCommentsById } = require('../Controllers/commentsController')

const route = express.Router();

route.get('/', getAllComments);
route.post('/new', save);
route.get('/:id', getCommentsById);
route.delete('/:id', deleteCommentsById)


module.exports = route;